import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './Components/NotFound';
import Login from './Components/Login';
import AdminHome from './Components//AdminHome';
import TechnicianHome from './Components/TechnicianHome';
import Subsidiary from './Components/Subsidiary';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/login' element={<Login />} />
            <Route path="/adminhome" element={<AdminHome/>}/>
            <Route path="/subsidiary/:id" element={<Subsidiary/>}/>
            <Route path="/technicianhome" element={<TechnicianHome/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
