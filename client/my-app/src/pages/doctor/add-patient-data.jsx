import { Flex, Box, Text } from "rebass";

import LogoutButton from "../../buttons/logout";
import PatientsButton from "../../buttons/doctor/patients";
import PatientButton from "../../buttons/doctor/patient";

export default function AddPatientData() {

  return (
   <div>
    <Flex>
      <LogoutButton/>
      <PatientsButton/>
      <PatientButton/>
    </Flex>
     <text>AddPatientData</text>
   </div>
  )
}