// import { test, expect } from '@playwright/test';
// // import { getToken } from '../../helper/getToken.helper';
// import { AuthService } from '../../helper/getToken.helper';
// import { createTransaction, getMyTransactions } from '../../api/transaction';
// import transaction from '../../data/transaction.json';
// import user from '../../data/user.json';



// test.describe('@e2e API E2E - Add Income Flow', () => {

//   test('@e2e User can add income and verify it exists', async ({ request }) => {
    
//     // เรียกใช้ getToken เอา token
//     // const token = await getToken(request, user);
//     const token = await AuthService.getToken(request, user);
//     console.log("token = ",token)

//     //  ใช้ transaction จากไฟล์ JSON
//     const createdTransaction = await createTransaction(
//       request,
//       token,
//       transaction
//     );

//     console.log("transaction = ",createdTransaction)

//     // เก็บ id transaction ที่เพิ่มเมื่อกี้
//     const createdId = createdTransaction.id;

//     const transactionList = await getMyTransactions(request, token);

//     const found = transactionList.find(
//       (item: any) => item.id === createdId
//     );

//     expect(found).toBeTruthy();
//   });

// });



import { test, expect } from '@playwright/test';
import { AuthService } from '../../helper/getToken.helper';
import { TransactionService } from '../../api/transaction';

import transaction from '../../data/transaction.json';
import user from '../../data/user.json';

import { UserPayload } from '../../models/user.model';
import { TransactionResponse } from '../../models/transaction.model';

test.describe('@e2e API E2E - Add Income Flow', () => {

  test('@e2e User can add income and verify it exists', async ({ request }) => {

    let token: string;
    let createdId: string;
    let transactionList: TransactionResponse[];

    // Get token
    await test.step('1: Get authentication token', async () => {

      const auth = await AuthService.getToken(request, user as UserPayload);

      expect(auth.status).toBe(201);
      expect(auth.token).toBeTruthy();

      token = auth.token!;
    });

    // Create transaction
    await test.step('2: add transaction (income)', async () => {

      const result = await TransactionService.createTransaction(
        request,
        token,
        transaction
      );

      expect(result.status).toBe(201);
      expect(result.body.transaction_id).toBeTruthy();

      createdId = result.body.transaction_id;
    });

    // Get transactions
    await test.step('3: Get transactions to verify the transaction was added', async () => {

      const result = await TransactionService.getMyTransactions(
        request,
        token
      );

      expect(result.status).toBe(200);

      transactionList = result.data;

      const found = transactionList.find(
        (item: TransactionResponse) => item.transaction_id === createdId
      );

      expect(found).toBeTruthy();
    });

  });

});