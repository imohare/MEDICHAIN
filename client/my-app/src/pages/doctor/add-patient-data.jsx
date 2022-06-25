import { HStack } from "@chakra-ui/react";

import LogoutButton from "../../buttons/logout";
import PatientsButton from "../../buttons/doctor/patients";
import PatientButton from "../../buttons/doctor/patient";

export default function AddPatientData() {

  return (
   <div>
    <HStack>
      <LogoutButton/>
      <PatientsButton/>
      <PatientButton/>
    </HStack>
     <text>AddPatientData</text>
   </div>
  )
}