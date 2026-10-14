import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


let lp : any

test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    await lp.launchURL(process.env.baseURL)
})

test("Login into application using correct credentials",{tag:'@sanity'} ,async ()=>{
    
    await test.step("Login into the application",async()=>{
        await lp.loginIntoApplication(process.env.email,process.env.password)
    })

    await test.step("Validate if the login is sucess or fail",async ()=>{
        await expect(lp.homePageIdentifier).toBeVisible();
    })
    
    console.log("testcase: "+process.env.baseURL);
})


// 3 - smoke
// 3 - Regression