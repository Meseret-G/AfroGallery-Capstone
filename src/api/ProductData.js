import axios from 'axios';
import firebaseConfig from './apiKeys';

const dburl = firebaseConfig.databaseURL;

const getProducts = () => new Promise((resolve, reject) => {
  axios
    .get(`${dburl}/products.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getProducts;
