import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router';
import {Link, useNavigate as navigate} from 'react-router-dom';
import { technicianDetails, updateTechnician } from '../Redux/actions';

export default function DetailedTech  () {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const detailedTechnician = useSelector((state)=> state.technicianDetailsBySubsidiary);
    const currentTech = useSelector((state)=> state.currentTechnician);
    const [editedTechnician, setEditedTechnician] = useState({});
    const [editMode, setEditMode] = useState(false);
    const jobAssigned = currentTech.jobsAssigned?.length >0? true: false;

    const keyMappings = {
      clientName: 'Nombre del cliente',
      issueDate: 'Fecha de emisión',
      workType: 'Tipo de trabajo',
      orderNumber: 'Número de orden',
    };

    useEffect(() => {
        setTimeout(() => {
            dispatch(technicianDetails(id))
            setLoading(false); 
           }, 2500);
    }, [dispatch])

    if (loading) {
        return(
          <div class="d-flex align-items-center">
            <strong>Loading...</strong>
            <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
          </div>
        ) 
      }

    function handleInputChange(e)  {
        setEditedTechnician({
          ...editedTechnician,
          [e.target.name]: e.target.value,
        });
      };
    
    function handleUpdateTechnician (){
        dispatch(updateTechnician(detailedTechnician.id, detailedTechnician.subsidiary, editedTechnician)) 
        setEditMode(false); 
      };

 

      return (
        <div className="modal bg-light" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="d-flex justify-content-center p-2">
                    {/* <img className="rounded mr-2" src="../assets/user_default_logo2.svg" alt="technician image" /> */}
                    <h2 className="modal-title">{detailedTechnician.name}</h2>
                </div>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="d-flex justify-content-start">
                    <h4 className='text-muted'>ID:</h4>
                    <h4 className='ms-2'>{detailedTechnician.id}</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                    <h4 className="text-muted">Sucursal:</h4>
                    <h4 className='ms-2'>{detailedTechnician.subsidiary}</h4>
                </div>
                <div className="d-flex justify-content-start">
                    <h4 className="text-muted">email:</h4>
                    <h4 className='ms-2'> {detailedTechnician.email}</h4>
                </div>
                <div className="d-flex justify-content-start">
                    <h4 className="text-muted">Status:</h4>
                    <h4 className='ms-2'>{detailedTechnician.currentlyStatus}</h4>
                </div>
                <div className="d-flex flex-column justify-content-start ">
                    <h4 className="text-muted">Trabajos asignados:</h4>
                  <ul>
                    {detailedTechnician.jobsAssigned?.length === 0 ? (
                      <p>Sin trabajos asignados</p>
                    ) : (
                      <ul>
                        {detailedTechnician.jobsAssigned?.map((jobString, index) => {
                          const jobObject = JSON.parse(jobString);
                          return Object.entries(jobObject).map(([key, value]) => {
                            const mappedKey = keyMappings[key] || key;
                            return (
                              <li key={index + key} className='text-black'>
                                <strong className='text-muted'>{mappedKey}: </strong>
                                {value}
                              </li>
                            );
                          });
                        })}
                      </ul>
                    )}
                  </ul>
                </div>
                <div className="d-flex justify-content-start">
                    <h4 className="text-muted">Recursos asignados:</h4>
                    <h3></h3>
                  <ul>
                    {detailedTechnician.assignedResourses?.length === 0 ? (
                      <p>Sin recursos asignados</p>
                    ) : (
                      <li className="">{detailedTechnician.assignedResourses}</li>
                        
                    )}
                  </ul>
                </div>
                <div className="d-flex justify-content-start">
                    <h4 className="text-muted">Clientes visitados hoy:</h4>
                  <h3></h3>
                  <ul>
                    {detailedTechnician.visitedClients?.length === 0 ? (
                      <li className=''>Aun no ha realizado visitas</li>
                    ) : (
                      detailedTechnician.visitedClients?.map((d) => <li key={d.id}>{d.name}</li>)
                    )}
                  </ul>
                </div>
                <div className='d-flex justify-content-center mt-2'>
                  <Link to="/technicianhome">
                    <button className="btn btn-primary">Volver</button>
                  </Link>
                </div>
              </div>
              {jobAssigned ?
              <div className="modal-footer d-flex justify-content-center">
                <div className='d-flex flex-column'>
                  <h3>Completar asignación</h3>
                  <button className="btn btn-sm border border-2 border-primary" onClick={() => setEditMode(!editMode)}>
                    {editMode ? 'Cancelar edición' : 'Editar'}
                  </button>
                </div>
                {editMode && (
                  <div>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="status_options">Status</label>
                        <input
                          list="status_opt"
                          name="status"
                          id="status_options"
                          className="form-control"
                          onChange={handleInputChange}
                        />
                        <datalist id="status_opt">
                          <option value="active" />
                          <option value="inactive" />
                        </datalist>
                      </div>
                      <div className="mb-3">
                        <label>Visited Client</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={editedTechnician.visitedClients || detailedTechnician.visitedClients}
                          onChange={handleInputChange}
                        />
                      </div>
                      <button type="button" className="btn btn-primary" onClick={handleUpdateTechnician}>
                        Guardar cambios
                      </button>
                    </form>
                  </div>
                )}
              </div>
                :
                <h3 className="class">Aun sin trabajos asignados</h3>
            }
            </div>
          </div>
        </div>
      );
}