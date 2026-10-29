'use server'

import { getExpensesApi } from "./api"
import { GetExpensesResponse } from "./schemas"



export async function getExpensesAction(store_id: number): Promise<GetExpensesResponse>  {
    console.log("id", store_id);
    
    const res = getExpensesApi(store_id)
    return res
}