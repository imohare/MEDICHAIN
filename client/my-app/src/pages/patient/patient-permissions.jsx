import { Flex, Box, Text } from "rebass";

import LogoutButton from "../../buttons/logout";
import PatientDataButton from "../../buttons/patient/my-data";

export default function PatientPermissions() {

  return (
   <div>
    <Flex>
      <LogoutButton/>
      <PatientDataButton/>
    </Flex>
     <text>PatientPermissions</text>
   </div>
  )
}