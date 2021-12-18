import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getOrders } from '../api/OrderData';
import Cart from '../components/Cart';

export default function CartView({ order, setOrder }) {
  useEffect(() => {
    let isMounted = true;
    getOrders().then((orderArray) => {
      if (isMounted) setOrder(orderArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);
  // how do I confirm order is not an obj

  const addProduct = (product) => {
    const productExist = order.find(
      (item) => item.firebaseKey === product.firebaseKey,
    );
    if (productExist) {
      setOrder(
        order.map((item) => (item.firebaseKey === product.firebaseKey
          ? { ...productExist, quantity: productExist.quantity + 1 }
          : item)),
      );
    } else {
      setOrder([...order, { ...product, quantity: 1 }]);
    }
  };
  const removeProduct = (product) => {
    const productExist = order.find(
      (item) => item.firebaseKey === product.firebaseKey,
    );
    if (productExist.quantity === 1) {
      setOrder(
        order.filter((item) => item.firebaseKey !== product.firebaseKey),
      );
    } else {
      setOrder(
        order.map((item) => (item.firebaseKey === product.firebaseKey
          ? { ...productExist, quantity: productExist.quantity - 1 }
          : item)),
      );
    }
  };

  return (
    <div>
      {/* <ProductCard
        products={products}
        addProduct={addProduct}
        removeProduct={removeProduct}
      /> */}
      <Cart
        order={order}
        setOrder={setOrder}
        addProduct={addProduct}
        removeProduct={removeProduct}
      />
    </div>
  );
}

CartView.propTypes = {
  order: PropTypes.func.isRequired,
  setOrder: PropTypes.func.isRequired,
};
