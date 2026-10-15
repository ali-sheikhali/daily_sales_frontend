import "server-only";
import { getAccessToken } from "./auth";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function serverApi<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const token = await getAccessToken();

  if (!token) {
    throw new Error("Unauthorized");
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.detail || "Request failed");
  }

  return res.json();
}
