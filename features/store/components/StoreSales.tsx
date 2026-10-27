import Link from "next/link";
import { AllSalesType } from "../schemas";
import AddNewSales from "./AddNewSales";

export default function StoreSales({ sales, id }: { sales: AllSalesType, id :number }) {
  // 1. Add all amounts together
  const total = sales.reduce((sum, sale) => sum + sale.amount, 0);

  // 2. If there are no sales, show a friendly message
  if (sales.length === 0) {
    return (
      <div className="rounded-lg border p-6 text-center text-gray-500">
        No sales yet for this store.
      </div>
    );
  }

  return (
    <div className="space-y-4 w-10/12 mx-auto">
      {/* Summary */}
      <div className="flex gap-4">
        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Total sales</p>
          <p className="text-2xl font-bold">{total.toLocaleString("en-US")}</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Number of sales</p>
          <p className="text-2xl font-bold">{sales.length}</p>
        </div>
      </div>
      <div className="flex justify-between ">
        <AddNewSales id={id} />
        <Link
          href={`/stores/${id}/expenses`}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          مخارج جدید
        </Link>
      </div>
      {/* Table */}
      <div className="overflow-hidden rounded-lg border">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id} className="border-t">
                <td className="px-4 py-3">{sale.id}</td>
                <td className="px-4 py-3">
                  {sale.amount.toLocaleString("en-US")}
                </td>
                <td className="px-4 py-3">
                  {new Date(sale.sales_date).toLocaleString("en-GB", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}