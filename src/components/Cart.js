import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import Checkout from './Checkout'; // Importar el componente Checkout
import '../styles/Cart.css';
import fondo2 from '../images/fondo2.png';

const Cart = () => {
  const { cart, clearCart, total, removeFromCart, updateQuantity } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false); // Estado para mostrar el modal

  const handleClearCart = () => {
    clearCart();
    alert('El carrito ha sido vaciado.');
  };

  const handleOpenCheckout = () => {
    if (cart.length > 0) {
      setShowCheckout(true); // Mostrar el modal
    } else {
      alert('No tienes productos en tu carrito.');
    }
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false); // Cerrar el modal
  };

  const handlePaymentSuccess = () => {
    alert('¡Pago realizado exitosamente!');
    clearCart();
    setShowCheckout(false); // Cierra el modal después del pago
  };

  return (
    <div
      className="cart-container"
      style={{
        backgroundImage: `url(${fondo2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message">No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="details">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p className="name">{item.name}</p>
                    <p className="quantity">Cantidad: {item.quantity}</p>
                    <div className="quantity-buttons">
                      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                </div>
                <p className="price">${item.quantity * item.price}</p>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: ${total}</p>
          <div className="cart-actions">
            <button onClick={handleClearCart}>Vaciar carrito</button>
            <button onClick={handleOpenCheckout}>Finalizar compra</button>
          </div>
        </>
      )}

      {/* Modal de Checkout */}
      {showCheckout && (
        <div className="checkout-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={handleCloseCheckout}>
              ✖
            </button>
            <Checkout onPaymentSuccess={handlePaymentSuccess} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
