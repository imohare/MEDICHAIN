const hre = require("hardhat");

async function main() {
  const Patient = await hre.ethers.getContractFactory("MedifyPatient");
  const patient = await Patient.deploy();
  await patient.deployed();
  console.log("Patient deployed to:", patient.address);

  const Medify = await hre.ethers.getContractFactory("Medify");
  const medify = await Medify.deploy(patient.address);
  await medify.deployed();
  console.log("Medify deployed to:", medify.address); 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
