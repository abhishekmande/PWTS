import {test,expect} from '@playwright/test'

// test("Handling radio button and checkbox", async ({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')

//     const checkboxbtn=page.getByLabel('Sunday')
//     await checkboxbtn.uncheck()
//     await checkboxbtn.check()
//     await expect(checkboxbtn).toBeChecked()
    
// })

// test('user should be able to select all days', async ({ page }) => {

//     await page.goto('https://testautomationpractice.blogspot.com/');

//     const days = [
//         'Sunday',
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday'
//     ];

//     for (const day of days) {
//         const each=page.getByRole('checkbox', { name: day })
//         await each.check();
//     }

//     for (const day of days) {
//         const each=page.getByRole('checkbox', { name: day })
//         await expect(each).toBeChecked();
//     }

// })

// test("checking title", async ({page})=>{

//     await page.goto('https://testautomationpractice.blogspot.com/');
//     await page.getByText('Automation Testing Practice',{exact:true})
//     await expect(page.getByText('Automation Testing Practice',{exact:true})).toContainText('Automation')
    
// })

test("to get value from the element", async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //to get a value from a single element
    // textContent() - return the text value from the matching element even if the element is not visible(hidden) on the page
    // innerText() - return the text value from the matching element from only the visible element on the page 
    //Note: for locator with a single element the autowiting concept is applied
    const value= await page.locator("h1.title").innerText();
    console.log(value);

    // Get the text value from multiple elements

    // allTextContents()
    // allInnerTexts()
    // Note: Whenever you write a locator which is matching 
    // with multiple element on the webpage, the auto waiting 
    // concept doesnot apply for those locators but for locator with a single element the autowiting concept is applied
    const value2=await page.locator("h2.title").allInnerTexts() 
    console.log(value2)
})
