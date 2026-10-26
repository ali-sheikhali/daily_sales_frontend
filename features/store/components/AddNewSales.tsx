"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { addNewSaleAction } from "../actions";
import toast from "react-hot-toast";

export default function AddNewSales({id}: {id: number}) {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("");

  function handleNewStoreClick() {
    setIsOpen((prev) => !prev); // open if closed, close if open
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = {
        amount: parseInt(amount),
        store_id: id
    }
    console.log("data:" , data);
    
    try {
      await addNewSaleAction(data);
      setAmount("");
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("ساخت فروشگاه ناموفق بود");
    }
  }

  return (
    <div>
      <Button onClick={handleNewStoreClick} className="text-red-600">
        {isOpen ? "بستن" : "فروش جدید"}
      </Button>

      {isOpen && (
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-3 rounded-lg border p-4"
        >
          <label htmlFor="sale-amount">فروش</label>
          <input
            id="sale-amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="rounded border p-2"
            placeholder=" فروش جدید"
            required
            
          />

          <div className="flex gap-2">
            <button
              type="submit"
              className="rounded bg-red-600 px-4 py-2 text-white"
            >
              فروش جدید{" "}
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
