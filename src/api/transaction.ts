import { APIRequestContext, expect } from '@playwright/test';



// สร้าง transaction
export async function createTransaction(
  request: APIRequestContext,
  token: string,
  data: any
) {
  const response = await request.post(
    `${process.env.TRANSACTION_URL}/transactions`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      data
    }
  );

//   console.log('STATUS:', response.status());
//   console.log('URL:', `${process.env.TRANSACTION_URL}/transactions`);

  expect(response.status()).toBe(201);

  return response.json();
}



//  get transaction
export async function getMyTransactions(
    request: APIRequestContext,
    token: string
  ) {
    const response = await request.get(
      `${process.env.TRANSACTION_URL}/transactions/user/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  
    expect(response.status()).toBe(200);
  
    const body = await response.json();
  
    // สำคัญมาก 👇
    return body.data; // หรือ transactions ตามโครงสร้างจริง
  }