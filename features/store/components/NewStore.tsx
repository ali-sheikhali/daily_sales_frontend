'use client'

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function NewStore() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  function handleNewStoreClick() {
    setIsOpen((prev) => !prev); // open if closed, close if open
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("New store:", name); // later: call your API here
    setName("");
    setIsOpen(false);
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