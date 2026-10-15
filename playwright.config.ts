import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

//My Code
// dotenv - is a library which helps us in loading the data from .env file
/*process.env  - Is a global object, which will have an understanding of which all are the different enviornment variables that are avaialable inside the system
and thus reads data from dotenv*/
//basically the dotenv library will load data from "prod.env or qa.env or stg.env" into process.env

//the "config()" of dotenv, helps in auto-loading dotenv file content into process.env,
// path.resolve() and path.join() do the same thing

const ENV_NAME = process.env.ENV || 'prod'

dotenv.config({path: path.join(__dirname,"testdata",`${ENV_NAME}.env`)})
//dotenv.config({path: path.join(__dirname,"testdata","prod.env")})
console.log("processconfig: "+process.env.baseURL);
console.log(ENV_NAME);
console.log(process.env.ENV);

// On powershell terminal use:
// $env:ENV="stg"; npx playwright test  - To run all the test case by taking the data from stg.env file

// On Command Prompt or Bash:
// set ENV=qa&& npx playwright test - To run all the test case by taking the data from qa.env



//end of My Code

/**
 * See https://playwright.dev/docs/test-configuration.
 */

/*
  1. fullyParallel=true and workers=1 - Test case will run in sequential order
  2. fullyParallel=false and workers=1 - Test case will run in sequential order
  3. fullyParallel=false and workers>1 - Test File will be executed in parallel mode but not Test-cases inside each Test File, Test cases inside each Test File will run in sequential order
  such that 3 test-file having 2 test-case each, so 3 test-file running at same time and 1st test-case of each test-file runs at a same time by worker and then 2nd test-case of each test-file runs

  4. fullyParallel=true and workers>1 - Test case inside each Test File will run in parallel but not the Test File, Test File will run in Sequential Order, 
  ie suppose 3test-file with 2test-cases in each test file, then 1st test-file all 2test-case will run at same time and then 2nd test-file all 2test-case run at same time 
*/

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    screenshot:'on',
    video:'on',
    headless:true
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
