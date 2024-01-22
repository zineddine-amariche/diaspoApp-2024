import axios from 'axios';
import {API_URL_WALLET_DEV} from '@env';

let API_URL = `${API_URL_WALLET_DEV}/authentication/users`;
//  !Login user api
const api = async (dataUser, token) => {
  console.log('this is the datauser', dataUser)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.post(API_URL, dataUser, config);
  console.log('res',res)
  return res.data;
};
const loginService = {
  api,
};
export default loginService;
