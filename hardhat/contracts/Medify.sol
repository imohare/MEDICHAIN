// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import "./MedifyPatient.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract Medify {
    using EnumerableSet for EnumerableSet.AddressSet;

    event PatientCreated(address indexed patientAddress);

    address public patientImplContract;

    // Maps ETH wallet address of Patient to their Patient Permissions Contract
    mapping(address => address) private patientContracts;

    // Maps ETH Wallet address of Health Care Provider -> Patient ETH Wallet Address
    mapping(address => EnumerableSet.AddressSet) private healthProviderPatients;

    uint256 private salt;

    constructor(address _patientContract) {
        patientImplContract = _patientContract;
    }

    modifier patientExists(address patient) {
        require(
            patientContracts[patient] != address(0),
            "Patient must be created first"
        );
        _;
    }

    function createPatient() external {
        require(
            patientContracts[msg.sender] != address(0),
            "Patient already created"
        );
        address patientClone = Clones.cloneDeterministic(
            patientImplContract,
            bytes32(salt++)
        );

        MedifyPatient(patientClone).initialize(address(this));
        patientContracts[msg.sender] = patientClone;

        emit PatientCreated(patientClone);
    }

    function createPatientAndPermission(address healthProvider, MedifyPatient.PermissionType permissionType) external {
        this.createPatient();
        MedifyPatient(patientContracts[msg.sender]).addPermission(healthProvider, permissionType);
    }

    function getPatientContract() external view returns (address) {
        return patientContracts[msg.sender];
    }

    function addPatient(address patient) external patientExists(patient) {
        healthProviderPatients[msg.sender].add(patient);
    }

    function removePatient(address patient) external patientExists(patient) {
        healthProviderPatients[msg.sender].remove(patient);
    }

    function getPatientList() external view returns (address[] memory) {
        return healthProviderPatients[msg.sender].values();
    }
}
