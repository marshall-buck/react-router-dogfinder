import axios from "axios";
const DEFAULT_URL = "http://localhost:5001";



async function getDogs() {

  const response = await axios.get(`${DEFAULT_URL}/dogs`);
  return response.data;


}
async function getDogDetail(name) {

  const response = await axios.get(`${DEFAULT_URL}/dogs/${name}`);
  return response.data;


}



export { getDogDetail, getDogs };