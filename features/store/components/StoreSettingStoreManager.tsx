"use client";
import { useManagerStore } from "@/store/managerStore";
import toast from "react-hot-toast";
import { createStoreManagerAction } from "../actions";

export default function StoreSettingStoreManager({
  storeId,
}: {
  storeId: string;
}) {
  const manager = useManagerStore((s) => s.manager);

  if (!manager) return <p>No manager</p>;

  async function handleClick() {

    if(!manager) return;

    const data = {
      store_id: parseInt(storeId),
      user_id: manager?.id,
    };

    try {
      await createStoreManagerAction(data);
        toast.success("مدیر فروشگاه با موفقیت اضافه شد");
    } catch (err) {
      toast.error((err as Error).message || "خطا در ورود به سیستم");
    }
  }

  return (
    <div>
      <p>آیا شماره {manager?.username} به عنوان مدیر به فروشگاه شما اضافه شود؟</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={handleClick}>
        اضافه کردن
      </button>
    </div>
  );
}
