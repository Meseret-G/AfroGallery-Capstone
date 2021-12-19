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
      <h2 className="product-name">{product.name}</h2>
      <img className="item-pic" src={product.image} alt={product.name} />
      <p className="product-description">{product.description}</p>
    </div>
  );
}
