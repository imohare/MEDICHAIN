import { Flex, Box, Text } from "rebass";

import PatientsButton from "../../buttons/doctor/patients";
import LogoutButton from "../../buttons/logout";

export default function DoctorPatientData() {

  return (
   <div>
    <Flex>
      <LogoutButton/>
      <PatientsButton/>
    </Flex>
     <text>PatientData</text>
   </div>
  )
}