import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByPlaceholder('Filter by city').click();
  await page.getByPlaceholder('Filter by city').fill('');
  await page.getByPlaceholder('Filter by city').click();
  await page.getByPlaceholder('Filter by city').fill('chaicago');
  await page.getByPlaceholder('Filter by city').press('Enter');
  await page.locator('app-housing-location').filter({ hasText: 'Acme Fresh Start Housing Chicago, IL Learn More' }).getByRole('link').click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('bla');
  await page.getByLabel('First Name').press('Tab');
  await page.getByLabel('Last Name').fill('ta');
  await page.getByRole('button', { name: 'Apply Now' }).click();
  await page.getByRole('button', { name: 'Apply Now' }).click();
  await page.getByRole('link').click();
});