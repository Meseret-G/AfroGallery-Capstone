import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  createProduct,
  getSingleProduct,
  updateProduct,
} from '../api/ProductData';

const initialState = {
  firebaseKey: '',
  name: '',
  image: '',
  description: '',
  price: '',
};
export default function ProductForm() {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();
  const { key } = useParams();

  useEffect(() => {
    if (key) {
      getSingleProduct(key).then((obj) => {
        setFormInput({
          firebaseKey: obj.firebaseKey,
          name: obj.name,
          image: obj.image,
          description: obj.description,
          price: obj.price,
        });
      });
    } else {
      setFormInput(initialState);
    }
  }, []);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const resetForm = () => {
    setFormInput({ ...initialState });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (key) {
      updateProduct(formInput).then(() => {
        resetForm();
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
            required
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
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          {key ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

// ProductForm.propTypes = {
//   user: PropTypes.shape({
//     firebaseKey: PropTypes.string,
//     name: PropTypes.string,
//     image: PropTypes.string,
//     description: PropTypes.string,
//     price: PropTypes.string,
//   }),
// };

// ProductForm.defaultProps = {
//   user: {} };
