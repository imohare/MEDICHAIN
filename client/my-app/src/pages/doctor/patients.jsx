// import LogoutButton from '../../buttons/logout';
import { Flex, Box, Text } from "rebass";
import LogoutButton from "../../buttons/logout"

export default function Patients() {

  return (
    <div>
      <Flex>
        <LogoutButton />
      </Flex>

      <text>Your Patients</text>
    </div>
  )
}