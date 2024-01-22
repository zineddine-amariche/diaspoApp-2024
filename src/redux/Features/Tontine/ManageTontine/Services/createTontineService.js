import axios from "axios";

const API_URL = `https://fund-raising-gw.dev.nbk-cg.com/v1/fund-raising/projects/users`;
const api = async (values, data, token) => {
  let url = `${API_URL}/${values}/projects`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.post(url, data, config);
  // console.log('rè----createTontineService', res.data)

  return res.data;
};
const createTontineService = {
  api,
};
export default createTontineService;
