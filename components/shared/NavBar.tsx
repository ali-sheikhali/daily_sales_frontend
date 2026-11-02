import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4">
      <div className="w-10/12 mx-auto">
      <Link href="/login" className="text-lg font-bold">My App</Link>
        </div>  
    </div>
  );
}
