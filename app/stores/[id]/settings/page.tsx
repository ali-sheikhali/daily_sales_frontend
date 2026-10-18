import StoreSettings from "@/features/store/components/StoreSettings";
import { getAccessToken } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function StoreSettingsPage() {

    const token = await getAccessToken();

    if (!token) {
        redirect("/login");
    }

    return (
        <div>
            <StoreSettings />
        </div>
    )
}