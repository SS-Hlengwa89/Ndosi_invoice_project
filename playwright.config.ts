import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  /* Run tests in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally leave test.only */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Number of workers */
  workers: 1,

  /* Reporter */
  reporter: 'html',

  /* Shared settings for all tests */
  use: {
    baseURL: 'https://ndosisimplifiedautomation.vercel.app',

    /* Collect trace when retrying a failed test */
    trace: 'on-first-retry',

    /* Screenshot when test fails */
    screenshot: 'only-on-failure',

    /* Record video when test fails */
    video: 'retain-on-failure',

    /* Browser settings */
    headless: true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

   
  ],
});