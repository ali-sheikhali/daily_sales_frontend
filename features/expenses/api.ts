import { serverApi } from "@/lib/serverApi";
import { GetExpensesResponse } from "./schemas";

export async function getExpensesApi(store_id: number): Promise<GetExpensesResponse> {
  return serverApi(`/expenses/${store_id}`, {
    method: "GET",
  });
}
