import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './ProductForm.scss';
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
  details: '',
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
          details: obj.details,
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
            placeholder="Title"
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
            placeholder="Image"
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
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={(e) => handleChange(e)}
            value={formInput.details || ''}
            type="text"
            name="details"
            className="form-control"
            id="productDetail"
            placeholder="More Details"
            required
          />
        </div>
        <button type="submit" className="add-btn">
          {key ? 'Update' : 'Add'}
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
