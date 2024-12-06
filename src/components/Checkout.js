import React, { useState } from 'react';
import '../styles/Checkout.css';

const Checkout = ({ onPaymentSuccess }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simula un procesamiento de pago
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess(); // Notifica el éxito del pago
    }, 2000);
  };

  return (
    <div className="checkout-container">
      <h2>Finalizar Compra</h2>
      <form onSubmit={handlePayment} className="payment-form">
        <div className="form-group">
          <label>Nombre en la tarjeta</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Número de tarjeta</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            maxLength="16"
          />
        </div>
        <div className="form-group">
          <label>Fecha de expiración</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
            placeholder="MM/AA"
          />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input
            type="password"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
            maxLength="3"
          />
        </div>
        <button type="submit" disabled={isProcessing}>
          {isProcessing ? 'Procesando...' : 'Pagar'}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
