import React from 'react';
import PropTypes from 'prop-types';
// import Data from '../../sample-data/Data';

export default function Cart({ cartItems, onAdd, onRemove }) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const taxPrice = itemsPrice * 0.09;
  const ShippingPrice = itemsPrice > 500 ? 0 : 10;
  const totalPrice = itemsPrice + taxPrice + ShippingPrice;

  return (
    <>
      <div>{cartItems.length === 0 && <div> Cart is Empty</div>}</div>

      {cartItems.map((item) => (
        <div key={item.firebaseKe}>
          <div>{item.name}</div>
          <div>
            <button type="button" onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button
              type="button"
              onClick={() => onRemove(item)}
              className="remove"
            >
              -
            </button>
          </div>
          <div>
            {item.quantity} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="price-container">
            <div className="price"> Items Price </div>
            <div> {itemsPrice.toFixed(2)} </div>
          </div>
          <div className="tax-container">
            <div className="tax"> Tax Price </div>
            <div> {taxPrice.toFixed(2)} </div>
          </div>
          <div className="total-container">
            <div className="shipping"> Shipping Price </div>
            <div> {totalPrice.toFixed(2)} </div>
          </div>
        </>
      )}
    </>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.string,
}.isRequired;
