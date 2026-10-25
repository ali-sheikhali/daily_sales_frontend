import Link from "next/link";

export default function ForbiddenPage() {
  return (
    <div>
      <h1>403 - Access denied</h1>
      <p>You do not have access to this store.</p>
      <Link href="/">Go back</Link>
    </div>
  );
}