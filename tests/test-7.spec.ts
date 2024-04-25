import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://devaxle.thecarloancentre.co.uk/#/login');
  await expect(page).toHaveTitle(/Axle Hub | | The Car Loan Centre | | CRM/);
  await expect(page).toHaveURL('https://devaxle.thecarloancentre.co.uk/#/login');
  await page.getByPlaceholder('Enter username').fill('ausaf.ahmed@skillikz.com');
  await page.getByPlaceholder('Enter password').fill('CarLoan123');
  await page.getByRole('button', { name: 'Log In ' }).click();
  await page.waitForURL('https://devaxle.thecarloancentre.co.uk/#/');
  await expect(page).toHaveURL('https://devaxle.thecarloancentre.co.uk/#/');
});

test('test', async ({ page }) => {
  test.setTimeout(0);
  await page.locator(".fa.fa-users.fa-2x").nth(1).click();
  await page.getByRole('link', { name: ' Leads' }).click();
  await page.locator('[id="\\30 "]').click();
  await page.getByRole('button', { name: 'Take Lead' }).click();
  await page.locator(".fa.fa-users.fa-2x").nth(1).click();
  await page.getByRole('link', { name: ' My Leads' }).click();
  await page.locator('[id="\\31 "]').click();
  await page.getByRole('button', { name: 'Vehicle Suggestion' }).click();
  // if ( await page.locator('div').filter({ hasText: /^Select title×Mrs$/ }).first().inputValue() == "") 
  //   {
  //     await page.locator('div').filter({ hasText: /^Select title×Mrs$/ }).first().click();
  //   }
  if ( await page.locator('div').filter({ hasText: /^First name\*$/ }).getByRole('textbox').inputValue() == "") 
    {
      await page.locator('div').filter({ hasText: /^First name\*$/ }).getByRole('textbox').click();
    }
  
 
  await page.getByPlaceholder('Last name').click();
  await page.getByPlaceholder('Date Of Birth').click();
  await page.getByPlaceholder('Date Of Birth').click();
  await page.locator('ng-select').filter({ hasText: 'Select Maritial Status' }).getByRole('combobox').click();
  await page.getByText('Divorced').click();
  await page.locator('div:nth-child(2) > div:nth-child(2) > .form-control').click();
  await page.locator('div:nth-child(2) > div:nth-child(2) > .form-control').fill('898999');
  await page.locator('div').filter({ hasText: /^Mobile No\*$/ }).getByRole('spinbutton').click();
  await page.locator('div').filter({ hasText: /^Mobile No\*$/ }).getByRole('spinbutton').click();
  await page.locator('div').filter({ hasText: /^Mobile No\*$/ }).getByRole('spinbutton').click();
  await page.locator('div').filter({ hasText: /^Mobile No\*$/ }).getByRole('spinbutton').click();
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').click();
  await page.locator('ng-select').filter({ hasText: 'Select Employment Status' }).getByRole('textbox').click();
  await page.getByRole('option', { name: 'Self Employed' }).click();
  await page.locator('div:nth-child(3) > div:nth-child(2) > .form-control').click();
  await page.locator('div:nth-child(3) > div:nth-child(2) > .form-control').fill('2');
  await page.locator('div').filter({ hasText: /^Annual Income\*$/ }).getByRole('spinbutton').click();
  await page.locator('div').filter({ hasText: /^Annual Income\*$/ }).getByRole('spinbutton').fill('34');
  await page.locator('div').filter({ hasText: /^Monthly Payment\*$/ }).getByRole('spinbutton').click();
  await page.locator('div').filter({ hasText: /^Monthly Payment\*$/ }).getByRole('spinbutton').fill('335');
  await page.locator('div').filter({ hasText: /^Deposit Afforded\*$/ }).getByRole('spinbutton').click();
  await page.locator('div').filter({ hasText: /^Deposit Afforded\*$/ }).getByRole('spinbutton').fill('45466');
  await page.locator('div').filter({ hasText: /^First Line Of Address\*$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Town\*$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Country\*$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Postal Code\*$/ }).getByRole('textbox').click();
});