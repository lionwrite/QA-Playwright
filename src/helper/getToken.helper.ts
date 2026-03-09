import dotenv from 'dotenv';
dotenv.config();
import { APIRequestContext, expect } from '@playwright/test';

export async function getToken(
  request: APIRequestContext,
  userData: any   //  รับ user จากไฟล์ test

): Promise<string> {

  const AUTH_URL = process.env.AUTH_URL?.replace(/\/$/, '');
  const url = `${AUTH_URL}/auth/test/token`;

  const response = await request.post(url, {
    data: userData
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  const token = body.access_token || body.accessToken;

  expect(token).toBeTruthy();

  return token;
}