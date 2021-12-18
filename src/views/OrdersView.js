// import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
// import ProductCard from '../components/ProductCards';
// import { getOrders } from '../api/OrderData';

// export default function OrdersView({ user }) {
//   const [cartProduct, setCartProduct] = useState({});
//   const [products, setProducts] = useState([]);
//   //   const { firebaseKey } = useParams();
//   //   useEffect(() => {
//   //     let isMounted = true;
//   //     if (isMounted) {
//   //       getSingleOrder(firebaseKey).then(cartProduct);
//   //       getOrders().then(setCartProduct);
//   //     }
//   //     return () => {
//   //       isMounted = false;
//   //     };
//   //   }, []);

//   useEffect(() => {
//     let isMounted = true;
//     getOrders().then((orderArray) => {
//       if (isMounted) setProducts(orderArray);
//     });
//     return () => {
//       isMounted = false;
//     };
//   }, []);
//   return (
//     <div className="orderproducts">
//       <div className="shoppingcart">
//         <h5>Your Shopping Cart </h5>
//         {products.map((product) => (
//           <ProductCard
//             key={product.firebaseKey}
//             orderID={cartProduct.firebaseKey}
//             product={product}
//             setProducts={setProducts}
//             setCartProduct={setCartProduct}
//             user={user}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
// OrdersView.propTypes = {
//   user: PropTypes.shape(PropTypes.obj),
// };
// OrdersView.defaultProps = {
//   user: null,
// };
