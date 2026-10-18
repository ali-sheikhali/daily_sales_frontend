import { serverApi } from "@/lib/serverApi";

type StoreSchema = {
  name: string;
  id: number;
  owner: number;
};

export async function getAllStores(): Promise<StoreSchema[]> {
  return serverApi<StoreSchema[]>("/stores", {
    method: "GET",
  });
}

export async function addNewStore(name: string) {
  return serverApi("/stores", {
    method: "POST",
    body: JSON.stringify({ name }),
  });
}

export async function deleteStore(store_id: number): Promise<void> {
  return serverApi(`/stores/${store_id}`, {
    method: "DELETE",
  });
}
