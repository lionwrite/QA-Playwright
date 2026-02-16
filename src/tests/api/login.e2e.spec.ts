import { test, expect, request } from '@playwright/test';

test('Login via test token API', async ({ request }) => {

  const response = await request.post('/auth/test/token', {
    data: 
    {
        email: "singtokien001@gmail.com",
        role: "USER",
        is_premium: false,
        deviceName: "QA Testing Device",
        qaSecret: "Art.exe_has_stopped_working_again#9Kx2!Lp7SW#ngB|bi.rBzs+!#ckO7>DS0jer07NOo]&YQ&D/}06F3Mnad"
      }
  });

  // เช็ค status code
  expect(response.status()).toBe(200);

  const body = await response.json();

  // เช็คว่ามี accessToken กลับมา
  expect(body).toHaveProperty('accessToken');

  console.log('Token:', body.accessToken);
});
