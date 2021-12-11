import React, { useState } from 'react';
import Cart from '../components/Cart';

export default function CartView() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(
      (item) => item.firebaseKey === product.firebaseKey,
    );
    if (exist) {
      setCartItems(
        cartItems.map((item) => (item.firebaseKey === product.firebaseKey
          ? { ...exist, quantity: exist.quantity + 1 }
          : item)),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find(
      (item) => item.firebaseKey === product.firebaseKey,
    );
    if (exist.quantity === 1) {
      setCartItems(
        cartItems.filter((item) => item.firebaseKey !== product.firebaseKey),
      );
    } else {
      setCartItems(
        cartItems.map((item) => (item.firebaseKey === product.firebaseKey
          ? { ...exist, quantity: exist.quantity - 1 }
          : item)),
      );
    }
  };

  return (
    <div>
      <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
    </div>
  );
}
