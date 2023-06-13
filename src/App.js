import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './Components/NotFound';
import Login from './Components/Login';
import AdminHome from './Components//AdminHome';
import TechnicianHome from './Components/TechnicianHome';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            {/* <Route path='*' element={<NotFound/>}/> */}
            <Route path='/login' element={<Login />} />
            <Route path="/adminhome" element={<AdminHome/>}/>
            <Route path="/technicianhome" element={<TechnicianHome/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
