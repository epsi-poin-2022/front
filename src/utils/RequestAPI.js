import axios from "axios";
// export const APIURL = "http://localhost/api/";
export const APIURL = "https://api-poin-2223.duclos.xyz/api/";

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
