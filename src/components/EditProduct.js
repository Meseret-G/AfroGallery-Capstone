import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from './ProductForm';
import { getSingleProduct } from '../api/ProductData';

export default function EditProduct() {
  const { key } = useParams;
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getSingleProduct(key).then(setEditItem);
  }, []);
  return (
    <>
      <h3 className="edit-view" style={{ color: 'white' }}>
        Edit Item
      </h3>
      <div className="form-container">
        <ProductForm user={editItem} />
      </div>
    </>
  );
}
