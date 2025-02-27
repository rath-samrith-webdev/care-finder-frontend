import axios from "axios";
import { isAuthenticated } from "@/api/auth/auth";
type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTION";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACK_END_API,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

export async function callBakend(
  method: Method,
  endpoint: string,
  body?: any
): Promise<any> {
  //check if token is not expired
  if (!isAuthenticated()) {
    return [];
  }

  return new Promise((resolve, reject) => {
    api
      .request({
        method,
        url: endpoint,
        data: body,
        // headers: {
        //   "X-API-Key": store.state.apiKey,
        //   "X-User-Id": store.state.user.id,
        //   ...headers,
        // },
      })
      .then((resp: any) => {
        resolve(resp.data);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}
