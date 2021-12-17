import React, { useState, useEffect } from 'react';
import { getOrders } from '../api/OrderData';
import Cart from '../components/Cart';
import ProductCard from '../components/ProductCards';

export default function CartView() {
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useEffect([]);
  console.warn(setProducts);
  useEffect(() => {
    let isMounted = true;
    getOrders().then((orderArray) => {
      if (isMounted) setCartProducts(orderArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const addProduct = (product) => {
    const productExist = cartProducts.find(
      (item) => item.firebaseKey === product.firebaseKey,
    );
    if (productExist) {
      setCartProducts(
        cartProducts.map((item) => (item.firebaseKey === product.firebaseKey
          ? { ...productExist, quantity: productExist.quantity + 1 }
          : item)),
      );
    } else {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    }
  };
  const removeProduct = (product) => {
    const productExist = cartProducts.find(
      (item) => item.firebaseKey === product.firebaseKey,
    );
    if (productExist.quantity === 1) {
      setCartProducts(
        cartProducts.filter((item) => item.firebaseKey !== product.firebaseKey),
      );
    } else {
      setCartProducts(
        cartProducts.map((item) => (item.firebaseKey === product.firebaseKey
          ? { ...productExist, quantity: productExist.quantity - 1 }
          : item)),
      );
    }
  };

  return (
    <div>
      <ProductCard
        products={products}
        addProduct={addProduct}
        removeProduct={removeProduct}
      />
      <Cart
        cartProducts={cartProducts}
        addProduct={addProduct}
        removeProduct={removeProduct}
      />
    </div>
  );
}
