import { test, expect, Page, Locator } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5000/#/login');
  await page.getByPlaceholder('Enter username').fill('test@123');
  await page.getByPlaceholder('Enter password').fill('Windows@1');
  await page.getByRole('button', { name: 'Log In ' }).click();
  await page.goto('http://localhost:5000/#/collection/dashboard');
  test.slow();
  await page.locator('a:nth-child(5)').click();
  await page.getByRole('link', { name: ' Leads' }).click();
  test.slow();
  await page.locator('[id="\\30 "]').click();
  await page.getByRole('button', { name: 'Take Lead' }).click();
  test.slow();
  await page.locator('a:nth-child(5)').click();
  await page.getByRole('link', { name: ' My Leads' }).click();
  test.slow();
  await page.locator('[id="\\30 "]').click();
  await page.getByRole('button', { name: 'Vehicle Suggestion' }).click();
  test.slow();
  await page.locator('div:nth-child(3) > div:nth-child(2) > .form-control').click();
  await page.locator('div:nth-child(3) > div:nth-child(2) > .form-control').fill('36');
  await page.locator('div').filter({ hasText: /^Annual Income\*$/ }).getByRole('spinbutton').click();
  await page.locator('div:nth-child(3) > div:nth-child(2) > .form-control').click();
  await page.locator('div').filter({ hasText: /^Annual Income\*$/ }).click();
  await page.locator('div').filter({ hasText: /^Annual Income\*$/ }).getByRole('spinbutton').fill('130000');
  await page.locator('div').filter({ hasText: /^Deposit Afforded\*$/ }).click();
  await page.locator('div').filter({ hasText: /^Deposit Afforded\*$/ }).getByRole('spinbutton').click();
  await page.locator('div').filter({ hasText: /^Deposit Afforded\*$/ }).getByRole('spinbutton').fill('150');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('tab', { name: 'Vehicle' }).click();
  await page.locator('[id="\\30 "]').click();
  await page.getByPlaceholder('Cash Deposit').click();
  await page.getByPlaceholder('Cash Deposit').fill('1500');
  await page.getByPlaceholder('Delivery Cost').click();
  await page.getByPlaceholder('Delivery Cost').fill('200');
  await page.getByPlaceholder('Admin Fee').click();
  await page.getByPlaceholder('Admin Fee').fill('100');
  await page.getByPlaceholder('arroport').click();
  await page.getByPlaceholder('arroport').fill('50');
  await page.getByPlaceholder('warrenty').click();
  await page.getByPlaceholder('warrenty').click();
  await page.getByPlaceholder('partex').click();
  await page.getByPlaceholder('partex').fill('2');
  await page.getByPlaceholder('warrenty').click();
  await page.getByPlaceholder('warrenty').fill('3');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('combobox').click();
  // await page.getByText('Considering').click();
  // await page.getByLabel('Notes').click();
  // await page.getByLabel('Notes').fill('Testing for vehicle suggestion');
  // await page.getByRole('button', { name: 'Submit' }).click();
  // await page.locator('a:nth-child(5)').click();
  // await page.getByRole('link', { name: ' Deposits Verification' }).click();
  // await page.locator('a:nth-child(5)').click();
  // await page.getByRole('link', { name: ' Archived Leads' }).click();
  // await page.getByRole('link', { name: ' Archived Leads' }).click();
  // await page.locator('a:nth-child(5)').click();
  // await page.getByRole('link', { name: ' My Leads' }).click();
  // await page.locator('[id="\\30 "]').click();
  // await page.getByRole('button', { name: 'Vehicle Suggestion' }).click();
  // await page.getByRole('tab', { name: 'Vehicle' }).click();
  // await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('#mat-mdc-dialog-5 input[type="text"]').click();
  await page.getByLabel('Options list').getByText('Proceed').click();
  await page.getByLabel('Notes').click();
  await page.getByLabel('Notes').fill('Testing for vehicle suggestion, updated to proceed');
  // await page.getByRole('button', { name: 'Submit' }).click();
  // await page.getByRole('button', { name: 'OK' }).click();
  await page.getByPlaceholder('Date Time').click();
  await page.getByText('9', { exact: true }).click();
  await page.getByRole('button', { name: 'Set' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('a:nth-child(5)').click();
  await page.getByRole('link', { name: ' Deposits Verification' }).click();
});

