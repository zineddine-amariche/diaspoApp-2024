import axios from 'axios';


import {API_URL_WALLET_DEV, API_BASE_COMPLIANCE_DEV} from '@env';

let API_URL = `${API_URL_WALLET_DEV}/wallets/users`;

const api = async (obj, token) => {
  let {userId, accountId} = obj;
  let url = `${API_URL}/${userId}/accounts/${accountId}/transactions`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(url, config);
  return res.data;
};
const getListTranscations = {
  api,
};
export default getListTranscations;
