import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form, FormControl, Button } from 'react-bootstrap';
import { getProducts, getCurrentUsersUid } from '../api/ProductData';
import ProductCard from '../components/ProductCards';

const CardStyle = styled.div`
  .flexContainer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 2em;
  }
  .formStyle {
    display: block;
    margin: 0 auto;
    width: 50em;
    margin-top: 1em;
  }
`;

const SearchResult = (searchProduct, products) => {
  if (!searchProduct) {
    return products;
  }
  return products.filter((product) => product.name.toUpperCase().includes(searchProduct.toUpperCase()));
};
export default function SearchView() {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');
  const searchWord = SearchResult(searchProduct, products);
  const [admin, setAdmin] = useState('');

  useEffect(() => {
    let isMounted = true;
    getProducts().then((productArray) => {
      if (isMounted) setProducts(productArray);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (getCurrentUsersUid() === process.env.REACT_APP_ADMIN_UID) {
      if (isMounted) setAdmin(process.env.REACT_APP_ADMIN_UID);
      console.warn(admin, '1234');
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <CardStyle>
        <div className="formStyle">
          <Form className="d-flex">
            <FormControl
              type="text"
              placeholder="Search By Name"
              className="me-2"
              aria-label="Search-by-name"
              onChange={(e) => {
                setSearchProduct(e.target.value);
                e.preventDefault();
              }}
            />
            <Button
              variant="outline-secondary"
              style={{ width: '5rem', height: '3rem', padding: '.5rem' }}
            >
              Search
            </Button>
          </Form>
        </div>
        <div className="flexContainer">
          {searchWord ? (
            <>
              {searchWord.map((word) => (
                <ProductCard
                  product={word}
                  setProducts={setProducts}
                  key={word.firebaseKey}
                  admin={admin}
                />
              ))}
            </>
          ) : (
            'NOT FOUND'
          )}
        </div>
      </CardStyle>
    </>
  );
}
