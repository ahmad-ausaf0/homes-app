import { test, expect } from '@playwright/test';

 

test('for login', async ({ page }) => {
    try{
        await page.goto('https://skillikz.kredily.com/login/?next=/company/dashboard/');
        test.slow();
        await page.locator('#signInFormEmailAddress').fill('8076366564');
        await page.locator('#signInFormPassword').fill('ansar@Max3');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await expect(page).toHaveTitle(/Company Dashboard/);
        await expect(page).toHaveURL('https://skillikz.kredily.com/company/dashboard/');

    } catch(error) {
        console.log('Got an Error: ', error);
    }

});

test('do login', async ({ page }) => {
    await page.goto("https://commitquality.com/login");
    if (await page.locator('[data-testid="username-textbox"]').inputValue() == "") {
        await page.locator('[data-testid="username-textbox"]').fill("test");
    }
    await page.locator('[data-testid="password-textbox"]').fill("test");
    await page.locator('[data-testid="login-button"]').click();
  
    await expect(page.locator('[data-testid="navbar-logout"]')).toBeVisible();
    // Save the state of the webpage - meaning we are logged in
    await page.context().storageState({ path: "./LoginAuthCQ.json" });
    // Dont forget your clean up :)
    // await browser.close();
  });
  
//Error: test for sales
/* [chromium] › test-6.spec.ts:133:5 › test for sales
Ohh Error:  locator.fill: Target closed
=========================== logs ===========================
waiting for locator('div').filter({ hasText: /^Mobile No\*$/ }).getByRole('spinbutton')
  locator resolved to <input readonly required="" type="number" _ngcontent-gg…/>
elementHandle.fill("9876543211")
  waiting for element to be visible, enabled and editable
    element is not editable - waiting...
============================================================
    at d:\Angular-Projects\One\codelabs-homes-app-start\tests\test-6.spec.ts:173:92 {
  name: 'Error'
}
  1 passed (3.9m) */

test('manual sales process',async ({page}) => {
  try{
  test.setTimeout(0);
  await page.goto("https://devaxle.thecarloancentre.co.uk/#/login");
  await page.locator("//input[@id='username']").fill("ausaf.ahmed@skillikz.com");
  await page.locator("//input[@id='userpassword']").fill("CarLoan123");
  await page.locator("//button[normalize-space()='Log In']").click();
  

  await page.locator(".fa.fa-users.fa-2x").nth(1).click();//i[@class='fa fa-users fa-2x'])[2]
  await page.locator("//a[normalize-space()='Leads']").click();
  await page.locator("(//i[@class='far fa-edit text-info mr-1 ml-2'])[2]").click();
  await page.locator("//button[normalize-space()='No']").click();
  // await page.locator(".far.fa-edit.text-info.mr-1.ml-2").nth(1).click();
  // await page.locator("//button[normalize-space()='Take Lead']").click();
  await page.locator("//span[normalize-space()='Parveen Ali']").dblclick();
  await page.locator("//button[normalize-space()='Take Lead']").click();
  await page.locator(".fa.fa-users.fa-2x").nth(1).click();
  await page.locator("//a[normalize-space()='My Leads']").click();
  await page.locator("//span[normalize-space()='Parveen Ali']").dblclick();
  // await page.locator("//button[normalize-space()='Vehicle Suggestion']").click();
  // await page.locator("//button[normalize-space()='Assign Lead']").click();
  await page.locator("//button[normalize-space()='Release Lead']").click();
  // await page.locator(" //button[normalize-space()='×']']").click();



  // await page.locator("//img[@alt='profile-user']").dblclick();
  // await page.locator("//a[normalize-space()='Logout']").click();  
  }
  catch(err) {
    console.log("An Error Occured: ", err);
    
  }
})