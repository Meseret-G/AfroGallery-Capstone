import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { getSingleProduct } from '../api/ProductData';
import ProductForm from '../components/ProductForm';
import { signOutUser } from '../api/auth';

export default function CreateProductView({ user }) {
  const [editItem, setEditItem] = useState({});
  const { key } = useParams();
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleProduct(key).then(setEditItem);
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <ProductForm obj={editItem} user={user} />
      <button
        type="button"
        onClick={() => {
          signOutUser().then(() => {
            history.push('/');
          });
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
CreateProductView.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};
CreateProductView.defaultProps = {
  user: null,
};
