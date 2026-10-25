import { ApiError } from "@/lib/serverApi";
import { allStoreSalesAction } from "../actions";
import StoreSales from "./StoreSales";
import { redirect } from "next/navigation";

export default async function StoreDetailContent({ id }: { id: string }) {
  try {
    const allSales = await allStoreSalesAction(parseInt(id));
    console.log("allSales: ", allSales);
  } catch (error) {
    if (error instanceof ApiError) {
      if (error.status === 401) redirect("/login");
      if (error.status === 403) redirect("/403");
      //   if (error.status === 404) notFound();
    }
    throw error; // anything else is a real bug, so let it show
  }

  return (
    <div>
      {id}

      <StoreSales />
    </div>
  );
}
