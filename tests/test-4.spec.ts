import { test, expect, Page, Locator } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://devaxle.thecarloancentre.co.uk/');
  await page.goto('https://devaxle.thecarloancentre.co.uk/#/login');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('robin.kumar@skillikz.com');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('CarLoan123');
  await page.getByRole('button', { name: 'Log In ' }).click();
  await page.locator('a:nth-child(5)').click();
  await page.getByRole('link', { name: ' Leads' }).click();
  await page.locator('[id="\\30 "]').click();
  await page.getByRole('button', { name: 'No' }).click();
  await page.locator('[id="\\31 "]').click();
  await page.getByRole('button', { name: 'Take Lead' }).click();
  await page.locator('a:nth-child(5)').click();
  await page.getByRole('link', { name: ' My Leads' }).click();
  await page.locator('a:nth-child(5)').click();
  await page.getByRole('link', { name: ' Leads' }).click();
  await page.getByLabel('Search:').click();
  await page.getByLabel('Search:').fill('david');
  await page.locator('a:nth-child(5)').click();
  await page.getByRole('link', { name: ' My Leads' }).click();
});

test('for table', async ({ page }) => {
  // await page.goto('https://devaxle.thecarloancentre.co.uk/#/login');
  await page.goto('http://localhost:5000/#/login');
  await page.getByPlaceholder('Enter username').fill('robin.kumar@skillikz.com');
  await page.getByPlaceholder('Enter password').fill('CarLoan123');
  await page.getByRole('button', { name: 'Log In ' }).click();
  test.slow();
  await page.locator('a:nth-child(3)').click();
  await page.getByRole('link', { name: ' Arrear Contracts' }).click();
  test.slow();
  await page.waitForSelector("table", {state: 'attached'});
  // const table = page.locator("#adminActiveVehicleGrid1");
  const table = page.locator("#collectionContractsGrid1");
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
        if (await tds.nth(j).textContent() == "Live Contract") {
            console.log(await tds.nth(1).textContent());
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

test('for table1', async ({ page }) => {
  await page.goto('http://localhost:5000/#/login');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('ausaf.ahmed@skillikz.com');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('CarLoan123');
  await page.getByRole('button', { name: 'Log In ' }).click();
  await page.locator('a:nth-child(3)').click();
  await page.getByRole('link', { name: ' Arrear Contracts' }).click();
  test.slow();
  await page.getByRole('gridcell', { name: 'KV16BRF' }).click();
  test.slow();
  // await page.getByText('364.19').first().dblclick();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'View/Edit Contract Detail' }).click();
  const page1 = await page1Promise;
  await page1.goto('http://localhost:5000/#/collection/contracts/contractDetails?U2FsdGVkX18Q7WuduSMiDvwwtLZbjqHmMeaJ%2FXg5V2A%3D=U2FsdGVkX1%2BqB3JU%2F1syVooVzcXyMpD1WpQ40La2gj4%3D&U2FsdGVkX1%2BtGK3DvtiqjbTsimGSr8uBKvGLRl%2B4V%2FA%3D=U2FsdGVkX19a2NnggkE9E67MYDwHlZHTHT7XOejMvlE%3D&U2FsdGVkX19pGHCHy5eMrVClnSNk2dbxGdZfgth6QqQ%3D=U2FsdGVkX1%2FqY6UIee0hB6YRLg91J729GFm6pMx5XqM%3D&U2FsdGVkX18aEB190fId66O5a9W4abDYhadJMKreyPk%3D=U2FsdGVkX1%2BArfC5amnWM2Pt%2FnKNLdSvf4f74IDOKu4%3D');
});

test('for vehicle', async ({ page }) => {
  
    await page.goto('http://localhost:5000/#/login');
    await page.getByPlaceholder('Enter username').click();
    await page.getByPlaceholder('Enter username').fill('ausaf.ahmed@skillikz.com');
    await page.getByPlaceholder('Enter password').click();
    await page.getByPlaceholder('Enter password').fill('CarLoan123');
    await page.getByRole('button', { name: 'Log In ' }).click();
    test.slow();
    await page.locator('a:nth-child(17)').click();
    await page.getByRole('link', { name: ' Vehicle List' }).click();
    test.slow();
    try{
      const page1Promise = page.waitForEvent('popup', { timeout: 10000 });
      await page.locator('[id="\\30 "]').click();
      const page1 = await page1Promise;
      await page1.goto('https://devaxle.thecarloancentre.co.uk/#/vehicle/addnewvehicle?U2FsdGVkX1%2BARbe87%2BxrT7Y1Zm0MWn4cGIgfzWD9fMc%3D=U2FsdGVkX1%2FvzGKUcLxfDaWTwMJe%2BCC8UUTOk6mxJgo%3D&U2FsdGVkX18rQqWfxpwuPOa7SVk9EkogNakz%2BLq5qqo%3D=U2FsdGVkX18DyJR3tFSks0uGuPxEJ8lll8GvpdzmK6A%3D&U2FsdGVkX18NemVYmP2a35nd1zBtnu3ldHEm6fKHeMM%3D=U2FsdGVkX1%2F3aVr4GrFc82jorZ2BxB9s98F0kMgHle4%3D&U2FsdGVkX18fQaWNCL4aZFoaSJpi8y2KsXTKZMaQqDw%3D=U2FsdGVkX19FUw3Gq7wKXMJK7EMbatzKngjO9EJx2E8%3D');
      test.slow();
    }
    catch(error) { 
      if (error instanceof Error && error.message.includes('Timeout')) {
        console.error('Timeout exceeded:', error.message);
      } else {
        console.error('An error occurred:', error);
      }
    }
    finally {
      await page.close();
    }
});

/* test('for vehicle api fail', async ({ page }) => {
  
    await page.goto('http://localhost:5000/#/login');
    await page.getByPlaceholder('Enter username').click();
    await page.getByPlaceholder('Enter username').fill('ausaf.ahmed@skillikz.com');
    await page.getByPlaceholder('Enter password').click();
    await page.getByPlaceholder('Enter password').fill('CarLoan123');
    await page.getByRole('button', { name: 'Log In ' }).click();
    test.slow();
    await page.locator('a:nth-child(17)').click();
    await page.getByRole('link', { name: ' Vehicle List' }).click();
    test.slow();
    try{
      
      const page1Promise = page.waitForEvent('popup', { timeout: 10000 });
      // await page.locator('[id="\\30 "]').click();
      const page1 = await page1Promise;
      await page1.goto('http://localhost:5000/#/vehicle/addnewvehicle?U2FsdGVkX1%2BARbe87%2BxrT7Y1Zm0MWn4cGIgfzWD9fMc%3D=U2FsdGVkX1%2FvzGKUcLxfDaWTwMJe%2BCC8UUTOk6mxJgo%3D&U2FsdGVkX18rQqWfxpwuPOa7SVk9EkogNakz%2BLq5qqo%3D=U2FsdGVkX18DyJR3tFSks0uGuPxEJ8lll8GvpdzmK6A%3D&U2FsdGVkX18NemVYmP2a35nd1zBtnu3ldHEm6fKHeMM%3D=U2FsdGVkX1%2F3aVr4GrFc82jorZ2BxB9s98F0kMgHle4%3D&U2FsdGVkX18fQaWNCL4aZFoaSJpi8y2KsXTKZMaQqDw%3D=U2FsdGVkX19FUw3Gq7wKXMJK7EMbatzKngjO9EJx2E8%3D');
      test.slow();
    }
    catch(error) { 
      if (error instanceof Error && error.message.includes('Timeout')) {
        console.error('Timeout exceeded:', error.message);
      } else {
        console.error('An error occurred:', error);
      }
    }
    finally {
      await page.close();
    }
});
 */