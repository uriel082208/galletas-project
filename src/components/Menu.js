import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext'; // Importar el contexto
import '../styles/Menu.css';

// Importación de imágenes
import americanoImage from '../images/menu-items/americano.jpg';
import cappuccinoImage from '../images/menu-items/cappuccino.jpg';
import latteImage from '../images/menu-items/latte.jpg';
import cocaColaImage from '../images/menu-items/coca-cola.jpg';
import chocolateCakeImage from '../images/menu-items/chocolate-cake.jpg';
import vanillaBreadImage from '../images/menu-items/vanilla-bread.jpg';
import lemonPieImage from '../images/menu-items/lemon-pie.jpg';
import pepsiImage from '../images/menu-items/pepsi.jpg';
import espressoImage from '../images/menu-items/espresso.jpg';
import frappuccinoImage from '../images/menu-items/frappuccino.jpg';
import affogatoImage from '../images/menu-items/affogato.jpg';
import detoxGreenImage from '../images/menu-items/detox-green.jpg';
import detoxVitaminCImage from '../images/menu-items/detox-vitamin-c.jpg';
import brownieImage from '../images/menu-items/brownie.jpg';
import frenchToastImage from '../images/menu-items/french-toast.jpg';
import cookieClassicImage from '../images/menu-items/cookie-classic.jpg';
import cookieRaspberryImage from '../images/menu-items/cookie-raspberry.jpg';
import cheesecakeImage from '../images/menu-items/cheesecake.jpg';
import carrotCakeImage from '../images/menu-items/carrot-cake.jpg';
import sorrentinosImage from '../images/menu-items/sorrentinos.jpg';
import milanesaLomoImage from '../images/menu-items/milanesa-lomo.jpg';
import bifesLomoImage from '../images/menu-items/bifes-lomo.jpg';
import pechugaEspinacaImage from '../images/menu-items/pechuga-espinaca.jpg';
import wrapPolloImage from '../images/menu-items/wrap-pollo.jpg';
import ensaladaRegistradaImage from '../images/menu-items/ensalada-registrada.jpg';
import freshBowlImage from '../images/menu-items/fresh-bowl.jpg';
import ensaladaSalvajeImage from '../images/menu-items/ensalada-salvaje.jpg';
import polloGrilleImage from '../images/menu-items/pollo-grille.jpg';
import langostinosImage from '../images/menu-items/langostinos.jpg';
import frappeMochaImage from '../images/menu-items/frappe-mocha.jpg';
import icedColdBrewImage from '../images/menu-items/iced-cold-brew.jpg';
import icedColdBrewLatteImage from '../images/menu-items/iced-cold-brew-latte.jpg';
import flatWhiteImage from '../images/menu-items/flat-white.jpg';
import mochaImage from '../images/menu-items/mocha.jpg';
import caramelMacchiatoImage from '../images/menu-items/caramel-macchiato.jpg';
import submarinoRegistradoImage from '../images/menu-items/submarino-registrado.jpg';

