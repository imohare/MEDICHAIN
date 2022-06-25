import { Flex, Box, Text } from "rebass";
import PatientsButton from "../../buttons/doctor/patients";

import LogoutButton from "../../buttons/logout";

export default function AddPatient() {

  return (
   <div>
    <Flex>
      <LogoutButton/>
      <PatientsButton/>
    </Flex>
     <text>AddPatient</text>
   </div>
  )
}