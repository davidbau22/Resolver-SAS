import React from 'react';
import {useSelector} from 'react-redux'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './Components/NotFound';
import Login from './Components/Login';
import AdminHome from './Components//AdminHome';
import TechnicianHome from './Components/TechnicianHome';
import Subsidiary from './Components/Subsidiary';
import {ProtectedRoute} from './Components/ProtectedRoute';

function App() {
  
  const loginAdmin = useSelector((state) => state.loginState.isAdmin);

  return (
    <BrowserRouter>
        <Routes>
            {/* <Route path='*' element={<NotFound/>}/> */}
            <Route index path='/login' element={<Login />} />
            <Route element={<ProtectedRoute user={loginAdmin} />}>
              <Route path="/adminhome" element={<AdminHome/>}/>
              <Route path="/subsidiary/:id" element={<Subsidiary/>}/>
              {/* <Route path="/technician_details/" element={<Subsidiary/>}/> */}
            </Route>
            <Route path="/technicianhome" element={<TechnicianHome/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
