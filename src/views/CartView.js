// import React, { useState, useEffect } from 'react';
// import Cart from '../components/Cart';
// import { getSingleProduct } from '../api/ProductData';

// export default function CartView() {
//   const [cartProducts, setCartProducts] = useState([]);
//   console.warn(cartProducts);

//   useEffect(() => {
//     let isMounted = true;
//     if (isMounted) {
//       getSingleProduct(firebaseKey).then(setCartProducts);
//     }
//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   const onAdd = (product) => {
//     const exist = cartProducts.find(
//       (item) => item.firebaseKey === product.firebaseKey,
//     );
//     if (exist) {
//       setCartProducts(
//         cartProducts.map((item) => (item.firebaseKey === product.firebaseKey
//           ? { ...exist, quantity: exist.quantity + 1 }
//           : item)),
//       );
//     } else {
//       setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
//     }
//   };
//   const onRemove = (product) => {
//     const exist = cartProducts.find(
//       (item) => item.firebaseKey === product.firebaseKey,
//     );
//     if (exist.quantity === 1) {
//       setCartProducts(
//         cartProducts.filter((item) => item.firebaseKey !== product.firebaseKey),
//       );
//     } else {
//       setCartProducts(
//         cartProducts.map((item) => (item.firebaseKey === product.firebaseKey
//           ? { ...exist, quantity: exist.quantity - 1 }
//           : item)),
//       );
//     }
//   };

//   return (
//     <div>
//       <Cart cartProducts={cartProducts} onAdd={onAdd} onRemove={onRemove} />
//     </div>
//   );
// }
