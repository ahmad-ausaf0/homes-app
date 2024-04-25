import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  try {
    await page.goto('http://localhost:5000/#/login');
    await page.getByPlaceholder('Enter username').fill('test@123');
    await page.getByPlaceholder('Enter password').fill('Windows@1');
    await page.getByRole('button', { name: 'Log In ' }).click();
    await page.locator('a:nth-child(17)').click();
    // await page.locator('a:nth-child(16)').click();
    await page.getByRole('link', { name: ' Vehicle List' }).click();
    test.slow();
    // const response = await page.evaluate(async () => {
    //   const url = 'https://axleserver.thecarloancentre.co.uk/api/Vehicledata/Vehicledata/VehicleGetAll';
    //   return fetch(url);
    // });
    const response = await page.evaluate(async () => {
      const url = 'https://axleserver.thecarloancentre.co.uk/api/Vehicledata/Vehicledata/VehicleGetAll';
      const response = await fetch(url);

      return {
        status: response.status,
        text: await response.text(),
      };
    });

    if (response.status === 200) {
      console.error('200 ok');
    } else {
      console.error(response.status + ' Error');
    }
  } catch (error) {
    // console.error('An error occurred:', error);
    if (error instanceof Error && error.message.includes('Timeout')) {
      console.error('Timeout exceeded:', error.message);
    } 
    else if (error instanceof Error && error.message.includes('Browser has been closed')) {
      console.error('Browser has been closed:', error.message);
    } else {
      console.error('An error occurred:', error);
    }
  } finally {
    await page.close();
  }
});

test('test for leads', async ({ page }) => {
  try {
    await page.goto('http://localhost:5000/#/login');
    await page.getByPlaceholder('Enter username').fill('test@123');
    await page.getByPlaceholder('Enter password').fill('Windows@1');
    await page.getByRole('button', { name: 'Log In ' }).click();
    await page.locator('a:nth-child(5)').click();
    await page.getByRole('link', { name: ' Leads' }).click();
    test.slow();
    const response = await page.evaluate(async () => {
      const url = 'https://axleserver.thecarloancentre.co.uk/api/customervehicle/CustomerLeadMasterView/GetAll';
      const response = await fetch(url);

      return {
        status: response.status,
        text: await response.text(),
      };
    });

    if (response.status === 502) {
      console.error('502 Bad Gateway Error');
    } else {
      console.error('200 ok');
    }
  } catch (error) {
    // console.error('An error occurred:', error);
    if (error instanceof Error && error.message.includes('Timeout')) {
      console.error('Timeout exceeded:', error.message);
    } 
    else if (error instanceof Error && error.message.includes('Browser has been closed')) {
      console.error('Browser has been closed:', error.message);
    } else {
      console.error('An error occurred:', error);
    }
  } finally {
    await page.close();
  }
});


