import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getOrders = async () => {
  const order = await axios.get(`${dbUrl}/orders.json`);
  const orderData = Object.values(order.data);
  return orderData;
};
const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/orders/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const addProductToCart = (orderfbKey, productfbKey) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/orderProducts.json`, {
      orderId: orderfbKey,
      productId: productfbKey,
    })
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbUrl}/orderProducts/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getOrders().then(resolve);
        })
        .catch(reject);
    });
});

const createOrder = (obj, pfbKey) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders.json`, obj).then((response) => {
    const firebaseKey = response.data.name;
    axios
      .patch(`${dbUrl}/orders/${firebaseKey}.json`, { firebaseKey })
      .then(() => addProductToCart(firebaseKey, pfbKey))
      .catch(reject);
  });
});

export { getOrders, createOrder, getSingleOrder };
