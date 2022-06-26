import { Flex, Box, Text, Heading} from "rebass";

import LogoutButton from "../../buttons/logout";
import myData from './medicationAdmin.json';
import PatientDataList from "../../lists/patient-data-list";

export default function PatientData() {

  return (
    <div>
      <Flex>
        <LogoutButton />
      </Flex>
      <br/> <br/> <br/>
      <Heading fontSize={[ 4 ]}>Welcome to your portal. Please view your medical records below:</Heading>
      <br/> <br/> <br/> 
      <PatientDataList />
    </div>
  );
}
