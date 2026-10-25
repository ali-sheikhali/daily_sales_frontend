import { z } from "zod";

export const registerSchema = z
  .object({
    username: z
      .string()
      .regex(/^09\d{9}$/, "شماره موبایل باید با 09 شروع شود و ۱۱ رقم باشد"),
    password: z.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
    password_confirm: z
      .string()
      .min(8, "تکرار رمز عبور باید حداقل ۸ کاراکتر باشد"),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: "رمز عبور و تکرار آن باید یکسان باشند",
    path: ["password_confirm"],
  });

export type RegisterData = z.infer<typeof registerSchema>;

export type SaleType = {
  amount: number;
  id: number;
  sales_date: string;
  store_id: number;
};

export type AllSalesType = SaleType[];
