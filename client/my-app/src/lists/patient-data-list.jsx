import myData from '../pages/patient/medicationAdmin.json';

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
      <ul>{listItems}</ul>
    </div>
  )
} 