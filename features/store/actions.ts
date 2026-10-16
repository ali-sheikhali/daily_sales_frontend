"use server"

import { revalidatePath } from "next/cache"
import { addNewStore } from "./api/storesApi"

export async function addNewStoreAction(name: string) {
    await addNewStore(name)
    revalidatePath("/stores")
}