// https://mobile-payment-svc-x6fr3lwlgq-ew.a.run.app/v1/mtn/payments/accounts/{accountId}/cash-in

import axios from 'axios';

import {API_URL_MOBILE_DEV} from '@env';

let API_URL = `${API_URL_MOBILE_DEV}/mtn/payments/accounts`;

const api = async (info, token) => {
  let {objc, accountId} = info;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let {amount, type, currency, originator, regions} = objc;

  let onj = {
    amount: `${amount * 100}`,
    type,
    currency,
    originator,
    regions,
  };

  console.log('onj', onj)

  let uri = `${API_URL}/${accountId}/cash-out`;

  const res = await axios.post(uri, onj, config);

  return res.data;
};
const cashoutService = {
  api,
};
export default cashoutService;
