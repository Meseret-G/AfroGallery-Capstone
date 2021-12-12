import React from 'react';
import PropTypes from 'prop-types';

export default function Cart({ cartProducts, onAdd, onRemove }) {
  const productPrice = cartProducts.reduce(
    (a, c) => a + c.quantity * c.price,
    0,
  );
  const taxPrice = productPrice * 0.09;
  const shippingPrice = productPrice > 500 ? 0 : 10;
  const totalPrice = productPrice + taxPrice + shippingPrice;
  console.warn(cartProducts);

  return (
    <>
      <div className="cart-items-header"> Your Shopping Cart </div>
      {cartProducts.length === 0 && <div> Cart is Empty</div>}

      {cartProducts.map((product) => (
        <div key={product.firebaseKey}>
          <img src={product.img} alt="product-pic" />
          <div>{product.name}</div>
          <div>{product.name}</div>
          <div>
            <button
              type="button"
              onClick={() => onAdd(product)}
              className="add"
            >
              +
            </button>
            <button
              type="button"
              onClick={() => onRemove(product)}
              className="remove"
            >
              -
            </button>
          </div>
          <div>
            {product.quantity} x ${product.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartProducts.length !== 0 && (
        <>
          <hr />
          <div className="price-container">
            <div className="price"> Items Price </div>
            <div> {productPrice.toFixed(2)} </div>
          </div>
          <div className="tax-container">
            <div className="tax"> Tax Price </div>
            <div> {taxPrice.toFixed(2)} </div>
          </div>
          <div className="total-container">
            <div className="shipping"> Shipping Price </div>
            <div> {shippingPrice.toFixed(2)} </div>
          </div>
          <div className>
            <div>
              <strong>Total Price</strong>
            </div>
            <div>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div>
            <button type="submit">Checkout</button>
          </div>
        </>
      )}
    </>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.string,
}.isRequired;
