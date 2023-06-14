import React from 'react';

function Subsidiary({ subsidiaryType, workers }) {
  return (
    <div>
      <h3>{`Sucursal ${subsidiaryType}`}</h3>
      <ul>
        {workers.map((worker) => (
          <li key={worker.id}>{worker.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Subsidiary