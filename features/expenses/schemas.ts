import {z} from "zod";

// show all expenses
export type Expense = {
  id: number;
  amount: number;
  store_id: number;
  description: string;
  expenses_date: string;
};
export type GetExpensesResponse = Expense[];


// request to create new expense
export const newExpenseRequestSchema = z.object({
  amount: z
    .number({ message: "مبلغ نامعتبر است" })
    .int()
    .positive("مبلغ باید بیشتر از صفر باشد"),
  store_id: z.number().int().positive(),
  description: z
    .string()
    .trim()
    .min(4, "توضیحات باید حداقل ۴ کاراکتر باشد")
    .max(200, "توضیحات حداکثر ۲۰۰ کاراکتر است"),
});

export type NewExpenseRequest = z.infer<typeof newExpenseRequestSchema>;