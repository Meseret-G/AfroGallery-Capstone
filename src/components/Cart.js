import React from 'react';
import PropTypes from 'prop-types';

export default function Cart({ cartProducts, onAdd, onRemove }) {
  const productPrice = cartProducts.reduce(
    (a, c) => a + c.quantity * c.price,
    0,
  );
  const taxPrice = productPrice * 0.14;
  const shippingPrice = productPrice > 2000 ? 0 : 20;
  const totalPrice = productPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Items In Your Cart</h2>
      <div>
        {/* {cartProducts.length === 0 && <div>Cart is empty</div>} */}
        {cartProducts.map((product) => (
          <div key={product.firebaseKey} className="row">
            <div className="col-2">{product.name}</div>
            <div className="col-2">
              <button
                type="button"
                onClick={() => onRemove(product)}
                className="remove-product"
              >
                -
              </button>{' '}
              <button
                type="button"
                onClick={() => onAdd(product)}
                className="add-product"
              >
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {product.quantity} x ${product.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartProducts.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2">Product Price</div>
              <div className="col-1 text-right">${productPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
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
              <button type="button">Checkout</button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
Cart.propTypes = {
  cartProducts: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
