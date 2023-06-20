import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getSubsidiary, technicianDetails, setCurrentWorkers } from '../Redux/actions';

export default function TechnicianHome() {

    const dispatch = useDispatch();
    const allTechnicians = useSelector((state) => state.techniciansInfo);
    const tecnico = useSelector((state) => state.loginState);
    const [selectedTechnician, setSelectedTechnician] = useState('')
    const currentTech = useSelector((state) => state.currentTechnician); 
    console.log(currentTech, 'holaholaholahola');

    useEffect(() => {
        dispatch(setCurrentWorkers());        
    },[])

    function handleTechnicianSelection(subTypeId){ 
      console.log(subTypeId,'soy subTypeId----------');   
      setSelectedTechnician(subTypeId);
      dispatch(technicianDetails(subTypeId));
  
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
            {tecnico.role}, David
          </span>
        </nav>
        <div className="container text-center mt-5">
          <h1 className="text-primary" style={{ fontFamily: 'Arial', fontSize: '2.5rem' }}>
            Bienvenido de nuevo, David
          </h1>
          <div className="d-flex justify-content-center mt-5">
            {allTechnicians &&
              allTechnicians.map((s) => (
                <Link style= {{textDecoration: 'none'}} to={`/detailedtech/${s.id}`}>   
                  <button
                    key={s.id}
                    className="btn btn-primary btn-lg mx-2 hover-grow"
                      onClick={() => handleTechnicianSelection(s.id)}
                    style={{ fontFamily: 'Arial', fontSize: '1.5rem' }}
                  >
                    Tecnico {s.id}
                  </button>
                </Link>
              ))}

              
          </div>
        </div>
      </div>
    );
}