// Componente de menú
// Componente de menú
const Menu = () => {
  const { addToCart } = useContext(CartContext); // Obtener la función para agregar al carrito
  const [addedMessages, setAddedMessages] = useState({});

  const handleAddToCart = (item) => {
    addToCart(item); // Llamar a la función del contexto

    setAddedMessages((prevMessages) => ({
      ...prevMessages,
      [item.id]: `Agregado al carrito: ${item.name}`,
    }));

    setTimeout(() => {
      setAddedMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        delete newMessages[item.id];
        return newMessages;
      });
    }, 1000);
  };

  return (
    <div>
      <div className="menu">
        {menuData.map((category) => (
          <div key={category.category}>
            <h2>{category.category}</h2>
            <div className="menu-items">
              {category.items.map((item) => (
                <div key={item.id} className="menu-item">
                  <img src={item.image} alt={item.name} className="menu-item-image" />
                  <div className="menu-item-details">
                    <h3>{item.name}</h3>
                    <p>{`$${item.price}`}</p>
                    <button onClick={() => handleAddToCart(item)}>Agregar al carrito</button>
                    {addedMessages[item.id] && <p className="added-message">{addedMessages[item.id]}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Datos del menú (continúa igual que antes)
const menuData = [
  {
    category: 'PREPARADOS CALIENTES',
    items: [
      { id: 1, name: 'Americano', price: 25.50 , image: americanoImage },
      { id: 2, name: 'Espresso', price: 25.50, image: espressoImage },
      { id: 3, name: 'Doble Espresso', price: 35.50, image: espressoImage },
      { id: 4, name: 'Americano', price: 25.50, image: americanoImage },
      { id: 5, name: 'Cappuccino', price: 30.50, image: cappuccinoImage },
      { id: 6, name: 'Latte', price: 35.50, image: latteImage },
      { id: 7, name: 'Flat White', price: 30.50, image: flatWhiteImage },
      { id: 8, name: 'Mocha', price: 40.50, image: mochaImage },
      { id: 9, name: 'Caramel Macchiato', price: 50.50, image: caramelMacchiatoImage },
      { id: 10, name: 'Submarino Registrado', price: 60.50, image: submarinoRegistradoImage },
    ],
  },
  {
    category: 'PREPARADOS FRÍOS',
    items: [
      { id: 11, name: 'Frappe Capuccino', price: 55.50, image: frappuccinoImage },
      { id: 12, name: 'Frape Mocha', price: 55.50, image: frappeMochaImage },
      { id: 13, name: 'Iced Cold Brew', price: 55.50, image: icedColdBrewImage },
      { id: 14, name: 'Iced Cold Brew Latte', price: 40.50, image: icedColdBrewLatteImage },
      { id: 15, name: 'Affogato', price: 55.50, image: affogatoImage },
    ],
  },
  {
    category: 'BEBIDAS',
    items: [
      { id: 16, name: 'Detox Green MAT', price: 40.50, image: detoxGreenImage },
      { id: 17, name: 'Detox Vitamin C', price: 40.50, image: detoxVitaminCImage },
      { id: 18, name: 'Limonada', price: 30.50, image: lemonPieImage },
      { id: 19, name: 'Jugo de naranja', price: 30.50, image: lemonPieImage },
      { id: 20, name: 'Coca Cola', price: 25.50, image: cocaColaImage },
      { id: 21, name: 'Pepsi', price: 25.50, image: pepsiImage },
      { id: 22, name: 'Agua mineral', price: 23.50, image: ensaladaRegistradaImage },
      { id: 23, name: 'Cerveza Stella Artois (473 cc)', price: 40.50, image: sorrentinosImage },
      { id: 24, name: 'Malbec - Cordero con piel de lobo', price: 50.50, image: sorrentinosImage },
    ],
  },
  {
    category: 'ENSALADAS',
    items: [
      { id: 25, name: 'Ensalada Registrada', price: 70.50, image: ensaladaRegistradaImage },
      { id: 26, name: 'Fresh Bowl', price: 70.50, image: freshBowlImage },
      { id: 27, name: 'Ensalada Salvaje', price: 90.50, image: ensaladaSalvajeImage },
      { id: 28, name: 'Adicional Pollo grille', price: 70.50, image: polloGrilleImage },
      { id: 29, name: 'Langostinos', price: 100.50, image: langostinosImage },
    ],
  },
  {
    category: 'PLATOS',
    items: [
      { id: 30, name: 'Sorrentinos de ricota y espinaca', price: 120.50, image: sorrentinosImage },
      { id: 31, name: 'Milanesa de lomo', price: 100.50, image: milanesaLomoImage },
      { id: 32, name: 'Bifes de lomo', price: 150.50, image: bifesLomoImage },
      { id: 33, name: 'Pechuga con croute de espinaca', price: 160.50, image: pechugaEspinacaImage },
      { id: 34, name: 'Wrap de pollo', price: 120.50, image: wrapPolloImage },
    ],
  },
  {
    category: 'DULCES',
    items: [
      { id: 35, name: 'Brownie con nueces', price: 40.50, image: brownieImage },
      { id: 36, name: 'Brownie', price: 30.50, image: brownieImage },
      { id: 37, name: 'French Toast', price: 65.50, image: frenchToastImage },
      { id: 38, name: 'Cookie clásica/2pc', price: 30.50, image: cookieClassicImage },
      { id: 39, name: 'Cookie de frambuesas/10pc', price: 30.50, image: cookieRaspberryImage },
      { id: 40, name: 'Cheesecake de frutos rojos', price: 60.50, image: cheesecakeImage },
      { id: 41, name: 'Budín Carrot Cake', price: 40.50, image: carrotCakeImage },
      { id: 42, name: 'Lemon Pie', price: 70.50, image: lemonPieImage },
      { id: 43, name: 'Chocolate Cake', price: 70.50, image: chocolateCakeImage },
      { id: 44, name: 'Vanilla Bread', price: 60.50, image: vanillaBreadImage },
    ],
  },
];

export default Menu;
