import { test, expect } from '@playwright/test';

test.skip('skip this test', async ({ page }) => {
    await page.goto("https://commitquality.com/");
});


test('not yet ready', async ({ page }) => {
  test.fail();

});

test.fixme('test to be fixed', async ({ page }) => {
    // ...
  });

test('slow test', async ({ page }) => {
    test.slow();
    // ...
  });

test.only('focus this test', async ({ page }) => {
    // ...
  });

 test('skip this test conditionally', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Still working on it');
  });

  //Tags----------------------------------

  test('Test login page @fast', async ({ page }) => {
    // ...
  });
  
  test('Test full report @slow', async ({ page }) => {
    // ...
  });