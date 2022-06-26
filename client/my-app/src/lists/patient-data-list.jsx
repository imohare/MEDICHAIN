import myData from '../pages/patient/medicationAdmin.json';
import { Text } from 'rebass';
export default function PatientDataList() {

  var arr = [];
  Object.keys(myData).forEach(function (key) {
    arr.push(myData[key]);
  });
  const listItems = arr.map((field) =>
    <li>{field}</li>
  );

  return (
    <div>
      <Text>
        <ul>{listItems}</ul>
      </Text>
    </div>
  )
} 