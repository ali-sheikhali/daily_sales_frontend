"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { registerSchema } from "../schemas";
import toast from "react-hot-toast";
import { registerManagerAction } from "../actions";

export default function StoreSettingsForm() {
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
    password_confirm?: string;
  }>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      password_confirm: formData.get("password_confirm"),
    };
    const result = registerSchema.safeParse(data);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        username: fieldErrors.username?.[0],
        password: fieldErrors.password?.[0],
        password_confirm: fieldErrors.password_confirm?.[0],
      });
      return;
    }

    console.log(result.data);

    setErrors({});

    try {
        await registerManagerAction(result.data);
        toast.success("مدیر با موفقیت ثبت شد");
    } catch (err) {
      toast.error((err as Error).message || "خطا در ورود به سیستم");
    }
  }
  return (
    <div className="w-10/12 mx-auto my-5">
      <form
        onSubmit={handleSubmit}
        className="w-10/12 md:w-8/12 mx-auto flex flex-col gap-3"
      >
        <Input
          id="username"
          name="username"
          label="نام کاربری"
          type="text"
          error={errors.username}
          placeholder="09xxxxxxxxx"
        />
        <Input
          id="password"
          name="password"
          label="رمز عبور"
          type="password"
          error={errors.password}
        />
        <Input
          id="password_confirm"
          name="password_confirm"
          label="رمز عبور"
          type="password"
          error={errors.password_confirm}
        />
        <Button type="submit">ورود</Button>
      </form>
    </div>
  );
}
