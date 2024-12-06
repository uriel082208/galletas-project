import React, { useState } from "react";
import "../styles/ProductCard.css";

// Asegúrate de importar las imágenes
import americanoImage from "../menu-items/americano.jpg";
import cappuccinoImage from "../images/menu-items/cappuccino.jpg";
import latteImage from "../images/menu-items/latte.jpg";
import espressoImage from "../images/menu-items/espresso.jpg";
import chocolateCakeImage from "../images/menu-items/chocolate-cake.jpg";
import lemonPieImage from "../images/menu-items/lemon-pie.jpg";
import vanillaBreadImage from "../images/menu-items/vanilla-bread.jpg";
import cocaColaImage from "../images/menu-items/coca-cola.jpg";
import pepsiImage from "../images/menu-items/pepsi.jpg";

function ProductCard({ product, addToOrder }) {
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null); // Estado para el método de pago
  const [showConfirmation, setShowConfirmation] = useState(false); // Para mostrar el mensaje de compra realizada
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value >= 0 ? value : 0);
  };

  const handleOrder = () => {
    if (quantity > 0 && selectedSize) {
      // Primero, preguntamos por el método de pago
      if (!paymentMethod) {
        alert("Por favor, selecciona un método de pago.");
        return;
      }

      // Si el pago es con tarjeta, mostramos el formulario para ingresar la tarjeta
      if (paymentMethod === "tarjeta") {
        setShowConfirmation(false); // Ocultar mensaje de compra realizada
        return; // Detener la ejecución para mostrar el formulario
      }

      // Si el pago es con efectivo, mostramos el mensaje de compra realizada
      const sizePrice = product.sizePrices[selectedSize];
      addToOrder({
        name: product.name,
        size: selectedSize,
        quantity,
        price: sizePrice * quantity,
      });

      setQuantity(0);
      setSelectedSize(null);
      setShowConfirmation(true); // Mostrar el mensaje de compra realizada
    } else {
      alert("Por favor selecciona un tamaño y cantidad válidos.");
    }
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method); // Cambiar el método de pago seleccionado
  };

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmitCardDetails = (e) => {
    e.preventDefault();
    alert("Detalles de tarjeta enviados.");
    setShowConfirmation(true); // Mostrar mensaje de compra realizada después de enviar tarjeta
  };

  // Asignación de imágenes dependiendo del nombre del producto
  const getImage = (productName) => {
    switch (productName) {
      case "Café Americano":
        return americanoImage;
      case "Cappuccino":
        return cappuccinoImage;
      case "Café con Leche":
        return latteImage;
      case "Espresso":
        return espressoImage;
      case "Tarta de Limón":
        return lemonPieImage;
      case "Pastel de Chocolate":
        return chocolateCakeImage;
      case "Pan de Vainilla":
        return vanillaBreadImage;
      case "Coca-Cola":
        return cocaColaImage;
      case "Pepsi":
        return pepsiImage;
      default:
        return null;
    }
  };

  return (
    <div className="product-card">
      <h3 className="product-name">{product.name}</h3>

      {/* Mostrar imagen del producto */}
      <img
        src={getImage(product.name)}
        alt={product.name}
        className="product-image"
      />

      {product.sizes && product.sizes.length > 0 && (
        <div className="product-sizes">
          {product.sizes.map((size, index) => (
            <button
              key={index}
              className={`size-button ${selectedSize === size ? "active-size" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size} - ${product.sizePrices[size]} {/* Mostrar precio */}
            </button>
          ))}
        </div>
      )}

      <div className="product-order">
        <label>
          Cantidad:
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="0"
          />
        </label>
        <button
          className="order-button"
          onClick={handleOrder}
          disabled={!selectedSize}
        >
          Pedir
        </button>
      </div>

      {/* Mostrar la barra verde si la compra fue realizada */}
      {showConfirmation && (
        <div className="confirmation-message">
          <p>Compra realizada con éxito!</p>
        </div>
      )}

      {/* Selección de método de pago */}
      {!showConfirmation && !paymentMethod && (
        <div className="payment-method">
          <h4>¿Cómo deseas pagar?</h4>
          <button onClick={() => handlePaymentMethodChange("efectivo")}>Efectivo</button>
          <button onClick={() => handlePaymentMethodChange("tarjeta")}>Tarjeta</button>
        </div>
      )}

      {/* Mostrar formulario si se selecciona el pago con tarjeta */}
      {paymentMethod === "tarjeta" && (
        <div className="card-details-form">
          <h4>Detalles de la tarjeta</h4>
          <form onSubmit={handleSubmitCardDetails}>
            <input
              type="text"
              name="cardNumber"
              placeholder="Número de tarjeta"
              value={cardDetails.cardNumber}
              onChange={handleCardDetailsChange}
              required
            />
            <input
              type="text"
              name="expirationDate"
              placeholder="Fecha de expiración"
              value={cardDetails.expirationDate}
              onChange={handleCardDetailsChange}
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={handleCardDetailsChange}
              required
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
