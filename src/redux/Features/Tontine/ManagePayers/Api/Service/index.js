import axios from "axios";

// const API_URL = `https://wallet-gateway-svc-x6fr3lwlgq-nw.a.run.app/v1/authentication/users`;
const API_URL = `https://wallet-gateway-svc-x6fr3lwlgq-nw.a.run.app/v1/authentication/users`;

// /v1/authentication/users
//  !Login user api
const api = async (dataUser, token) => {
  // const { userName, userPassword } = dataUser;
  // console.log('dataUser', dataUser)
  // let url = `${API_URL}/${userName}/${userPassword}`
  // let url = `${API_URL}/${userName}/${userPassword}`
  // let object ={
   console.log('this is the service that is working',API_URL)
  // }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // const res = await axios.get(url, config);
  const res = await axios.post(API_URL,dataUser, config);
  return res.data;
};
const loginService = {
  api,
};
export default loginService;
