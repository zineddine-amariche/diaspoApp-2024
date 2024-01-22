import axios from "axios";

const API_URL = `https://fund-raising-gw.dev.nbk-cg.com/v1/fund-raising/projects/users`;
//https://fund-raising-gw.dev.nbk-cg.com
const api = async (userId, currentPage, token) => {
  let url = `${API_URL}/${userId}/projects`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(url, config);

  return res.data;
};
const ListTontineService = {
  api,
};
export default ListTontineService;
