"use server";

import { revalidatePath } from "next/cache";
import {
  addNewStore,
  createStoreManager,
  deleteStore,
  getAllStoreSales,
  registerManager,
} from "./api/storesApi";

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
  const response = await registerManager(data);
  revalidatePath("/stores");
  return response;
}

export async function createStoreManagerAction(data: {
  store_id: number;
  user_id: number;
}) {
  try {
    const res = await createStoreManager(data);
    return { ok: true as const, data: res };
  } catch (err) {
    return {
      ok: false as const,
      error:
        err instanceof Error
          ? err.message
          : typeof err === "string"
            ? err
            : JSON.stringify(err),
    };
  }
}

export async function allStoreSalesAction(store_id: number) {
  const response = getAllStoreSales(store_id);
  return response;
}
