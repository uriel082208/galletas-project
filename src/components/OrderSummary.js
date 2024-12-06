import React from 'react';
import '../styles/OrderSummary.css'; // Ruta de los estilos

function OrderSummary({ cartItems, removeFromCart }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="order-summary">
      <h1>Resumen del Pedido</h1>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="order-items">
          {cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <img src={item.image} alt={item.name} className="order-item-image" />
              <div className="order-item-details">
                <h3>{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
                <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <div className="order-total">
            <h2>Total: ${calculateTotal().toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
