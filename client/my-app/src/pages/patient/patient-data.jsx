import { Flex, Box, Text} from "rebass";

import LogoutButton from "../../buttons/logout";
import myData from './medicationAdmin.json';
import PatientDataList from "../../lists/patient-data-list";

export default function PatientData() {
  var arr = [];
  Object.keys(myData).forEach(function(key) {
    arr.push(myData[key]);
  });
  const listItems = arr.map((field) =>
  <li>{field}</li>
  );
  return (
   <div>
    <Flex>
      <LogoutButton/>
    </Flex>
    <PatientDataList/>
     <text>PatientData</text>
   </div>
  )
}