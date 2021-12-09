import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { getProducts } from '../api/ProductData';
import ProductCard from '../components/ProductCards';

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

  useEffect(() => {
    let isMounted = true;
    getProducts().then((productArray) => {
      if (isMounted) setProducts(productArray);
    });

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <>
      <div>
        <Form className="d-flex">
          <FormControl
            type="text"
            placeholder="Search By Product Name"
            className="me-2"
            aria-label="Search-by-name"
            onChange={(e) => {
              setSearchProduct(e.target.value);
            }}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
      <div>
        {searchWord ? (
          <>
            {searchWord.map((word) => (
              <ProductCard
                product={word}
                setProducts={setProducts}
                key={word.firebaseKey}
              />
            ))}
          </>
        ) : (
          'NOT FOUND'
        )}
      </div>
    </>
  );
}
