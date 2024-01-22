import axios from 'axios';

import {API_URL_WALLET_DEV} from '@env';

let API_URL = `${API_URL_WALLET_DEV}/wallets/walletToWallet/remittances`;

const api = async (info, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // console.log('info', info)

  let {sender, receiver, amount} = info;

  let onj = {
    sender,
    receiver,
    amount: amount * 100,
  };

  const res = await axios.post(API_URL, onj, config);
  // console.log('res.data', res.data)
  return res.data;
};
const transfersService = {
  api,
};
export default transfersService;
