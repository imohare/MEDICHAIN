import LogoutButton from "../../buttons/logout";
import PatientsButton from "../../buttons/doctor/patients";
import PatientButton from "../../buttons/doctor/patient";
import AddPatientDataForm from "../../forms/add-patient-data";

import { Flex } from "rebass";
import { useEffect, useState } from 'react'

export default function AddPatientData() {


  return (
   <div>
    <Flex>
      <LogoutButton/>
      <PatientsButton/>
      <PatientButton/>
    </Flex>
    <AddPatientDataForm/>
     <text>AddPatientData</text>
    
   </div>
  )
}