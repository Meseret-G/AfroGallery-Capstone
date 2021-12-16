import React, { useState, useEffect } from 'react';
import { getOrders } from '../api/OrderData';

export default function Cart() {
  const [orderProducts, setOrderProducts] = useState([]);
  console.warn(orderProducts);

  useEffect(() => {
    let isMounted = true;
    getOrders().then((orderProductArray) => {
      if (isMounted) setOrderProducts(orderProductArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);
  // const [orderProducts, setOrderProducts] = useEffect([]);

  // const productPrice = cartProducts.reduce(
  //   (a, c) => a + c.quantity * c.price,
  //   0,
  // );
  // const taxPrice = productPrice * 0.09;
  // const shippingPrice = productPrice > 500 ? 0 : 10;
  // const totalPrice = productPrice + taxPrice + shippingPrice;
  return (
    <>
      <h1>Your Shopping Cart</h1>
      <div>{orderProducts.name}</div>
      <div>Product Description</div>
      <button type="button" className="add">
        +
      </button>
      <button type="button" className="remove">
        -
      </button>
    </>
  );
}
