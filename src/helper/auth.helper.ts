// import { APIRequestContext, expect } from '@playwright/test';
// // เรียกใช้ไฟล์data
// import user from '../data/user.json';



// export async function getToken(request: APIRequestContext): Promise<string> {
//   const response = await request.post('/auth/test/token', {
//     data: user
//   });

//   // เช็คว่า login สำเร็จ
//   expect(response.status()).toBe(201);

//   const body = await response.json();

//   return body.access_token;
// }



import { APIRequestContext, expect } from '@playwright/test';
import user from '../data/user.json';

export async function getToken(
  request: APIRequestContext
): Promise<string> {
  
  // เรียกใช้ API
  const response = await request.post(
    `${process.env.AUTH_URL}/auth/test/token`,
    {
      data: user,
    }
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  return body.access_token;
}