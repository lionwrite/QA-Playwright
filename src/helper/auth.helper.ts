import { APIRequestContext, expect } from '@playwright/test';



export async function getToken(request: APIRequestContext): Promise<string> {
  const response = await request.post('/auth/test/token', {
    data: {
      email: 'singtokien001@gmail.com',
      role: 'USER',
      is_premium: false,
      deviceName: 'QA Testing Device',
      qaSecret: 'Art.exe_has_stopped_working_again#9Kx2!Lp7SW#ngB|bi.rBzs+!#ckO7>DS0jer07NOo]&YQ&D/}06F3Mnad'
    }
  });

  // เช็คว่า login สำเร็จ
  expect(response.status()).toBe(201);

  const body = await response.json();

  return body.access_token;
}
