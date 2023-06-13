import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './Components/NotFound';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/login' element={<Login />} />
            {/* <Route path="/home" element={<Home/>}/> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
