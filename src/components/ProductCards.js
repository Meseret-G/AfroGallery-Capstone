import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card, CardTitle, CardBody, Button,
} from 'reactstrap';
import { deleteProduct } from '../api/ProductData';

export default function ProductCard({ product, user, setProducts }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteProduct(product.firebaseKey).then((productArray) => setProducts(productArray));
    }
  };
  return (
    <div className="products">
      <Card className="project-card">
        <CardBody>
          <CardTitle className="card-title">{product.name}</CardTitle>
          <CardTitle className="card-title">{product.description}</CardTitle>
          <CardTitle className="card-title">{product.image}</CardTitle>
          <CardTitle className="card-title">{product.price}</CardTitle>
          {user?.isAdmin && (
            <Link className="link" to={`/edit/${product.firebaseKey}`}>
              Edit
            </Link>
          )}
          {user?.isAdmin && (
            <Button
              className="delete-product"
              type="button"
              onClick={() => handleClick('delete')}
              color="danger"
            >
              Delete
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  setProducts: PropTypes.func.isRequired,
  user: PropTypes.shape(PropTypes.obj),
};

ProductCard.defaultProps = {
  user: null,
};