test('for table', async ({ page }) => {
  await page.goto('http://localhost:5000/#/login');
  await page.getByPlaceholder('Enter username').fill('test@123');
  await page.getByPlaceholder('Enter password').fill('Windows@1');
  await page.getByRole('button', { name: 'Log In ' }).click();
  await page.goto('http://localhost:5000/#/collection/dashboard');
  test.slow();
  await page.locator('a:nth-child(5)').click();
  await page.getByRole('link', { name: ' Leads' }).click();
  test.slow();
  await page.waitForSelector("table", {state: 'attached'});
  // const table = page.locator("#adminActiveVehicleGrid1");
  const table = page.locator("#leadsGrid1");
  const headers = table.locator("thead");
  // console.log(await headers.allInnerTexts());
  // console.log(await headers.allTextContents());
  const rows = table.locator("tbody tr");
  // console.log("Rows count: "+ await rows.count());
  // const cols = rows.first().locator("td");
  // console.log("Cols count: "+ await cols.count());
  // clickGridData(rows, page, "Garage");
  // await page.close();
  for (let i = 0; i < await rows.count(); i++) {
    const row = rows.nth(i);
    const tds = row.locator("td");
    for (let j = 0; j < await tds.count(); j++) {
        if (await tds.nth(j).textContent() == "Miss Tracey Johnson") {
            console.log(await tds.nth(0).textContent());
            // await tds.last().locator("input").check();
        }
    }
  }
  // const nameMatch = rows.filter({
  //   has: page.locator("td"),
  //   hasText: "Garage",
  // })
  // await expect(nameMatch).toHaveText("span");
  // console.log(await nameMatch.locator("span"));
  // await nameMatch.locator("span").click();
});

async function clickGridData(rows: Locator, page: Page, name: string) {
  const nameMatch = rows.filter({
    has: page.locator("td"),
    hasText: name,
  })
  test.slow();
  await nameMatch.locator(".multi_lines_text ng-star-inserted").click();
}

test.beforeEach(async ({ page }) => {
  await page.goto('https://devaxle.thecarloancentre.co.uk/#/login');
  await expect(page).toHaveTitle(/Axle Hub | | The Car Loan Centre | | CRM/);
  await expect(page).toHaveURL('https://devaxle.thecarloancentre.co.uk/#/login');
  await page.getByPlaceholder('Enter username').fill('ausaf.ahmed@skillikz.com');
  await page.getByPlaceholder('Enter password').fill('CarLoan123');
  await page.getByRole('button', { name: 'Log In ' }).click();
  await page.waitForURL('https://devaxle.thecarloancentre.co.uk/#/');
  await expect(page).toHaveURL('https://devaxle.thecarloancentre.co.uk/#/');
})

