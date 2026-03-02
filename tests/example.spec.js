// @ts-check
import { test, expect } from '@playwright/test';

test('check out page navigation', async ({ page }) => {
  await page.goto('https://www.coleman.com/');
  await page.getByRole('button', { name: 'minimize pop up' }).click();
  await page.getByLabel('hamburger menu', { exact: true }).getByRole('link', { name: 'Coolers' }).click();
  // await page.getByRole('link', { name: 'Soft Coolers' }).click();
  await page.locator("//a[@class='product-tile-link']").nth(1).click();
  await page.waitForTimeout (12000);
  await page.getByRole('button', { name: 'Add to Bag' }).first().click();
  await page.waitForTimeout (8000);
  await page.getByRole('button', { name: 'View Your Bag (1)' }).click();
  await page.getByRole('button', { name: 'Continue to Checkout' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Rajith');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('RC');
  await page.getByRole('textbox', { name: 'Last Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Street Address' }).click();
});

