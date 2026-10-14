//Annotations
/*

1. test.skip()- PW marks the test-case as irrelevant, playwright does not run such test-case.
2. test.fail()- PW marks the test-case as failing test case, pw will execute this test case such that the test will pass with knowing it is failed
3. test.fixme()- PW marks the test-case as failing test case. Playwright does not run such test-case
4. test.only()- PW will run only those test-case which have been marked as test.only()
5. test.slow()- PW will mark the test as slow test-case and triples the timeout only for this test-case as per the set timeout that you have given globally in playwright.config.ts
6. test.step()- Provide the title of the test step inside a test-case
7. test.describe()- group the test-case and displat the title of the describe inside the report
8. there are 3 lvels of configuration global level(playwright.config.ts),step level ie basically inside the test case where we can use only timeout, 
    file level
    so for file level configuration we use below things:
        test.describe.configure()
        eg:
        
        //NOTE: "test.describe.configure({mode:'serial',retries:1})" is applicable only for the 2 cases inside the test.describe("Login Page test-cases", async ()=>{})
        
        test.describe.configure({mode:'serial',retries:1})
        
        test.describe("Login Page test-cases", async ()=>{
            
            test("Login into application using correct credentials",
                {tag:['@smoke', '@regression']}, async ()=>
                {
                    await lp.loginIntoApplication(username, password)
                    await expect(lp.homePageIdentifier).toBeVisible()
                })
        
            test("@regression Login into application using incorrect creds", async ()=>
                {
                    await lp.loginIntoApplication(username, incorrectPassword)
                    await expect(lp.errorMessage).toHaveText("Incorrect email or password.")
                })

 */