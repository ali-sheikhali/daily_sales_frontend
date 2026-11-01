'use server'

import { revalidatePath } from "next/cache"
import { getExpensesApi, newExpensesApi } from "./api"
import { GetExpensesResponse, NewExpenseRequest } from "./schemas"



export async function getExpensesAction(store_id: number): Promise<GetExpensesResponse>  {    
    const res = getExpensesApi(store_id)
    return res
}

export async function newExpenseAction(data: NewExpenseRequest) {
    const res = newExpensesApi(data)
    revalidatePath("/stores")
    return res
}