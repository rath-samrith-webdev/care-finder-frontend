import { callBakend } from "@/common/api";

export async function getUsers() {
  const endpoint = "/users";
  const method = "GET";
  return await callBakend(method, endpoint);
}
