import React, { useState, useEffect } from 'react';
import { getCurrentUsersUid, getProducts } from '../api/ProductData';
import ProductCard from '../components/ProductCards';

export default function ProductView() {
  const [products, setProducts] = useState([]);
  const [admin, setAdmin] = useState('');

  useEffect(() => {
    let isMounted = true;
    getProducts().then((productArray) => {
      if (isMounted) setProducts(productArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    // let isMounted = true;
    if (getCurrentUsersUid() === process.env.REACT_APP_ADMIN_UID) {
      setAdmin(process.env.REACT_APP_ADMIN_UID);
    }
    // return () => {
    //   // isMounted = false;
    // };
  }, []);

  return (
    <div className="product-view">
      <>
        {products.map((product) => (
          <ProductCard
            key={product.firebaseKey}
            product={product}
            setProducts={setProducts}
            admin={admin}
          />
        ))}
      </>
    </div>
  );
}