test('test for sales', async ({ page }) => {

  try {
    test.setTimeout(0);
    
    // await page.locator('a:nth-child(6)').click();
    await page.locator(".fa.fa-users.fa-2x").nth(1).click();
    
    test.slow();
    
    await page.getByRole('link', { name: ' Leads' }).click();
    
    await page.locator('[id="\\30 "]').click();
    
    await page.getByRole('button', { name: 'Take Lead' }).click();
    
    await page.locator('a:nth-child(6)').click();
    
    test.slow();
    
    await page.getByRole('link', { name: ' My Leads' }).click();
    
    await page.locator('[id="\\30 "]').click();
    
    test.slow();
    
    await page.getByRole('button', { name: 'Vehicle Suggestion' }).click();

    /* const firstNameField = await page.locator('div').filter({ hasText: /^First name\*$/ }).getByRole('spinbutton');
    const firstNameValue = await firstNameField.innerText(); // Get the text inside the element

    if (!firstNameValue) {
      await firstNameField.fill('John');
    } else {
      console.log('First name field is already filled:', firstNameValue);
    } */

    const firstNameField = await page.locator('input#validationDefault01'); // Locate the input field by its ID
    const firstNameValue = await firstNameField.getAttribute('value'); // Get the value attribute

    if (!firstNameValue) {
      await firstNameField.fill('John');
    } else {
      console.log('First name field is already filled:', firstNameValue);
    }

    // if ( await page.locator('div').filter({ hasText: /^Customer title\*$/ }).getByPlaceholder('Select title')
    //     .inputValue() == "") 
    // {
      // await page.getByRole('option', { name: 'Mrs' }).click();
      // await page.getByPlaceholder('First name').click();
      // await expect(locator).toHaveValues([""]);
      
    // }

    // if ( await page.locator('div').filter({ hasText: /^First name\*$/ })
    // .inputValue() == "") 
    // {
      await page.locator('div').filter({ hasText: /^First name\*$/ }).getByRole('spinbutton').fill('John');
    // }

    // if ( await page.locator('div').filter({ hasText: /^Last name\*$/ }).getByRole('spinbutton')
    // .inputValue() == "") 
    // {
      await page.locator('div').filter({ hasText: /^Last name\*$/ }).getByRole('spinbutton').fill('Marsh');
    // }

    // if ( await page.locator('div').filter({ hasText: /^Date of birth\*$/ }).getByRole('spinbutton')
    //     .inputValue() == "") 
    // {
    //   await page.locator('div').filter({ hasText: /^Date of birth\*$/ }).getByRole('spinbutton').fill('08/09/1989');
    // }

    // if (await page.locator('div').filter({ hasText: /^Select Maritial Status$/ }).inputValue() == "")
    // {
    //   await page.getByRole('option', { name: 'Married' }).click();
    // }
    //previous-----
    // await page.locator('div').filter({ hasText: /^Select Maritial Status$/ }).nth(1).click();
    
    // await page.getByRole('option', { name: 'Married' }).click();

    if ( await page.locator('div').filter({ hasText: /^Landline Phone Number\*$/ }).getByRole('spinbutton')
    .inputValue() == "") 
    {
      await page.locator('div').filter({ hasText: /^Landline Phone Number\*$/ }).getByRole('spinbutton').fill('1234567890');
    }


    if ( await page.locator('div').filter({ hasText: /^Mobile No\*$/ }).getByRole('spinbutton')
        .inputValue() == "") 
    {
      await page.locator('div').filter({ hasText: /^Mobile No\*$/ }).getByRole('spinbutton').fill('9876543211');
    }
  
    
    // await page.locator('div').filter({ hasText: /^Mobile No\*$/ }).getByRole('spinbutton').click();
    
    // await page.locator('div').filter({ hasText: /^Mobile No\*$/ }).getByRole('spinbutton').fill('9876543211');

    if ( await page.locator('div').filter({ hasText: /^E-mail address\*$/ }).getByRole('spinbutton')
        .inputValue() == "") 
    {
      await page.locator('div').filter({ hasText: /^E-mail address\*$/ }).getByRole('spinbutton').fill('a@g.com');
    }
    
    
    await page.locator('div').filter({ hasText: /^Select Employment Status$/ }).first().click();
    
    await page.getByText('Self Employed').click();
    
    await page.locator('div:nth-child(3) > div:nth-child(2) > .form-control').click();
    
    await page.locator('div:nth-child(3) > div:nth-child(2) > .form-control').fill('36');
    
    await page.locator('div').filter({ hasText: /^Annual Income\*$/ }).getByRole('spinbutton').click();
    
    await page.locator('div').filter({ hasText: /^Annual Income\*$/ }).getByRole('spinbutton').fill('150000');
    
    await page.locator('div').filter({ hasText: /^Monthly Payment\*$/ }).getByRole('spinbutton').click();
    
    await page.locator('div').filter({ hasText: /^Monthly Payment\*$/ }).getByRole('spinbutton').fill('15000');
    
    await page.locator('div').filter({ hasText: /^Deposit Afforded\*$/ }).getByRole('spinbutton').click();
    
    await page.locator('div').filter({ hasText: /^Deposit Afforded\*$/ }).getByRole('spinbutton').fill('5000');
    
    await page.locator('div').filter({ hasText: /^Country\*$/ }).getByRole('textbox').click();
    
    await page.locator('div').filter({ hasText: /^Country\*$/ }).getByRole('textbox').fill('London');
    
    await page.getByText('Driving License').click();
    
    await page.getByText('UK Resident/If other right to reside').click();
    
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    
    await page.getByRole('button', { name: 'OK' }).click();
    
    await page.getByRole('tab', { name: 'Finance', exact: true }).click();
    
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    
    await page.getByRole('tab', { name: 'Vehicle' }).click();
    
    await page.locator('[id="\\31 "]').click();
    
    await page.getByPlaceholder('Cash Deposit').click();
    
    await page.getByPlaceholder('Cash Deposit').fill('1000');
    
    await page.getByPlaceholder('Delivery Cost').click();
    
    await page.getByPlaceholder('Delivery Cost').fill('500');
    
    await page.getByPlaceholder('Admin Fee').click();
    
    await page.getByPlaceholder('Admin Fee').fill('200');
    
    await page.getByPlaceholder('arroport').click();
    
    await page.getByPlaceholder('arroport').fill('50');
    
    await page.getByPlaceholder('warrenty').click();
    
    await page.getByPlaceholder('warrenty').fill('1');
    
    await page.getByRole('heading', { name: 'Monthly Payment : £ 485.19' }).click();
    
    await page.getByRole('button', { name: 'Update' }).click();
    
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    
    await page.getByRole('button', { name: 'Proceed' }).click();
    
    await page.getByPlaceholder('Date Time').click();
    
    await page.getByText('21', { exact: true }).click();
    
    await page.getByLabel('21 September 2023').press('Tab');
    
    await page.getByLabel('Hour', { exact: true }).press('Tab');
    
    await page.getByLabel('Minute', { exact: true }).press('Tab');
    
    await page.getByRole('button', { name: 'Cancel' }).press('Tab');
    
    await page.getByRole('button', { name: 'Set' }).press('Enter');
    
    await page.locator('#mat-mdc-dialog-3 input[type="text"]').click();
    
    await page.getByRole('option', { name: 'Proceed' }).click();
    
    await page.getByLabel('Notes').click({
    
        modifiers: ['Shift']
    
      });
    
    await page.getByLabel('Notes').click();
    
    await page.getByLabel('Notes').fill('Testing for Proceed');
    
    await page.getByRole('button', { name: 'Submit' }).click();
    
    await page.locator('a:nth-child(5)').click();
    
    await page.getByRole('link', { name: ' Deposits Verification' }).click();
  }
  catch(error) {
    console.log("Ohh Error: ", error);
  }
  
  });     // For sales process