"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { loginSchema } from "../schema/loginSchema";
import FormLayout from "./FormLayout";

export default function LoginContent() {
  
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // stop the page from reloading

    const formData = new FormData(e.currentTarget);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    const result = loginSchema.safeParse(data);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        username: fieldErrors.username?.[0],
        password: fieldErrors.password?.[0],
      });
      return;
    }

    setErrors({});
    console.log(result.data); // { username: "...", password: "..." }
  }

  return (
    <FormLayout>
      <h1 className="text-xl font-bold text-center text-gray-800 my-5">
        به سایت ما خوش آمدید.
      </h1>
      <form onSubmit={handleSubmit} className="w-10/12 flex flex-col gap-3">
        <Input
          id="username"
          name="username"
          label="نام کاربری"
          type="text"
          error={errors.username}
        />
        <Input
          id="password"
          name="password"
          label="رمز عبور"
          type="password"
          error={errors.password}
        />
        <Button type="submit">ورود</Button>
      </form>
    </FormLayout>
  );
}