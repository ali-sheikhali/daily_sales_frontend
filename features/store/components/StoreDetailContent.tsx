import { allStoreSalesAction } from "../actions";
import StoreSales from "./StoreSales";

export default async function StoreDetailContent({id}: {id: string}) {

    const allSales = await allStoreSalesAction(parseInt(id))

    console.log("allSales: ", allSales);
    

    return(
        <div>
            {id}

            <StoreSales />
        </div>
    )
}