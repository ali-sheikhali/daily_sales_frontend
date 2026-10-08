import Input from "@/components/ui/Input";
import FormLayout from "./FormLayout";
import Button from "@/components/ui/Button";

export default function LoginContent() {
  return (
    <FormLayout>
      <h1 className="text-xl font-bold text-center text-gray-800 my-5">
        به سایت ما خوش آمدید.
      </h1>
      <div className="w-10/12 flex flex-col gap-3">
        <Input label="نام کاربری" type="text" />
        <Input label="رمز عبور" type="password" />
        <Button>ورود</Button>
      </div>
    </FormLayout>
  );
}
