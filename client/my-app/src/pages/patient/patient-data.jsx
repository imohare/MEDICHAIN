import { Flex, Box, Text } from "rebass";

import LogoutButton from "../../buttons/logout";
import myData from './medicationAdmin.json';
import PatientDataList from "../../lists/patient-data-list";

export default function PatientData() {

  return (

    <div>
      <Flex>
        <LogoutButton />
      </Flex>
      <br />
      <br />
      <text>Your Patient Data</text>
      <PatientDataList />
    </div>
  );
}
