import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getSales = (uid, isAdmin) => new Promise((resolve, reject) => {
  axios
    .get(
      `${dbUrl}/${
        isAdmin
          ? 'salesRecord.json'
          : `salesRecord.json?orderBy="uid"&equalTo="${uid}"`
      }`,
    )
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getSales;
