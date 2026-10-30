import { GetExpensesResponse } from "../schemas";

type ExpensesTableProps = {
  expenses: GetExpensesResponse;
};

export default function ExpensesTable({ expenses }: ExpensesTableProps) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="mx-auto w-10/12 space-y-4 mt-5">
      <div className="flex gap-4">
        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Total expenses</p>
          <p className="text-2xl font-bold">{total}</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Number of expenses</p>
          <p className="text-2xl font-bold">{expenses.length}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Store</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                  No expenses found.
                </td>
              </tr>
            ) : (
              expenses.map((expense) => (
                <tr key={expense.id} className="border-t">
                  <td className="px-4 py-3">{expense.id}</td>
                  <td className="px-4 py-3">{expense.store_id}</td>
                  <td className="px-4 py-3">{expense.amount}</td>
                  <td className="px-4 py-3">{expense.description}</td>
                  <td className="px-4 py-3">
                    {new Date(expense.expenses_date).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}