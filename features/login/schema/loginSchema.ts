import { z } from "zod";

export const loginSchema = z.object({
  username: z .string() .regex(/^09\d{9}$/, "شماره موبایل باید با 09 شروع شود و ۱۱ رقم باشد"),  
  password: z.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
});

export type LoginData = z.infer<typeof loginSchema>;