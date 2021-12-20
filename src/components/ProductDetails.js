import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../api/ProductData';

export default function ProductDetails() {
  const [product, setProducts] = useState({});
  const { fbKey } = useParams();

  useEffect(() => {
    getSingleProduct(fbKey).then((item) => setProducts(item));
  });

  return (
    <div className="products-details">
      <h3 style={{ color: 'white' }}> Learn More...</h3>
      <h2 className="product-name" style={{ color: 'white' }}>
        {product.name}
      </h2>
      <img
        className="item-details-img"
        style={{ color: 'white' }}
        src={product.image}
        alt={product.name}
      />
      <h4 className="product-details" style={{ color: 'white' }}>
        {product.details}
      </h4>
    </div>
  );
}
