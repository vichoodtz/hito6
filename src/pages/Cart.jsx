import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, addToCart, removeFromCart, calculateTotal } = useContext(CartContext);


  return (
    <div className="cart mb-4 p-5">
      <h3>Detalle del Pedido</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-image" />
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.count}</p>
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>-</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;
