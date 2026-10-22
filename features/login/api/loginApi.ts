
import type { LoginData } from "../schema/loginSchema";

type LoginResponse = {
  success: boolean;
  username: string;
  role: string;
  id: number;
  store_id?: number;
};

export async function login(data: LoginData): Promise<LoginResponse> {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.detail || "Login failed");
  }

  return result;
}