import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
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

// const CardStyle = styled.div`
//  margin: 5px;
//  border-radius: 5px;
// `;

export default function ProductCard({ product, setProducts, admin }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteProduct(product.firebaseKey).then((productArray) => setProducts(productArray));
    }
  };
  return (
    <div className="product-view">
      <Card className="product-card">
        <CardTitle className="card-header">{product.name}</CardTitle>
        <CardImg
          src={product.image}
          alt="product image"
          className="product-image"
        />
        <CardBody>
          <CardSubtitle className="card-title">
            {product.description}
          </CardSubtitle>
          {admin !== '' && (
            <Button className="edit" href={`/edit/${product.firebaseKey}`}>
              Edit
            </Button>
          )}
          <Button className="details" href={`/details/${product.firebaseKey}`}>
            Learn More
          </Button>

          {admin !== '' && (
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
  admin: PropTypes.string,
};

ProductCard.defaultProps = {
  admin: '',
};
