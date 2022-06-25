// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract MedifyPatient is Initializable {
    using EnumerableSet for EnumerableSet.AddressSet;

    address private owner;

    enum PermissionType {
        Read,
        Write,
        ReadWrite
    }

    struct Permissions {
        bool read;
        bool write;
    }

    struct HealthProviderPermissions {
        address healthProvider;
        Permissions permissions;
    }

    mapping(address => Permissions) private healthProviderPermissions;
    EnumerableSet.AddressSet private healthProviders;

    address public patientFactory;

    modifier isOwner() {
        require(owner == msg.sender, "Only the owner can invoke this function");
        _;
    }

    function initialize(address _patientFactory) public initializer {
        patientFactory = _patientFactory;
        owner = msg.sender;
    }

    function addPermission(
        address healthProvider,
        PermissionType permissionType
    ) external isOwner {
        if (permissionType == PermissionType.ReadWrite) {
            healthProviderPermissions[healthProvider].read = true;
            healthProviderPermissions[healthProvider].write = true;
            healthProviders.add(healthProvider);
        } else if (permissionType == PermissionType.Read) {
            healthProviderPermissions[healthProvider].read = true;
            healthProviders.add(healthProvider);
        } else if (permissionType == PermissionType.Write) {
            healthProviderPermissions[healthProvider].write = true;
            healthProviders.add(healthProvider);
        }
    }

    function removePermission(
        address healthProvider,
        PermissionType permissionType
    ) external isOwner {
        if (permissionType == PermissionType.ReadWrite) {
            healthProviderPermissions[healthProvider].read = false;
            healthProviderPermissions[healthProvider].write = false;
        } else if (permissionType == PermissionType.Read) {
            healthProviderPermissions[healthProvider].read = false;
        } else if (permissionType == PermissionType.Write) {
            healthProviderPermissions[healthProvider].write = false;
        }
    }

    function viewPermission(address healthProvider)
        external
        view
        isOwner
        returns (bool canRead, bool canWrite)
    {
        canRead = healthProviderPermissions[healthProvider].read;
        canWrite = healthProviderPermissions[healthProvider].write;
    }

    function getAllHealthProviders() external view isOwner returns(address[] memory)
    {
        return healthProviders.values();
    }

    function getAllPermissions() external view isOwner returns(HealthProviderPermissions[] memory) {
        uint numHealthProviders = healthProviders.length();
        HealthProviderPermissions[] memory _healthProviderPermissions = new HealthProviderPermissions[](numHealthProviders);

        for(uint i = 0; i < numHealthProviders; i++) {
            _healthProviderPermissions[i].healthProvider = healthProviders.at(i);
            _healthProviderPermissions[i].permissions = healthProviderPermissions[_healthProviderPermissions[i].healthProvider];
        }

        return _healthProviderPermissions;
    }
}
