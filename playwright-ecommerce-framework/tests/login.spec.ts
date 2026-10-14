import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

// test.describe('Login tests', ()=>{


//     test.beforeEach(async ({page})=>{
//         await page.goto("https://www.saucedemo.com/");
//     });

//     test("User should login with valid username and valid password", async ({page})=>{

//         await page.locator('[data-test="username"]').fill("standard_user")
//         await page.locator('[data-test="password"]').fill("secret_sauce")
//         await page.locator('[data-test="login-button"]').click() //[attriute='value'] called as attribute locator
//         await expect(page).toHaveURL(/inventory/)
//     });

//     test('user should not login with invalid password', async ({page})=>{

//         await page.locator('[data-test="username"]').fill('standard_user')
//         await page.locator('[data-test="password"]').fill('abk')
//         await page.locator('[data-test="login-button"]').click()
//         const errorMessage=page.locator('[data-test="error"]')
//         await expect(errorMessage).toBeVisible()
//         await expect(errorMessage).toContainText('Username and password do not match')
//     });

//     test('user should not login with invalid username and password', async ({page})=>{

//         await page.locator('[data-test="username"]').fill('abk')
//         await page.locator('[data-test="password"]').fill('123')
//         await page.locator('[data-test="login-button"]').click()
//         const errorMessage= page.locator('[data-test="error"]')
//         await expect(errorMessage).toBeVisible()
//         await expect(errorMessage).toContainText('Username and password do not match')
//     });

//     test('locked out user should not be able to login', async ({ page }) => {

//         await page.locator('[data-test="username"]').fill('locked_out_user');
//         await page.locator('[data-test="password"]').fill('secret_sauce');
//         await page.locator('[data-test="login-button"]').click();
//         const errorMessage = page.locator('[data-test="error"]');
//         await expect(errorMessage).toBeVisible();
//         await expect(errorMessage).toContainText('Sorry, this user has been locked out');
//     });

//     test('user should see error when username is empty', async ({ page }) => {

//         await page.locator('[data-test="password"]').fill('secret_sauce');
//         await page.locator('[data-test="login-button"]').click();
//         const errorMessage = page.locator('[data-test="error"]');
//         await expect(errorMessage).toBeVisible();
//         await expect(errorMessage).toHaveText('Epic sadface: Username is required');
//     });

//     test('user should see error when password is empty', async ({ page }) => {

//         await page.locator('[data-test="username"]').fill('standard_user');
//         await page.locator('[data-test="login-button"]').click();
//         const errorMessage = page.locator('[data-test="error"]');
//         await expect(errorMessage).toBeVisible();
//         await expect(errorMessage).toHaveText('Epic sadface: Password is required');
//     });

//     test('user should see error when username and password are empty', async ({ page }) => {

//         await page.locator('[data-test="login-button"]').click();
//         const errorMessage = page.locator('[data-test="error"]');
//         await expect(errorMessage).toBeVisible();
//         await expect(errorMessage).toHaveText('Epic sadface: Username is required');
//     });

//     test("Invalid username and password", async ({page})=>{

//         await page.locator('[data-test="username"]').fill("@");
//         await page.locator('[data-test="password"]').fill('1');
//         await page.locator('[data-test="login-button"]').click();
//         const errorMessage=page.locator('[data-test="error"]');
//         await expect (errorMessage).toBeVisible();
//         await expect(errorMessage).toContainText('Username and password do not match')

//     });
// });

test.describe("SauceDemo Login Tests",()=>{

    let loginPage:LoginPage;

    test.beforeEach(async ({page})=>{
        loginPage=new LoginPage(page);
        await loginPage.goto();
    });

    test("valid Username and valid Passowrd",async ()=>{
    await loginPage.login('standard_user','secret_sauce');
    await expect(loginPage.page).toHaveURL('/inventory/');
    });

    test('valid username and invalid password', async () => {
    await loginPage.login('standard_user','wrong_password');
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
    });

  test('invalid username and invalid password', async () => {
    await loginPage.login('invalid_user','wrong_password');
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
  });

  test('locked-out user', async () => {
    await loginPage.login('locked_out_user','secret_sauce');
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out');
  });

  test('empty username', async () => {
    await loginPage.login('','secret_sauce');
    await expect(loginPage.errorMessage).toContainText('Username is required');
  });

  test('empty password', async () => {
    await loginPage.login('standard_user','');
    await expect(loginPage.errorMessage).toContainText('Password is required');
  });

  test('empty username and empty password', async () => {
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toContainText('Username is required');
  });

  test('Invalid username and invalid password',async ()=>{
    await loginPage.login('@','1')
    await expect(loginPage.errorMessage).toContainText('Username and password do not match')
  })

})