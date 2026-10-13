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
