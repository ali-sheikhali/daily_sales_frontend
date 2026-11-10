import { ApiError } from "@/lib/serverApi";
import { allStoreSalesAction } from "../actions";
import StoreSales from "./StoreSales";
import { redirect } from "next/navigation";
import { AllSalesType } from "../schemas";

export default async function StoreDetailContent({ id }: { id: string }) {
  let allSales: AllSalesType;
  try {
    allSales = (await allStoreSalesAction(
      parseInt(id),
    )) as unknown as AllSalesType;
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
    <div className="pt-5">
      <StoreSales sales={allSales} id={parseInt(id)} />
    </div>
  );
}
