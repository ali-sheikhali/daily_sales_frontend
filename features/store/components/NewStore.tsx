'use client'

import { useState } from "react";
import Button from "@/components/ui/Button";
import { addNewStoreAction } from "../actions";
import toast from "react-hot-toast";

export default function NewStore() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  function handleNewStoreClick() {
    setIsOpen((prev) => !prev); // open if closed, close if open
  }

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  
  try {
    await addNewStoreAction(name);
    setName("");
    setIsOpen(false);
  } catch (error) {
    console.error(error);
    toast.error("ساخت فروشگاه ناموفق بود");
  }
}

  return (
    <div>
      <Button onClick={handleNewStoreClick} className="text-red-600">
        {isOpen ? "بستن" : "فروشگاه جدید"}
      </Button>

      {isOpen && (
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-3 rounded-lg border p-4"
        >
          <label htmlFor="store-name">نام فروشگاه</label>
          <input
            id="store-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded border p-2"
            placeholder="مثلاً: فروشگاه من"
            required
          />

          <div className="flex gap-2">
            <button
              type="submit"
              className="rounded bg-red-600 px-4 py-2 text-white"
            >
              ساخت فروشگاه
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded border px-4 py-2"
            >
              انصراف
            </button>
          </div>
        </form>
      )}
    </div>
  );
}