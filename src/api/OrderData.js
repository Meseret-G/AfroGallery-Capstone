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

const getUserOrder = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/orders/orderBy="uid"&equalTo="${uid}".json`)
    .then((response) => console.warn(response.data))
    .catch(reject);
});

const deleteOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/orders/${firebaseKey}.json`)
    .then(() => getOrders().then(resolve))
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

const updateOrderQuantity = (productfbKey, quantity) => new Promise((resolve, reject) => {
  getSingleOrder(productfbKey).then((order) => {
    axios
      .patch(`${dbUrl}/orders/${productfbKey}.json`, { quantity })
      .then(() => {
        resolve(order.orderfbKey);
      })
      .catch(reject);
  });
});
const removeOrder = (productfbKey) => new Promise((resolve, reject) => {
  getOrders(productfbKey).then((item) => {
    axios
      .delete(`${dbUrl}/orders/${productfbKey}.json`)
      .then(() => {
        resolve(item.orderKey);
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

export {
  getOrders,
  createOrder,
  getSingleOrder,
  deleteOrder,
  updateOrderQuantity,
  removeOrder,
  getUserOrder,
};
