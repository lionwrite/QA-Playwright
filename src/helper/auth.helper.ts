import { APIRequestContext, expect } from '@playwright/test';
// เรียกใช้ไฟล์data
import user from '../data/user.json';



export async function getToken(request: APIRequestContext): Promise<string> {
  const response = await request.post('/auth/test/token', {
    data: user
  });

  // เช็คว่า login สำเร็จ
  expect(response.status()).toBe(201);

  const body = await response.json();

  return body.access_token;
}
