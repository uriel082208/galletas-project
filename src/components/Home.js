import React from 'react';
import '../styles/Home.css';  // Estilos de la página de inicio
import cafeBackground from '../images/cafe-background.jpg';  // Importamos la imagen de fondo
import ownerPhoto from '../images/owner-photo.jpg';  // Importamos la imagen del propietario
import fondo2 from '../images/fondo2.png';  // Imagen adicional para el fondo de la sección

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <img src={cafeBackground} alt="Cafetería" className="hero-image" />
        <div className="hero-text">
          <h1>Bienvenido a Moka</h1>
        </div>
      </div>
      <div className="intro">
        <div className="section-title">
          <h2>¿Qué ofrecemos?</h2>
        </div>
        <div className="section-content">
          <p>
            En nuestra cafetería, nos especializamos en ofrecer los mejores cafés y pasteles para que disfrutes de una experiencia única. Ven y prueba nuestras bebidas y delicias preparadas con los mejores ingredientes, con un ambiente acogedor y cálido.
          </p>
        </div>
      </div>
      <div className="comments">
        <div className="section-title">
          <h2>¿Cómo iniciamos?</h2>
        </div>
        <div className="section-content">
          <p>
            Todo comenzó con la pasión por el café y la repostería. Nos dedicamos a crear un ambiente acogedor para nuestros clientes, donde puedan disfrutar de un buen café, delicioso pastel, y momentos inolvidables. A lo largo de los años, hemos logrado fidelizar a nuestros clientes, quienes nos eligen por la calidad de nuestros productos.
          </p>
        </div>
      </div>
      <div className="biography">
        <div className="bio-text">
          <div className="section-title">
            <h2>Sobre el propietario</h2>
          </div>
          <div className="section-content">
            <p>
              Soy el dueño de la cafetería, y me encanta ver cómo cada cliente disfruta de nuestros productos. Mi pasión por el café comenzó hace años, y siempre he querido ofrecer lo mejor a nuestros clientes. He viajado por diferentes partes del mundo para aprender más sobre los mejores granos y técnicas de preparación, con el objetivo de ofrecerles una experiencia única. 
            </p>
            <p>
              La cafetería no es solo un lugar para disfrutar de café, sino un espacio donde cada cliente se siente como en casa, en un ambiente cálido y acogedor. Nos esforzamos por mejorar constantemente, para que cada visita sea especial.
            </p>
          </div>
        </div>
        <div className="owner-photo">
          <img src={ownerPhoto} alt="Propietario" className="owner-image" />
        </div>
      </div>
      <div className="menu" style={{ backgroundImage: `url(${fondo2})` }}>
        <div className="section-title">
          <h2>¡Ven y disfruta de nuestros productos!</h2>
        </div>
        <div className="section-content">
          <p>
            No te pierdas nuestra selección especial de cafés y pasteles artesanales. Desde el espresso clásico hasta nuestras bebidas más innovadoras, siempre tenemos algo para cada gusto. También ofrecemos opciones para aquellos que prefieren bebidas sin cafeína y una variedad de opciones veganas y sin gluten.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
