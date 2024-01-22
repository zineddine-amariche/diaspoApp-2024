import axios from "axios";

// const API_URL = "https://wallet-gateway-svc-x6fr3lwlgq-nw.a.run.app/v1/wallets/users";
const API_URL = "https://wallet-gw.dev.nbk-cg.com/v1/wallets/users";

const api = async (obj) => {
  let { userId, token } = obj;
  let url = `${API_URL}/${userId}/accounts`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(url, config);
  //
    // console.log('res.data get list payers', res.data)
  return res.data
};
const getListwalletAccounts = {
  api,
};
export default getListwalletAccounts;
