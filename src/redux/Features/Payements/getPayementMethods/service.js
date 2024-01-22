import axios from 'axios';

import {API_URL_WALLET_DEV} from '@env';

const API_URL = `${API_URL_WALLET_DEV}/wallets/users`;

const api = async (dataUser, token) => {
  const {userId} = dataUser;
  let url = `${API_URL}/${userId}/payment-means`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(url, config);
  return res.data;
};
const payementMethodsService = {
  api,
};
export default payementMethodsService;
