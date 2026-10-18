"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type DeleteComponentProps = {
  onDeleteAction: () => Promise<void>;
};

export default function DeleteComponent({
  onDeleteAction,
}: DeleteComponentProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete(e: React.MouseEvent) {
    // stops the click from triggering a parent <Link>
    e.preventDefault();
    e.stopPropagation();

    try {
      setLoading(true);
      await onDeleteAction();
      router.refresh();
    } catch (err) {
      console.error(err);
      alert("Could not delete. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="text-red-600 border border-red-300 rounded-md px-3 py-1 text-sm hover:bg-red-50 disabled:opacity-50 cursor-pointer"
    >
      {loading ? (
        "Deleting..."
      ) : (
        <Image src="/trash.svg" alt="" width={16} height={16} />
      )}
    </button>
  );
}
