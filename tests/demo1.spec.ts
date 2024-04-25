import {test, expect} from '@playwright/test'

test.beforeEach(async ({page})=> {
    await page.goto("https://devaxle.thecarloancentre.co.uk/#/login");
    await expect(page).toHaveTitle(/Axle Hub | | The Car Loan Centre | | CRM /);
    await page.getByPlaceholder("Enter username").click();
    await page.getByPlaceholder("Enter username").fill("ausaf.ahmed@skillikz.com");
    await page.getByPlaceholder("Enter password").click();
    await page.getByPlaceholder("Enter password").fill("CarLoan123");
    await page.getByRole('button', {name: 'Log In'}).click();
    await page.waitForURL("https://devaxle.thecarloancentre.co.uk/#/");
});

test('sales process', async({page})=> {
    test.setTimeout(0);
    await page.locator(".fa.fa-users.fa-2x").nth(1).click();
    await page.locator("//a[normalize-space()='Leads']").click();
    await page.locator("//span[normalize-space()='Simon Bruce Bell']").dblclick();
    await page.locator("//button[normalize-space()='Take Lead']").click();
    await page.locator(".fa.fa-users.fa-2x").nth(1).click();
    await page.locator("//a[normalize-space()='My Leads']").click();
});

// test.afterAll(async ({page})=> {
//     await page.close();
// })