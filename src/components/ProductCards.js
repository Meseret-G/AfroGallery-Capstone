import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardBody,
  Button,
  CardSubtitle,
  CardImg,
} from 'reactstrap';
import './ProductCard.scss';
import { deleteProduct } from '../api/ProductData';

export default function ProductCard({ product, user, setProducts }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteProduct(product.firebaseKey).then((productArray) => setProducts(productArray));
    }
  };
  return (
    <div className="products">
      <Card style={{ width: '20rem' }} className="project-card">
        <CardImg src={product.image} alt="product image" />
        <CardBody>
          <CardTitle className="card-title">{product.name}</CardTitle>
          <CardSubtitle className="card-title">
            {product.description}
          </CardSubtitle>
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
