import { defineConfig, devices } from '@playwright/test';

/**
 * อ่านค่า environment variables จากไฟล์
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * ดูรายละเอียด config เพิ่มเติมได้ที่
 * https://playwright.dev/docs/test-configuration
 */

export default defineConfig({
  // กำหนดโฟลเดอร์ที่เก็บไฟล์ test /testDir ระบุ directory ที่เก็บไฟล์ e2e test 
  testDir: './src/tests',
  testMatch: '**/*.spec.ts', 

  /* รันไฟล์ test แบบ parallel (พร้อมกันหลายไฟล์) */
  fullyParallel: true,

  /* ถ้าอยู่ใน CI และมี test.only จะทำให้ build fail */
  forbidOnly: !!process.env.CI,

  /* ตั้งค่า retry เฉพาะตอนรันบน CI */
  retries: process.env.CI ? 2 : 0,

  /* ถ้าอยู่ใน CI ให้ใช้ worker เดียว */
  workers: process.env.CI ? 1 : undefined,

  /* กำหนด reporter ที่ใช้แสดงผลลัพธ์ */
  reporter: 'html',

  /* ค่ากลางที่ใช้ร่วมกันทุก project */
  use: {
    /* baseURL สำหรับใช้กับคำสั่ง await page.goto('') */
    // baseURL: 'http://localhost:3000',    use.baseURL หากเราจะทดสอบไซต์เดียว การระบุไว้เลยจะช่วยให้เขียน test ได้สะดวกขึ้น

  
    baseURL: 'http://oauth.alsn.ink:4001',

    /* เก็บ trace เมื่อ test fail และมีการ retry */
    trace: 'on-first-retry',
  },

  /* ตั้งค่า project สำหรับ browser หลัก ๆ */
  projects: [
    // projects ตรงนี้สามารถเลือก browser และ device ได้ โดยเราจะใช้ค่า default
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* ทดสอบในมุมมองมือถือ */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* ทดสอบบน browser จริงแบบ branded */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* รัน local dev server ก่อนเริ่ม test */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
