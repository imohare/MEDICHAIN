import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPatient from './pages/doctor/add-patient';
import AddPatientData from './pages/doctor/add-patient-data';
import Patients from './pages/doctor/patients';
import PatientData from './pages/patient/patient-data';
import PatientPermissions from './pages/patient/patient-permissions';
import Login from './pages/login';
import PatientDasboard from './pages/patient/patientDasboard';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="patient" element={<PatientData />} />
      <Route path="patient/permissions" element={<PatientPermissions />} />
      <Route path="patientDashboard" element={<PatientDasboard />} />
      <Route path="doctor" element={<Patients />} />
      <Route path="doctor/:patientId" element={<PatientData />} />
      <Route path="doctor/add" element={<AddPatient />} />
      <Route path="doctor/addData" element={<AddPatientData />} />
    </Routes>
  </BrowserRouter>

);

