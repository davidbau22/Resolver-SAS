import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

function Subsidiary({ subsidiaryType, workers, clients }) {

  const [filter, setFilter] = useState('technicians'); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = filter === 'technicians' ? workers : clients;

  useEffect(() => {
    setTimeout(() => {
     setLoading(false); 
    }, 2500);
  }, []);

  if (loading) {
    return(
      <div class="d-flex align-items-center">
        <strong>Loading...</strong>
        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
      </div>
    ) 
  }

  function handleAgregarTechnician (){
    navigate('/createtechnician')
  }

  function handleVerInfo(id) {
    navigate(`/technician_details/${id}`)
  }

  function handleAsignarTarea(id) {
    navigate(`/subsidiary/creatework/${id}`)
  }

  return (
    <div>
      <h3 className="text-left mb-4">{`Sucursal ${subsidiaryType}`}</h3>

      {/* Filtro */}
      <div className="my-3">
        <label className="me-3">
          <input
            type="radio"
            value="technicians"
            checked={filter === 'technicians'}
            onChange={handleFilterChange}
          />
          <span className="fs-5 me-1">Técnicos</span>
        </label>
        <label>
          <input
            type="radio"
            value="clients"
            checked={filter === 'clients'}
            onChange={handleFilterChange}
          />
          <span className="fs-5">Clientes</span>
        </label>
      </div>

      {/* Datos filtrados */}
      <div>
        <ul className="list-group">
          {filteredData.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center mt-4 p-3 border border-2">
              <div>
                <h6 className="mb-0 text-muted">Nombre</h6>
                <h4 className="mb-0">{item.name}</h4>
              </div>
              {filter === 'technicians' && (
                <div className="mb-0">
                  <h6 className="mb-0 text-muted">Status</h6>
                  <h4 className="mt-0 text-center">{item.currentlyStatus}</h4>
                </div>                
              )}
              <div className='d-flex flex-column'> 
                {filter === 'technicians' && (
                  <>
                    <button className="btn btn-white btn-sm mt-2 border border-1 border-primary" onClick={() => handleVerInfo(item.id)}>Ver info</button>
                    <button className="btn btn-primary btn-sm mt-2" onClick={() => handleAsignarTarea(item.id)}>Asignar labor</button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {filter === 'technicians' && (
        <div className="text-center mt-2">
          <button className="btn btn-primary btn-lg" onClick={handleAgregarTechnician}>Añadir nuevo técnico</button>
        </div>
      )}
    </div>
  );
}


export default Subsidiary