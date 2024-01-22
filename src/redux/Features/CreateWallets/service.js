import axios from 'axios';

import {API_URL_WALLET_DEV} from '@env';

let API_URL = `${API_URL_WALLET_DEV}/wallets/users`;

const api = async (info, token) => {
  const {userId, values} = info;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const {mobileNumber, type, name} = values;

  let obj = {
    name,
    type,

    eWalletAccountDetails: {
      mobileNumber: mobileNumber,
    },
  };
  // console.log('----- info -----', info);

  let uri = `${API_URL}/${userId}/payment-means`;

  const res = await axios.post(uri, obj, config);
  // console.log('res.data', res.data)
  return res.data;
};
const CreateEwalletsService = {
  api,
};
export default CreateEwalletsService;
