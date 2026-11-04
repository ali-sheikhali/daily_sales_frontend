import "../globals.css";
import { Toaster } from "react-hot-toast";

export default function LoginPageLayout({ children }: { children: React.ReactNode }) {
  return (
   <html
      lang="fa"
      dir="rtl"
    >
      <body className="min-h-full flex flex-col">
       
        {children}
        <Toaster
          position="top-left"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
          }}
        />
      </body>
    </html>
  );
}
