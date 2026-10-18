"use server";

import { revalidatePath } from "next/cache";
import { addNewStore, deleteStore, registerManager } from "./api/storesApi";

export async function addNewStoreAction(name: string) {
  await addNewStore(name);
  revalidatePath("/stores");
}

export async function deleteStoreAction(storeId: number): Promise<void> {
  await deleteStore(storeId);
}

export async function registerManagerAction(data: {
  username: string;
  password: string;
  password_confirm: string;
}) {
  await registerManager(data);
  revalidatePath("/stores");
}
  