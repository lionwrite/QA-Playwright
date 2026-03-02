import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';

// ✅ บังคับโหลด .env จาก root โปรเจกต์
dotenv.config({ path: path.resolve(__dirname, '.env') });

// 🔎 debug ดูว่ามันโหลดจริงไหม (ลบออกทีหลังได้)
console.log('AUTH_URL:', process.env.AUTH_URL);
console.log('TRANSACTION_URL:', process.env.TRANSACTION_URL);

export default defineConfig({
  testDir: './src/tests',
  testMatch: '**/*.spec.ts',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});