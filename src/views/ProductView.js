import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import firebaseConfig from '../api/apiKeys';
import { getCurrentUsersUid, getProducts } from '../api/ProductData';
import ProductCard from '../components/ProductCards';

export default function ProductView() {
  const [products, setProducts] = useState([]);
  const [admin, setAdmin] = useState(false);

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
    let isMounted = true;
    if (getCurrentUsersUid() === firebaseConfig.adminUid) {
      if (isMounted) setAdmin(true);
    } else {
      setAdmin(false);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <>
        {admin && <Link to="/createproduct"> Create Product </Link>}
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
