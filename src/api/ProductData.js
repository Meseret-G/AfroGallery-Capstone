import axios from 'axios';
import firebase from 'firebase/app';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// const getProducts = () => new Promise((resolve, reject) => {
//   axios
//     .get(`${dbUrl}/products.json`)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch(reject);
// });

const getCurrentUsersUid = () => firebase.auth().currentUser?.uid;

const getProducts = async () => {
  const product = await axios.get(`${dbUrl}/Products.json`);

  const productData = Object.values(product.data);
  return productData;
};

const deleteProduct = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/Products/${firebaseKey}.json`)
    .then(() => getProducts().then(resolve))
    .catch(reject);
});

const createProduct = (obj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/Products.json`, obj).then((response) => {
    const firebaseKey = response.data.name;
    axios
      .patch(`${dbUrl}/Products/${firebaseKey}.json`, { firebaseKey })
      .then(() => {
        getProducts().then(resolve);
      })
      .catch(reject);
  });
});

const updateProduct = (obj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/Products/${obj.firebaseKey}.json`, obj)
    .then(() => getProducts().then(resolve))
    .catch(reject);
});

const getSingleProduct = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/Products/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export {
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
  getSingleProduct,
  getCurrentUsersUid,
};
