import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPatient from './pages/doctor/add-patient-data';
import AddPatientData from './pages/doctor/add-patient-data';
import Patients from './pages/doctor/patients';
import PatientData from './pages/doctor/patient-data';
import PatientPermissions from './pages/patient/permission-viewers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="patient" element={<PatientData />} />
      <Route path="patient/permissions" element={<PatientPermissions />} />
      <Route path="doctor" element={<Patients />} />
      <Route path="doctor/:patientId" element={<PatientData />} />
      <Route path="doctor/add" element={<AddPatient />} />
      <Route path="doctor/addData" element={<AddPatientData />} />
    </Routes>  
  </BrowserRouter>
);
