import {test, expect} from "@playwright/test";

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
});


test.beforeEach(async ({page})=> {
    await page.goto("https://devaxle.thecarloancentre.co.uk/#/login");
    // await expect(page).toHaveTitle(/Axle Hub | | The Car Loan Centre | | CRM /);
    // await expect(page).toHaveURL("https://devaxle.thecarloancentre.co.uk/#/login");
    await page.getByPlaceholder("Enter username").click();
    await page.getByPlaceholder("Enter username").fill("ausaf.ahmed@skillikz.com");
    await page.getByPlaceholder("Enter password").fill("CarLoan123");
    await page.getByRole("button", {name: "Log In"}).click();
    await page.waitForURL("https://devaxle.thecarloancentre.co.uk/#/");
});

test('sales', async({page})=>{
    await page.locator(".fa.fa-users.fa-2x").nth(1).click();
    await page.getByRole('link', {name: 'Leads'}).click();
    await page.locator("//span[normalize-space()='Simon Bruce Bell']").dblclick();
    await page.getByText('Ruby Taylor').dblclick();
})

const fs = require('fs');
const ExcelJS = require('exceljs');
test('for table data store1', async ({ page }) => {
  try {
    test.setTimeout(0);
    await page.locator(".fa.fa-users.fa-2x").nth(1).click();
    await page.locator("//a[normalize-space()='My Leads']").click();
    await page.waitForSelector("table", { state: 'attached' });
    const table = page.locator("#myLeadsGrid1");
    const headers = table.locator("thead");
    const rows = table.locator("tbody tr");

    const workbook = new ExcelJS.Workbook(); // Create a new Excel workbook
    const worksheet = workbook.addWorksheet('My Leads'); // Add a worksheet

    const headerText = await headers.locator('th').allTextContents();
    // const rowData = [];

    headerText.forEach((header, index) => {
      // Write headers to the first row of the worksheet
      worksheet.getCell(1, index + 1).value = header;
    });

    const rowData: string[][] = [];

for (let i = 0; i < await rows.count(); i++) {
  const row = rows.nth(i);
  const tds = row.locator("td");

  const rowValues = await tds.allTextContents();
  rowData.push(rowValues);

  rowValues.forEach((value, index) => {
    // Write data to the worksheet
    worksheet.getCell(i + 2, index + 1).value = value;
  });
}


    const filePath = 'tableData.xlsx';

    // Save the workbook to the specified file
    await workbook.xlsx.writeFile(filePath);

    console.log(`Data exported to ${filePath}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
});

