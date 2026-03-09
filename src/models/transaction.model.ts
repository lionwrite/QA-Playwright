// ===== Request =====
export interface CreateTransactionPayload {
    category_id: string;
    amount: number;
    transaction_type: 'income' | 'expense' | 'transfer';
    transaction_description: string;
    transaction_date: string;
  }
  
  // ===== Response =====
  export interface TransactionResponse {
    transaction_id: string;
    user_id: string;
    amount: number;
    transaction_type: 'income' | 'expense' | 'transfer';
    transaction_description: string;
    transaction_date: string;
    create_at: string;
    update_at: string;
  }
  
  // ===== List Response =====
  export interface GetMyTransactionResponse {
    data: TransactionResponse[];
  }