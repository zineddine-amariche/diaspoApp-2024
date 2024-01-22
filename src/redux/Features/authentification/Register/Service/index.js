import axios from "axios";
import { API_URL_WALLET_DEV, API_BASE_COMPLIANCE_DEV } from '@env';

const API_URL = `${API_URL_WALLET_DEV}/registration/users`;


const api = async (dataUser, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    

    const res = await axios.post(API_URL, dataUser, config);
    if (res.status !== 200) {
      console.error("API Error:", res.status, res.statusText);
      return error;
    }

    console.log("register", res.data);
    return res.data;
  } catch (error) {
    console.error("API Request Error:", error);
    return error;
  }
};

const registerService = {
  api,
};

export default registerService;
