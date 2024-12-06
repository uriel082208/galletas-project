import React from "react";
import "../styles/Footer.css"; // Ruta del archivo CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Información del pie de página */}
        <div className="footer-left">
          <p>&copy; 2024 Cafetería Delicioso. Todos los derechos reservados.</p>
        </div>
        <div className="footer-center">
          {/* Enlaces de redes sociales */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        <div className="footer-right">
          <p>Visítanos en:</p>
          <p>Calle Ficticia 123, Nuevo Laredo</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
