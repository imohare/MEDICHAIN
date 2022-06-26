import { Flex } from "rebass";

import LogoutButton from "../../buttons/logout";
import myData from './medicationAdmin.json';
import PatientDataList from "../../lists/patient-data-list";

export default function PatientData() {

  return (
    <div>
      <Flex>
        <LogoutButton />
      </Flex>
      <PatientDataList />
      <text>PatientData</text>
    </div>
  );
}
