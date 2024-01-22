import axios from "axios";
import {API_URL_WALLET_DEV, API_BASE_COMPLIANCE_DEV} from '@env';

const API_URL = `${API_URL_WALLET_DEV}/registration/users`;

//  !register user api

const api = async (dataUser, token) => {
  console.log('dataUser', dataUser)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.post(API_URL, dataUser, config);
   console.log("register", res.data);

  return res.data;
};
const registerService = {
  api,
};
export default registerService;
