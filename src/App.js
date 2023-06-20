import React from 'react';
import {useSelector} from 'react-redux'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './Components/NotFound';
import Login from './Components/Login';
import AdminHome from './Components//AdminHome';
import TechnicianHome from './Components/TechnicianHome';
import Subsidiary from './Components/Subsidiary';
import CreateTechnician from './Components/CreateTechniciann';
import TechnicianDetails from './Components/TechnicianDetails';
import CreateWork from './Components/CreateWork';
import DetailedTech from './Components/DetailedTech';
import { ProtectedRoute, ProtectedRouteTech } from './Components/ProtectedRoute';

function App() {
  
  const loginAdmin = useSelector((state) => state.loginState.isAdmin);

  return (
    <BrowserRouter>
        <Routes>
            {/* <Route path='*' element={<NotFound/>}/> */}
            <Route index path='/login' element={<Login />} />
            <Route element={<ProtectedRoute user={loginAdmin} />}>
              <Route path="/adminhome" element={<AdminHome/>}/>
              <Route path="/subsidiary/creatework/:id" element={<CreateWork/>}/>
              <Route path="/createtechnician" element={<CreateTechnician/>}/>
              <Route path="/technician_details/:id" element={<TechnicianDetails/>}/>
            </Route>
              <Route path="/detailedtech/:id" element={<DetailedTech/>}/>
              <Route path="/technicianhome" element={<TechnicianHome/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
