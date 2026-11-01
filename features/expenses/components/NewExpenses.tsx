"use client";

import Button from "@/components/ui/Button";
import { useState, type FormEvent } from "react";
import { newExpenseRequestSchema } from "../schemas";
import { newExpenseAction } from "../actions";
import toast from "react-hot-toast";

type NewExpensesProps = {
  id: string;
};

export default function NewExpenses({ id }: NewExpensesProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);

  const resetForm = () => {
    setAmount("");
    setDescription("");
    setIsOpen(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = newExpenseRequestSchema.safeParse({
      amount: Number(amount),
      store_id: Number(id),
      description,
    });

    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    try {
      const res = await newExpenseAction(result.data);
      toast.success(
        typeof res === "object" && res !== null && "message" in res
          ? String(res.message)
          : "Expense added successfully",
      );
      resetForm();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    }
  };

  return (
    <div className="w-10/12 mx-auto my-10">
      <div className="w-32">
        <Button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? "بستن" : "مخارج جدید"}
        </Button>
      </div>

      {isOpen && (
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-3 rounded-lg border p-4"
        >
          <label htmlFor="expense-amount">خرج جدید</label>
          <input
            id="expense-amount"
            type="text"
            min={1}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="rounded border p-2"
            placeholder="خرج جدید"
            required
          />

          <label htmlFor="expense-description">توضیحات</label>
          <input
            id="expense-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="rounded border p-2"
            placeholder="توضیحات"
            required
          />

          <div className="flex gap-2">
            <button
              type="submit"
              className="rounded bg-green-600 px-4 py-2 text-white cursor-pointer"
            >
              مخارج جدید
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="rounded border px-4 py-2"
            >
              انصراف
            </button>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      )}
    </div>
  );
}
