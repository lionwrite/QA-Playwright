import { APIRequestContext } from '@playwright/test';

export class TransactionService {

  // 1.สร้าง transaction
  static async createTransaction(
    request: APIRequestContext,
    token: string,
    data: any
  ) {

    const url = `${process.env.TRANSACTION_URL}/transactions`;

    const response = await request.post(url, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      data
    });

    const body = await response.json();

    return {
      status: response.status(),
      body
    };
  }


  // 2.get transaction
  static async getMyTransactions(
    request: APIRequestContext,
    token: string
  ) {

    const url = `${process.env.TRANSACTION_URL}/transactions/user/me`;

    const response = await request.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const body = await response.json();

    return {
      status: response.status(),
      data: body.data
    };
  }

}