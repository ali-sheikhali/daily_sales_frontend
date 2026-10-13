import { redirect } from "next/navigation";
import { getAccessToken } from "@/lib/auth";
import AllStores from "@/features/store/components/AllStores";

export default async function StoresPage() {
  const token = await getAccessToken();

  if (!token) {
    redirect("/login");
  }

  return (
    <div>
        <AllStores />
    </div>
  );
}
