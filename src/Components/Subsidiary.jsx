import React, {useState} from 'react';

function Subsidiary({ subsidiaryType, workers, clients }) {

  const [filter, setFilter] = useState('technicians'); 
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = filter === 'technicians' ? workers : clients;

  return (
    <div>
      <h3>{`Sucursal ${subsidiaryType}`}</h3>

      {/* Filtro */}
      <div>
        <label>
          <input
            type="radio"
            value="technicians"
            checked={filter === 'technicians'}
            onChange={handleFilterChange}
          />
          Technicians
        </label>
        <label>
          <input
            type="radio"
            value="clients"
            checked={filter === 'clients'}
            onChange={handleFilterChange}
          />
          Clients
        </label>
      </div>

      {/* Datos filtrados */}
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.name}
            {item.currentlyStatus}
            {item.assignedResources ? item.assignedResources : 'VACIO'}
            {item.visitedClients ? item.visitedClients : 'VACIO'}
            {filter === 'technicians' && (
              <>
                <button /* onClick={() => handleVerInfo(item.id)} */>Ver info</button>
              </>
            )}
          </li>
        ))}
      </ul>
      {filter === 'technicians' && (
        <button /* onClick={handleAgregarTechnician} */>Añadir nuevo technician</button>
      )}
    </div>
  );
}


export default Subsidiary