import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPatient from './pages/doctor/add-patient-data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="patient" element={<PatientData />} />
      <Route path="patient/permissions" element={<PatientPermissions />} />
      <Route path="doctor" element={<DoctorPatients />} />
      {/* this is going to be hardcoded for not as we aren't signing patients up to doctors */}
      <Route path="doctor/patient1" element={<DoctorPatient1 />} />
      <Route path="doctor/patient2" element={<DoctorPatient2 />} />
      <Route path="doctor/patient3" element={<DoctorPatient3 />} />
      <Route path="doctor/patient3" element={<DoctorPatient3 />} />
      <Route path="doctor/add" element={<AddPatient />} />
      <Route path="doctor/addData" element={<AddPatientData />} />
    </Routes>  
  </BrowserRouter>
);
