import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPatient from './pages/doctor/add-patient';
import AddPatientData from './pages/doctor/add-patient-data';
import Patients from './pages/doctor/patients';
import PatientData from './pages/patient/patient-data';
import PatientPermissions from './pages/patient/patient-permissions';
import Login from './pages/login';
=======
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import AddPatient from './pages/doctor/add-patient';
 import AddPatientData from './pages/doctor/add-patient-data';
 import Patients from './pages/doctor/patients';
 import PatientData from './pages/patient/patient-data';
 import DoctorPatientData from './pages/doctor/patient-data';
 import PatientPermissions from './pages/patient/patient-permissions';
 import Login from './pages/login';
>>>>>>> 19ccb8b7efc508dee63612c27fce8f3de81a1ee6

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<<<<<<< HEAD
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
=======
  <Routes>
       <Route path="login" element={<Login />} />
       <Route path="patient" element={<PatientData />} />
       <Route path="patient/permissions" element={<PatientPermissions />} />
       <Route path="doctor" element={<Patients />} />
       <Route path="doctor/:patientId" element={<DoctorPatientData />} />
       <Route path="doctor/add" element={<AddPatient />} />
       <Route path="doctor/addData" element={<AddPatientData />} />
     </Routes>
     </BrowserRouter>
     )
>>>>>>> 19ccb8b7efc508dee63612c27fce8f3de81a1ee6
