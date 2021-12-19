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
          <CardSubtitle className="card-category">
            {product.category}
          </CardSubtitle>
          <div className="card-btn-container">
            {admin !== '' && (
              <Button
                className="btn btn-success"
                href={`/edit/${product.firebaseKey}`}
              >
                <i className="far fa-edit" />
              </Button>
            )}
            <Button
              className="btn btn-primary"
              href={`/details/${product.firebaseKey}`}
            >
              <i className="far fa-file-alt" />
            </Button>

            {admin !== '' && (
              <Button
                className="btn btn-danger"
                variant="primary"
                type="button"
                onClick={() => handleClick('delete')}
                color="danger"
              >
                <i className="far fa-trash-alt" />
              </Button>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
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
