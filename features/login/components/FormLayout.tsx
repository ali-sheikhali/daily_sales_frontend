import type { ReactNode } from "react";

export default function FormLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-dvh items-center justify-center p-4">
      <div
        className="flex w-full max-w-md flex-col items-center justify-center gap-4
           rounded-lg border border-gray-300 px-4 shadow-md py-10"
      >
        {children}
      </div>
    </main>
  );
}