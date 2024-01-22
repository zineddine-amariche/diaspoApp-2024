import axios from "axios";
import {API_URL_WALLET_DEV, API_BASE_COMPLIANCE_DEV} from '@env';

const API_URL = `${API_URL_WALLET_DEV}/registration/users/email/exists`;

const api = async (email, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log('this is the token',token)
  console.log('this is the email',email)

  const res = await axios.post(API_URL, {email}, config);
  return res.data;
};
const checkEmail = {
  api,
};
export default checkEmail;
