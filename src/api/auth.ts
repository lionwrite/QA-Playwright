import { APIRequestContext } from '@playwright/test';




// ไม่น่าจะได้ใช้ ดึง token จาก helper เอา
export async function loginApi(
  request: APIRequestContext,
  email: string,
  password: string
) {
  return await request.post('/auth/login', {
    data: {
      email,
      password,
    },
  });
}