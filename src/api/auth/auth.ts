import { callBakend } from "@/common/api";
export function isAuthenticated(): boolean {
  return false;
}
export function login(username: string, password: string): Promise<void> {
  return callBakend("POST", "/login", { username, password });
}
export function logout(): Promise<void> {
  return callBakend("POST", "/logout");
}
