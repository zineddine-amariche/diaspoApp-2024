import axios from "axios";

const API_URL = `https://fund-raising-gw.dev.nbk-cg.com/v1/fund-raising/projects/users`;
const api = async (projectId, userId, token) => {
  let url = `${API_URL}/${projectId}/users/${userId}/close`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(url, config);
  return res.data;
};
const deleteTontineInfoService = {
  api,
};
export default deleteTontineInfoService;
