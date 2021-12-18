import React from 'react';
import PropTypes from 'prop-types';

export default function Cart({ order, onAdd, onRemove }) {
  console.warn(order);
  const itemPrice = order.reduce((a, c) => a + c.quantity * c.price, 0);
  const taxPrice = itemPrice * 0.14;
  const shippingPrice = itemPrice > 2000 ? 0 : 20;
  const totalPrice = itemPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Items In Your Cart</h2>
      <div>
        {order.length !== 0 && <div>Your Orders</div>}
        {order.map((item) => (
          <div key={item.firebaseKey} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button
                type="button"
                onClick={() => onRemove(item)}
                className="remove-item"
              >
                -
              </button>
              <div>{item.quantity}</div>
              <button
                type="button"
                onClick={() => onAdd(item)}
                className="add-item"
              >
                +
              </button>
            </div>
            <button type="button"> Remove </button>
            <div className="col-2 text-right">
              {item.quantity} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        <hr />
        <div className="row">
          <div className="col-2">item Price</div>
          <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
        </div>
        <div className="row">
          <div className="col-2">Tax Price</div>
          <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
        </div>
        <div className="row">
          <div className="col-2">Shipping Price</div>
          <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
        </div>

        <div className="row">
          <div className="col-2">
            <h4>Total Price</h4>
          </div>
          <div className="col-1 text-right">
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
        </div>
        <hr />
        <div className="row">
          <button type="button" href="/checkout">
            Checkout
          </button>
        </div>
      </div>
    </aside>
  );
}
Cart.propTypes = {
  order: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
