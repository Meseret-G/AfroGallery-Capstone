// import React from 'react';
// import PropTypes from 'prop-types';

// import {
//   Card,
//   CardTitle,
//   CardBody,
//   Button,
//   CardSubtitle,
//   CardImg,
// } from 'reactstrap';
// import './ProductCard.scss';
// import { deleteOrder } from '../api/OrderData';

// export default function OrderCards({ cartProduct, setCartProduct }) {
//   const handleClick = (method) => {
//     if (method === 'remove') {
//       deleteOrder(cartProduct.firebaseKey).then((cartProductArray) => setCartProduct(cartProductArray));
//     }
//   };
//   return (
//     <div className="products">
//       <Card style={{ width: '20rem' }} className="project-card">
//         <CardImg
//           src={cartProduct.image}
//           alt="product image"
//           className="product-image"
//         />
//         <CardBody>
//           <CardTitle className="card-title">{cartProduct.name}</CardTitle>
//           <CardSubtitle className="card-description">
//             {cartProduct.description}
//           </CardSubtitle>
//           <CardTitle className="card-price">${cartProduct.price}</CardTitle>

//           <Button
//             className="delete-product"
//             type="button"
//             onClick={() => handleClick('remove')}
//             color="danger"
//           >
//             Remove
//           </Button>
//           <Button
//             className="delete-product"
//             type="button"
//             onClick={() => handleClick('remove')}
//             color="danger"
//           >
//             Add
//           </Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// }

// OrderCards.propTypes = {
//   cartProduct: PropTypes.shape({
//     name: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     price: PropTypes.string,
//     firebaseKey: PropTypes.string,
//     uid: PropTypes.string,
//   }).isRequired,
//   setCartProduct: PropTypes.func.isRequired,
// };
