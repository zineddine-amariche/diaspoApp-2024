import axios from "axios";

const API_URL = `https://fund-raising-gw.dev.nbk-cg.com/v1/fund-raising/projects/update/status`;

const api = async (object) => {
  const { participantId, data, token } = object;
  let url = `${API_URL}/${participantId}/participants`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.put(url, data, config);
  console.log("update/status-Participant", res.data);
  return res.data;
};
const updateStatusParticipantService = {
  api,
};
export default updateStatusParticipantService;
