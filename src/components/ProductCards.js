import React, { useState } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardBody,
  Button,
  CardSubtitle,
  CardImg,
} from 'reactstrap';
import firebaseConfig from '../api/apiKeys';
import './ProductCard.scss';
import { deleteProduct } from '../api/ProductData';

export default function ProductCard({ product, setProducts, onAdd }) {
  const [admin, setAdmin] = useState(false);
  const getCurrentUsersUid = () => firebase.auth().currentUser?.uid;

  if (getCurrentUsersUid() === firebaseConfig.adminUid) {
    setAdmin(true);
  } else {
    setAdmin(false);
  }

  const handleClick = (method) => {
    if (method === 'delete') {
      deleteProduct(product.firebaseKey).then((productArray) => setProducts(productArray));
    }
  };
  return (
    <div className="products">
      <Card style={{ width: '20rem' }} className="project-card">
        <CardImg
          src={product.image}
          alt="product image"
          className="product-image"
        />
        <CardBody>
          <CardTitle className="card-title">{product.name}</CardTitle>
          <CardSubtitle className="card-description">
            {product.description}
          </CardSubtitle>
          <CardTitle className="card-price">${product.price}</CardTitle>
          <Button className="add-cart" onClick={() => onAdd(product)}>
            Add To Cart
          </Button>
          {admin && (
            <Link className="link" to={`/edit/${product.firebaseKey}`}>
              Edit
            </Link>
          )}
          {admin && (
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
  onAdd: PropTypes.func.isRequired,
};
