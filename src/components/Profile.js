import React, { useState, useEffect } from 'react';
import '../styles/Profile.css';

import ownerPhoto from '../images/perfil-photo.jpg';
import background from '../images/fondo-fon.jpg';

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Recuperar estado de inicio de sesión
    return JSON.parse(localStorage.getItem('isLoggedIn')) || false;
  });

  const [cardEnabled, setCardEnabled] = useState(false);
  const [userInfo, setUserInfo] = useState(() => {
    // Recuperar datos de localStorage
    const savedData = JSON.parse(localStorage.getItem('userInfo'));
    return (
      savedData || {
        name: '',
        email: '',
        phone: '',
        address: '',
        photo: ownerPhoto,
        cardNumber: '',
        cardExpiry: '',
        cardCVC: '',
      }
    );
  });

  // Guardar datos en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [userInfo, isLoggedIn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUserInfo({ ...userInfo, photo: reader.result });
    };

    if (file) reader.readAsDataURL(file);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (userInfo.name && userInfo.email && userInfo.phone && userInfo.address) {
      setIsLoggedIn(true);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const handleEdit = () => {
    setIsLoggedIn(false);
  };

  const toggleCard = () => {
    setCardEnabled((prev) => !prev);
  };

  const saveCardInfo = () => {
    alert('Información de tarjeta guardada.');
  };

  return (
    <div className="profile" style={{ backgroundImage: `url(${background})` }}>
      {!isLoggedIn ? (
        <div className="login-form">
          <h1>Iniciar Sesión</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={userInfo.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={userInfo.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Número de teléfono"
              value={userInfo.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Dirección"
              value={userInfo.address}
              onChange={handleChange}
            />
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
      ) : (
        <div className="user-profile">
          <img src={userInfo.photo} alt="Foto del usuario" className="profile-photo" />
          <button>
            <label>
              Cambiar Foto
              <input type="file" accept="image/*" onChange={handleImageChange} hidden />
            </label>
          </button>
          <h1>Bienvenido, {userInfo.name}</h1>
          <p><strong>Correo:</strong> {userInfo.email}</p>
          <p><strong>Teléfono:</strong> {userInfo.phone}</p>
          <p><strong>Dirección:</strong> {userInfo.address}</p>

          <button onClick={toggleCard}>
            {cardEnabled ? 'Deshabilitar Tarjeta' : 'Habilitar Tarjeta'}
          </button>

          {cardEnabled && (
            <div className="card-info">
              <input
                type="text"
                name="cardNumber"
                placeholder="Número de Tarjeta"
                value={userInfo.cardNumber}
                onChange={handleChange}
              />
              <input
                type="text"
                name="cardExpiry"
                placeholder="Fecha de Expiración (MM/AA)"
                value={userInfo.cardExpiry}
                onChange={handleChange}
              />
              <input
                type="text"
                name="cardCVC"
                placeholder="CVC"
                value={userInfo.cardCVC}
                onChange={handleChange}
              />
            </div>
          )}

          <button
            className="save-btn"
            onClick={saveCardInfo}
            disabled={!cardEnabled}
          >
            Guardar Información
          </button>

          <button className="edit-btn" onClick={handleEdit}>
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
