import axios from "axios";
// export const APIURL = "http://localhost/api/";
export const APIURL = process.env.REACT_APP_API_URL;
export default function RequestAPI(method = "GET", url = "/", data = []) {
  return axios({
    method: method,
    url: APIURL + url,
    data: { data },
    responseType: "json",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}
