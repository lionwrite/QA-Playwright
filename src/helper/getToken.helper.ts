import dotenv from 'dotenv';
dotenv.config();
import { APIRequestContext, expect } from '@playwright/test';
import user from '../data/user.json';

export async function getToken(
  request: APIRequestContext
): Promise<string> {

  const AUTH_URL = process.env.AUTH_URL?.replace(/\/$/, '');

  if (!AUTH_URL) {
    throw new Error('AUTH_URL is not defined in .env');
  }

  const url = `${AUTH_URL}/auth/test/token`;

  const response = await request.post(url, {
    data: user
  });

  console.log('AUTH URL:', url);
  console.log('AUTH STATUS:', response.status());

  // ปกติ login/token endpoint จะเป็น 201
  expect(response.status()).toBe(201);

  const body = await response.json();

  // เช็คชื่อ field ให้ตรง backend
  const token = body.access_token || body.accessToken;

  expect(token).toBeTruthy();

  return token;
}