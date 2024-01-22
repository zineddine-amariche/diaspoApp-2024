import axios from "axios";

const API_URL = `https://fund-raising-gw.dev.nbk-cg.com/v1/fund-raising/projects`;

//add/participants

const api = async (object, token) => {
  const { projectId, appUsers, noneAppUsers, type } = object;

  let url = `${API_URL}/${projectId}/add/participants`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  let objects = {
    appUsers,
    noneAppUsers,
    type,
  };
  const res = await axios.post(url, objects, config);
  //  console.log("Create Participants", res.data);
  return res.data;
};
const ParticipantsService = {
  api,
};
export default ParticipantsService;
