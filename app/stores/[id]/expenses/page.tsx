import { getExpensesAction } from "@/features/expenses/actions";
import ExpensesTable from "@/features/expenses/components/ExpensesTable";
import { GetExpensesResponse } from "@/features/expenses/schemas";
import { getAccessToken } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ExpensesPage(params: {
  params: Promise<{ id: string }>;
}) {
  const token = await getAccessToken();

  if (!token) {
    redirect("/login");
  }

  const { id } = await params.params;

  let expenses: GetExpensesResponse;

  try {
    expenses = await getExpensesAction(parseInt(id));
  } catch (e: unknown) {
    return (
      <div>
        {e instanceof Error ? e.message : "An unexpected error occurred."}
      </div>
    );
  }

  return (
    <div>
      <ExpensesTable expenses={expenses} />
    </div>
  );
}
