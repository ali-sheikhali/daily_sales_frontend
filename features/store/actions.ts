"use server";

import { revalidatePath } from "next/cache";
import { addNewStore, deleteStore } from "./api/storesApi";

export async function addNewStoreAction(name: string) {
  await addNewStore(name);
  revalidatePath("/stores");
}

export async function deleteStoreAction(storeId: number): Promise<void> {
  await deleteStore(storeId);
}
