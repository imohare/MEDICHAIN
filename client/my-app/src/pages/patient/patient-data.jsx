import { Flex, Box, Text} from "rebass";
import LogoutButton from "../../buttons/logout";
import myData from './medicationAdmin.json';


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
    <text>PatientData</text>
    <ul>{listItems}</ul>
   </div>
  )
}