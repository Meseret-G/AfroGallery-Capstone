// import React from 'react';
// import PropTypes from 'prop-types';

// export default function Cart({ cartItems }) {
// //   const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
// //   const taxPrice = itemsPrice * 0.09;
// //   const ShippingPrice = itemsPrice > 500 ? 0 : 10;
// //   const totalPrice = itemsPrice + taxPrice + ShippingPrice;

//   return (
//     <div ClassName="cart-items">
//  <div className="cart-items-header"> Your Shopping Cart </div>
//       {cartItems.length === 0 && <div> Cart is Empty</div>}

//       {cartItems.map((item) => (
//         <div key={item.firebaseKey}>
//           <img src={item.img} alt="product-pic" />
//           <div>{item.name}</div>
//           <div>{item.description}</div>
//           <div>{item.price}</div>
//           <div>
//             <button type="button" onClick={() => onAdd(item)} className="add">
//               +
//             </button>
//             <button
//               type="button"
//               onClick={() => onRemove(item)}
//               className="remove"
//             >
//               -
//             </button>
//           </div>
//           <div>
//             {item.quantity} x ${item.price.toFixed(2)}
//           </div>
//         </div>
//       ))}
//       {cartItems.length !== 0 && (
//         <>
//           <hr />
//           <div className="price-container">
//             <div className="price"> Items Price </div>
//             <div> {itemsPrice.toFixed(2)} </div>
//           </div>
//           <div className="tax-container">
//             <div className="tax"> Tax Price </div>
//             <div> {taxPrice.toFixed(2)} </div>
//           </div>
//           <div className="total-container">
//             <div className="shipping"> Shipping Price </div>
//             <div> {totalPrice.toFixed(2)} </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }

// Cart.propTypes = {
//   cartItems: PropTypes.string,
// }.isRequired;
