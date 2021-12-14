import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import firebaseConfig from '../api/apiKeys';
import { getProducts } from '../api/ProductData';
import ProductCard from '../components/ProductCards';

export default function ProductView({ onAdd }) {
  const [products, setProducts] = useState([]);
  const [admin, setAdmin] = useState(false);
  const getCurrentUsersUid = () => firebase.auth().currentUser?.uid;

  useEffect(() => {
    let isMounted = true;
    getProducts().then((productArray) => {
      if (isMounted) setProducts(productArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  if (getCurrentUsersUid() === firebaseConfig.adminUid) {
    setAdmin(true);
  } else {
    setAdmin(false);
  }

  return (
    <div>
      <>
        {admin && <Link to="/createproduct"> Create Product </Link>}
        {products.map((product) => (
          <ProductCard
            key={product.firebaseKey}
            product={product}
            setProducts={setProducts}
            onAdd={onAdd}
          />
        ))}
      </>
    </div>
  );
}
ProductView.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
