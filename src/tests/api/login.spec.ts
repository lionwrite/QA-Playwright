// import { test, expect } from '@playwright/test';

// test('Login via test token API', async ({ request }) => {
//   const response = await request.post('/auth/test/token', {
//     data: {
//       email: 'singtokien001@gmail.com',
//       role: 'USER',
//       is_premium: false,
//       deviceName: 'QA Testing Device',
//       qaSecret: ''
//     }
//   });

//   // เช็ค status code
//   expect(response.status()).toBe(201);

//   const body = await response.json();

//   // เช็คว่ามี access_token
//   expect(body).toHaveProperty('access_token');

//   console.log('Access Token:', body.access_token);
// });






// ver 2
import { test, expect } from '@playwright/test';
import { getToken } from '../../helper/auth.helper';



test('Login via test token API', async ({ request }) => {

  // ตัวเเปลเก็บค่า token
  const token = await getToken(request);

  expect(token).toBeTruthy();
// print token ออกม่
  console.log('Access Token:', token);


});
