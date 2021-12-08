import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createProduct, updateProduct } from '../api/ProductData';

const initialState = {
  name: '',
  image: '',
  description: '',
  price: '',
};
export default function ProductForm({ obj = {} }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput(obj);
    }
  }, [obj]);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const resetForm = () => {
    setFormInput(initialState);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateProduct(formInput).then(() => {
        history.push('/');
      });
    } else {
      createProduct({ ...formInput }).then(() => {
        resetForm();
        history.push('/');
      });
    }
  };
  return (
    <div className="product-form">
      <form onSubmit={handleClick}>
        <div className="form-group">
          <input
            onChange={(e) => handleChange(e)}
            value={formInput.name || ''}
            type="text"
            name="name"
            className="form-control"
            id="productName"
            placeholder="Product Name"
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => handleChange(e)}
            value={formInput.image || ''}
            type="text"
            name="image"
            className="form-control"
            id="productImage"
            placeholder="Product Image"
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => handleChange(e)}
            value={formInput.description || ''}
            type="text"
            name="description"
            className="form-control"
            id="productDescription"
            placeholder="Product Description"
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => handleChange(e)}
            value={formInput.price || ''}
            type="text"
            name="price"
            className="form-control"
            id="productPrice"
            placeholder="Product Price"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

ProductForm.propTypes = {
  obj: PropTypes.shape({}),
};
ProductForm.defaultProps = {
  obj: {},
};
