import { serverApi } from "@/lib/serverApi";

type StoreSchema = {
  name: string;
  id: number;
  owner: number;
};

type RegisterData = {
  username: string;
  password: string;
  password_confirm: string;
};

export type RegisterResponse = {
  id: number;
  role: string;
  username: string;
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

export async function registerManager(data: RegisterData):Promise<RegisterResponse> {
  return serverApi("/users/register", {
    method: "POST",
    body: JSON.stringify({ ...data, role: "manager" }),
  });
}


export async function createStoreManager(data: { store_id: number; user_id: number | undefined }) {
  return serverApi("/store-manager/new", {
    method: "POST",
    body: JSON.stringify(data)
  })
}

export async function getAllStoreSales(store_id: number): Promise<void> {
  return serverApi(`/sales/${store_id}`, {
    method: "GET"
  })
}