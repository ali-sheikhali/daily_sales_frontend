import { api } from "@/lib/api";
import type { LoginData } from "../schema/loginSchema";

export function login(data: LoginData) {
  return api<{ token: string }>("/users/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}