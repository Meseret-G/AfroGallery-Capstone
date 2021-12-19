import React from 'react';
import PropTypes from 'prop-types';
import ProductForm from '../components/ProductForm';

export default function NewProducts({ user }) {
  return (
    <>
      <h3 className="form-header">Add A New Item </h3>
      <div className="form-container">
        <ProductForm admin={user} />
      </div>
    </>
  );
}
NewProducts.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};
NewProducts.defaultProps = {
  user: null,
};
