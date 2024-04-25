import { test, expect } from '@playwright/test';

test('axleHub Login', async ({ page }) => {
  // await page.goto('https://devaxle.thecarloancentre.co.uk/');
  // await page.goto('https://devaxle.thecarloancentre.co.uk/#/login');
  // await page.getByPlaceholder('Enter username').click();
  // await page.getByPlaceholder('Enter username').fill('ausaf.ahmed@skillikz.com');
  // await page.getByPlaceholder('Enter username').press('Tab');
  // await page.getByPlaceholder('Enter password').fill('CarLoan123');
  // await page.getByText('Remember me').click();
  // await page.getByRole('button', { name: 'Log In ' }).click();
  test.slow();
  try {
    await page.goto('https://devaxle.thecarloancentre.co.uk/#/login');
    test.slow();
    await expect(page).toHaveTitle(/Axle Hub | | The Car Loan Centre | | CRM/);
    await expect(page).toHaveURL('https://devaxle.thecarloancentre.co.uk/#/login');
    await page.getByPlaceholder('Enter username').click();
      // await page.getByPlaceholder('Enter username').fill('ausaf.ahmed@skillikz.com');
    await page.getByPlaceholder('Enter username').fill('robin.kumar@skillikz.com');
    await page.getByPlaceholder('Enter username').press('Tab');
    await page.getByPlaceholder('Enter password').fill('CarLoan123');
    await page.getByRole('button', { name: 'Log In ' }).click();
    test.slow();
  
    // await page.getByRole('button', { name: 'Ausaf Ahmad Ansariprofile-user ' }).click();
    // await page.getByRole('button', { name: 'Ausaf Ahmad Ansariprofile-user ' }).click();
    await page.getByRole('button', { name: 'Robin Kumarprofile-user ' }).click();
    await page.getByRole('button', { name: 'Robin Kumarprofile-user ' }).click();
    const logo = await page.getByRole('link', { name: 'logo-small' });
    await expect(logo).toBeVisible();
    await page.getByRole('link', { name: '= Logout' }).click();
    await expect(page).toHaveURL('https://devaxle.thecarloancentre.co.uk/#/login');
  } catch(error) {
    console.error('An error occurred:', error);   
  }
  finally {
    // await page.screenshot({ path: 'network-error-screenshot.png' });
    await page.close();
  }
});

test('axleHub Login api validation', async ({ page }) => {
  try {
    await page.goto('https://devaxle.thecarloancentre.co.uk/#/login');
    test.slow();
    await expect(page).toHaveTitle(/Axle Hub | | The Car Loan Centre | | CRM/);
    await expect(page).toHaveURL('https://devaxle.thecarloancentre.co.uk/#/login');
    const [response] = await Promise.all([
      page.waitForResponse(res => 
        res.status() == 200 && res.url() == "https://axleserver.thecarloancentre.co.uk/api/Login/token"
        ),
        await page.getByPlaceholder('Enter username').click(),
        // await page.getByPlaceholder('Enter username').fill('ausaf.ahmed@skillikz.com'),
        await page.getByPlaceholder('Enter username').fill('robin.kumar@skillikz.com'),
        await page.getByPlaceholder('Enter username').press('Tab'),
        await page.getByPlaceholder('Enter password').fill('CarLoan123'),
        await page.getByRole('button', { name: 'Log In ' }).click(),
        // test.slow(),
    ])
    console.log(await response.json());
    console.log(await response.json().then(q => q.email));
    // await page.getByPlaceholder('Enter username').click();
    // await page.getByPlaceholder('Enter username').fill('robin.kumar@skillikz.com');
    // await page.getByPlaceholder('Enter username').press('Tab');
    // await page.getByPlaceholder('Enter password').fill('CarLoan123');
    // await page.getByRole('button', { name: 'Log In ' }).click();
    // test.slow();
    // await page.getByRole('button', { name: 'Ausaf Ahmad Ansariprofile-user ' }).click();
    // await page.getByRole('button', { name: 'Ausaf Ahmad Ansariprofile-user ' }).click();

    // await page.getByRole('button', { name: 'Robin Kumarprofile-user ' }).click();
    // await page.getByRole('button', { name: 'Robin Kumarprofile-user ' }).click();
    // const logo = await page.getByRole('link', { name: 'logo-small' });
    // await expect(logo).toBeVisible();
    // await page.getByRole('link', { name: '= Logout' }).click();
    // await expect(page).toHaveURL('https://devaxle.thecarloancentre.co.uk/#/login');
  } catch(error) {
    console.error('An error occurred:', error);   
  }
  finally {
    // await page.screenshot({ path: 'network-error-screenshot.png' });
    await page.close();
  }
});

test('Login test', async ({ page }) => {
  // try {
  //   const timeout = 15000;
    test.slow();
    await page.goto('https://devaxle.thecarloancentre.co.uk/#/login');
    await expect(page).toHaveTitle(/Axle Hub | | The Car Loan Centre | | CRM/);
    await expect(page).toHaveURL('https://devaxle.thecarloancentre.co.uk/#/login');
    await page.getByPlaceholder('Enter username').click();
    // await page.getByPlaceholder('Enter username').fill('ausaf.ahmed@skillikz.com');
    await page.getByPlaceholder('Enter username').fill('robin.kumar@skillikz.com');
    await page.getByPlaceholder('Enter password').fill('CarLoan123');
    await page.getByRole('button', { name: 'Log In ' }).click();

    const timeout = 10000; 
    try {
      // Wait for the user profile button to appear
    // await page.waitForSelector('[name="Ausaf Ahmad Ansariprofile-user "]', { timeout });
    // await page.waitForSelector('[name="Ausaf Ahmad Ansariprofile-user "]', { state: 'visible', timeout });
    await page.waitForSelector('[name="Robin Kumarprofile-user "]', { state: 'visible', timeout });
    // await page.getByRole('button', { name: 'Ausaf Ahmad Ansariprofile-user ' }).click({ timeout });
    const logo = await page.getByRole('link', { name: 'logo-small' });
    await expect(logo).toBeVisible();
    await page.getByRole('link', { name: '= Logout' }).click();
    await expect(page).toHaveURL('https://devaxle.thecarloancentre.co.uk/#/login');

    } catch (error) {
      if (error instanceof Error && error.message.includes('Timeout')) {
        console.error('Timeout exceeded:', error.message);
      } else {
        console.error('An error occurred:', error);
      }
    }
    finally {
      await page.close();
    }

    // Clicking the user profile button
    // await page.click('[name="Ausaf Ahmad Ansariprofile-user "]');
    // await page.getByRole('button', { name: 'Ausaf Ahmad Ansariprofile-user ' }).click();
    // await page.getByRole('button', { name: 'Ausaf Ahmad Ansariprofile-user ' }).click();
    // await page.getByRole('button', { name: 'Robin Kumarprofile-user ' }).click();
    // await page.getByRole('button', { name: 'Robin Kumarprofile-user ' }).click();
    // ... (perform other actions)
  // } catch (error) {
  //   if (error instanceof Error && error.message.includes('Timeout')) {
  //     console.error('Timeout exceeded global:', error.message);
  //   } else {
  //     console.error('An error occurred global:', error);
  //   }
  // }
  // finally {
  //   await page.close();
  // }
});

