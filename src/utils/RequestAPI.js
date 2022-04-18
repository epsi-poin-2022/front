import axios from "axios";
export const APIURL = "http://localhost/api/";

export default function RequestAPI(method = "GET", url = "/", data = []) {
  return axios({
    method: method,
    url: APIURL + url,
    data: { data },
    responseType: "json",
  });
}
