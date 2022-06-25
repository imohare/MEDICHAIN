import { Flex, Box, Text } from "rebass";
import PatientsButton from "../../buttons/doctor/patients";

import LogoutButton from "../../buttons/logout";
import AddPatientForm from "../../forms/add-patient";

export default function AddPatient() {

  return (
   <div>
    <Flex>
      <LogoutButton/>
      <PatientsButton/>
    </Flex>
    <AddPatientForm/>
     <text>AddPatient</text>
   </div>
  )
}