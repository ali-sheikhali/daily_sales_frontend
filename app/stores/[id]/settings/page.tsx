import StoreSettings from "@/features/store/components/StoreSettings";
import { getAccessToken } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function StoreSettingsPage(params: {
    params: Promise<{id: string}>
}) {

    const token = await getAccessToken();

    if (!token) {
        redirect("/login");
    }

    const { id } = await params.params

    return (
        <div>
            <StoreSettings storeId={id} />
        </div>
    )
}