import React from 'react'

import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getSubsidiary, getSubsidiaryById,setCurrentWorkers } from '../Redux/actions';

import Subsidiary from './Subsidiary';


export default function AdminHome() {

    const dispatch = useDispatch();
    const allSubsidiaries = useSelector((state) => state.infoSubsidiaries);
    const admin = useSelector((state) => state.loginState);
    const [selectedSubsidiary, setSelectedSubsidiary] = useState('')
    const currentSubsidiary = useSelector((state) => state.currentSubsidiary); 

    useEffect(() => {
        dispatch(getSubsidiary());        
    },[])

    function handleSubsidiarySelection(subTypeId){ 
      console.log(subTypeId,'soy subTypeId----------');   
      setSelectedSubsidiary(subTypeId);
      dispatch(getSubsidiaryById(subTypeId)); 

    }

    return (
      <div>
        <style>
          {`
          .navbar {
            border-radius: 10px;
            /* Aquí puedes agregar más estilos si lo deseas */
          }
  
          .hover-grow:hover {
            transform: scale(1.05);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          }
          `}
        </style>
        <nav className="navbar navbar-dark bg-primary justify-content-end">
          <span className="navbar-brand">
            {admin.role}, David
          </span>
        </nav>
        <div className="container text-center mt-5">
          <h1 className="text-primary" style={{ fontFamily: 'Arial', fontSize: '2.5rem' }}>
            Bienvenido de nuevo, David
          </h1>
          <div className="d-flex justify-content-center mt-5">
            {allSubsidiaries &&
              allSubsidiaries.map((s) => (
                <button
                  key={s.id}
                  className="btn btn-primary btn-lg mx-2 hover-grow"
                  onClick={() => handleSubsidiarySelection(s.subsidiaryType)}
                  style={{ fontFamily: 'Arial', fontSize: '1.5rem' }}
                >
                  Sucursal {s.subsidiaryType}
                </button>
              ))}
          </div>
        </div>
        {selectedSubsidiary && (
          <div className="container mt-5">
            <Subsidiary
              key={currentSubsidiary.subsidiaryType}
              subsidiaryType={currentSubsidiary.subsidiaryType}
              workers={currentSubsidiary.technicians}
              clients={currentSubsidiary.clients}
            />
          </div>
        )}
      </div>
    );
}
