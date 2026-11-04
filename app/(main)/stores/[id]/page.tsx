import { redirect } from "next/navigation";
import { getAccessToken } from "@/lib/auth";
import StoreDetailContent from "@/features/store/components/StoreDetailContent"

export default async function StoreDetailPage({params}: {
    params: Promise<{id: string}>
}) {

    const token = await getAccessToken();
    
      if (!token) {
        redirect("/login");
      }

    const {id} = await params


    return(
        <div>
            <StoreDetailContent id={id} />
        </div>
    )
}