import axios from "axios";
const DEFAULT_URL = "http://localhost:5001";

/** make axios call and return list of all dogs */

async function getDogs() {
  const response = await axios.get(`${DEFAULT_URL}/dogs`);
  return response.data;
}

export { getDogs };
