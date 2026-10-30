export type Expense = {
  id: number;
  amount: number;
  store_id: number;
  description: string;
  expenses_date: string;
};

export type GetExpensesResponse = Expense[];