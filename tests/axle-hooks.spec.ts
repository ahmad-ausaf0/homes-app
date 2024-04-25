import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://devaxle.thecarloancentre.co.uk/#/login');
  // test.slow();
  await expect(page).toHaveTitle(/Axle Hub | | The Car Loan Centre | | CRM/);
  await expect(page).toHaveURL('https://devaxle.thecarloancentre.co.uk/#/login');
  await page.getByPlaceholder('Enter username').fill('ausaf.ahmed@skillikz.com');
  await page.getByPlaceholder('Enter password').fill('CarLoan123');
  await page.getByRole('button', { name: 'Log In ' }).click();
  await page.waitForURL('https://devaxle.thecarloancentre.co.uk/#/');
  await expect(page).toHaveURL('https://devaxle.thecarloancentre.co.uk/#/');
})

test.afterAll(async ({ page }) => {
  await page.close();
})

test('test for garage', async ({ page }) => {
  test.slow();
  await page.locator('a:nth-child(18)').click();
  await page.getByRole('link', { name: ' Vehicle List' }).click();
  test.slow();
  const page1Promise = page.waitForEvent('popup');
    await page.locator('[id="\\30 "]').click();
    const page1 = await page1Promise;
  await page1.goto('https://devaxle.thecarloancentre.co.uk/#/vehicle/addnewvehicle?U2FsdGVkX1%2BARbe87%2BxrT7Y1Zm0MWn4cGIgfzWD9fMc%3D=U2FsdGVkX1%2FvzGKUcLxfDaWTwMJe%2BCC8UUTOk6mxJgo%3D&U2FsdGVkX18rQqWfxpwuPOa7SVk9EkogNakz%2BLq5qqo%3D=U2FsdGVkX18DyJR3tFSks0uGuPxEJ8lll8GvpdzmK6A%3D&U2FsdGVkX18NemVYmP2a35nd1zBtnu3ldHEm6fKHeMM%3D=U2FsdGVkX1%2F3aVr4GrFc82jorZ2BxB9s98F0kMgHle4%3D&U2FsdGVkX18fQaWNCL4aZFoaSJpi8y2KsXTKZMaQqDw%3D=U2FsdGVkX19FUw3Gq7wKXMJK7EMbatzKngjO9EJx2E8%3D');
  test.slow();
  await page1.getByText('Garage Details', { exact: true }).click();
  await page1.close();
  });

test('axleHub logout', async ({ page }) => {
  test.slow();
  await page.getByRole('button', { name: 'Robin Kumarprofile-user ' }).click();
  await page.getByRole('button', { name: 'Robin Kumarprofile-user ' }).click();
  const logo = await page.getByRole('link', { name: 'logo-small' });
  await expect(logo).toBeVisible();
  await page.getByRole('link', { name: '= Logout' }).click();
  await page.waitForURL('https://devaxle.thecarloancentre.co.uk/#/login');
  await expect(page).toHaveURL('https://devaxle.thecarloancentre.co.uk/#/login');
});


// test('axleHub Login', async ({ page }) => {
//   test.slow();
//   try {
//     await page.goto('https://devaxle.thecarloancentre.co.uk/#/login');
//     test.slow();
//     await expect(page).toHaveTitle(/Axle Hub | | The Car Loan Centre | | CRM/);
//     await expect(page).toHaveURL('https://devaxle.thecarloancentre.co.uk/#/login');
//     await page.getByPlaceholder('Enter username').click();
//     await page.getByPlaceholder('Enter username').fill('robin.kumar@skillikz.com');
//     await page.getByPlaceholder('Enter username').press('Tab');
//     await page.getByPlaceholder('Enter password').fill('CarLoan123');
//     await page.getByRole('button', { name: 'Log In ' }).click();
//     await page.waitForURL('https://devaxle.thecarloancentre.co.uk/#/');
//     test.slow();
//     await page.getByRole('button', { name: 'Robin Kumarprofile-user ' }).click();
//     await page.getByRole('button', { name: 'Robin Kumarprofile-user ' }).click();
//     const logo = await page.getByRole('link', { name: 'logo-small' });
//     await expect(logo).toBeVisible();
//     await page.getByRole('link', { name: '= Logout' }).click();
//     await expect(page).toHaveURL('https://devaxle.thecarloancentre.co.uk/#/login');
//   } catch(error) {
//     console.error('An error occurred:', error);   
//   }
//   finally {
//     await page.close();
//   }
// });
