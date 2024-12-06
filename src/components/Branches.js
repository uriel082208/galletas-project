import React from 'react';
import '../styles/Branches.css'; // Ruta de los estilos
import branch1 from '../images/branch-images/branch-1.jpg';
import branch2 from '../images/branch-images/branch-2.jpg';

function Branches() {
  return (
    <div className="branches">
      <h1>Sucursales</h1>
      <div className="branch">
        <img src={branch1} alt="Sucursal 1" className="branch-image" />
        <div className="branch-details">
          <h2>Sucursal en Nuevo Laredo</h2>
          <p>Dirección: Calz.revolucio, Nuevo Laredo, Tamaulipas</p>
          <p>Teléfono: (867) 327-1143</p>
          <p>Horarios: Lunes a Domingo - 9:00 AM a 9:00 PM</p>
        </div>
      </div>
      <div className="branch">
        <img src={branch2} alt="Sucursal 2" className="branch-image" />
        <div className="branch-details">
          <h2>Sucursal en Ciudad Victoria</h2>
          <p>Dirección: Avenida Principal 456, Ciudad Victoria, Tamaulipas</p>
          <p>Teléfono: (834) 987-6543</p>
          <p>Horarios: Lunes a Domingo - 9:00 AM a 9:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Branches;
