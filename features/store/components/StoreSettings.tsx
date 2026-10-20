import StoreSettingsForm from "./StoreSettingsForm";
import StoreSettingStoreManager from "./StoreSettingStoreManager";

export default function StoreSettings({ storeId }: { storeId: string }) {
  return (
    <div className="w-10/12 md:w-8/12 mx-auto flex flex-col gap-3">
      <h1>Store Settings</h1>
      <p>Manage your store settings here.</p>

      <StoreSettingsForm />
      <StoreSettingStoreManager storeId={storeId} />
    </div>
  );
}