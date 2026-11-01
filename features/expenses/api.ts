import { serverApi } from "@/lib/serverApi";
import { GetExpensesResponse, NewExpenseRequest } from "./schemas";

export async function getExpensesApi(store_id: number): Promise<GetExpensesResponse> {
  return serverApi(`/expenses/${store_id}`, {
    method: "GET",
  });
}


export async function newExpensesApi(data: NewExpenseRequest) {
  return serverApi(`/expenses`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}