import { test, expect } from '@playwright/test';
import { getToken } from '../../helper/getToken.helper';
import { createTransaction, getMyTransactions } from '../../api/transaction';
import transaction from '../../data/transaction.json';
import user from '../../data/user.json';


// import * as transactionApi from '../../api/transaction';
// console.log("testss",transactionApi);

// console.log('createTransaction =', createTransaction);


test.describe('@e2e API E2E - Add Income Flow', () => {

  test('@e2e User can add income and verify it exists', async ({ request }) => {
    
    // เรียกใช้ getToken เอา token
    const token = await getToken(request, user);
    console.log("token = ",token)

    //  ใช้ transaction จากไฟล์ JSON
    const createdTransaction = await createTransaction(
      request,
      token,
      transaction
    );

    console.log("transaction = ",createdTransaction)

    // เก็บ id transaction ที่เพิ่มเมื่อกี้
    const createdId = createdTransaction.id;

    const transactionList = await getMyTransactions(request, token);

    const found = transactionList.find(
      (item: any) => item.id === createdId
    );

    expect(found).toBeTruthy();
  });

});