// @ts-check
import { test, expect } from '@playwright/test';
// @ts-ignore
import { login } from '../page/loginpage';
test('check out page navigation', async ({ page }) => {
  await page.goto('https://walmarttest.sdi.com/');
  await page.locator("//button[@class='swal-button swal-button--confirm']").click();
  await page.locator("//button[@class='btn btn-transparent col-12 text-white font-regular font-14 py-2 login-sign-in-border'] ").click();
  await page.locator("//button[text()='Ok, Got it']").click();
  await page.locator("//input[@name='userName']").click();
  await page.locator("//input[@name='userName']").fill('RAJITHSUPER');
  await page.locator("//input[@name='password']").click();
  await page.locator("//input[@name='password']").fill('15SDI20');
  await page.locator("//a[@id='loginSubmit']").click();
  await page.locator("//button[@class='close']").click();
  await page.locator("//input[@id='searchTxt']").click();
  await page.locator("//input[@id='searchTxt']").fill('tools');
  await page.locator("//span[@id='searchIcon']").click();
  await page.locator("(//button[text()='Apply'])[2]").click();
  await page.waitForTimeout (20000);
  await page.locator("(//div[@class='col-md-4 col-lg-2 order-summary-image category-search-image mb-2'])[1]").click();
  await page.waitForTimeout (20000);
  await page.locator("//img[@id='mainImage']");
  await page.isVisible("//img[@id='mainImage']");
  await page.getByRole("button",{name:"Submit"}).click();
  await page.locator("//input[@class='form-control charge-code-control']").fill('147852369');
  await page.locator("(//button[text()='Submit'])[1]").click();
  await page.waitForTimeout (20000);
  await page.locator("(//button[text()='Add to cart'])[3]").click();
  await page.locator("//div[text()='Select...']").click();
  await page.locator("//div[text()='Quality of item']").hover();
  await page.locator("(//button[text()='Submit'])[3]").click();
  await page.waitForTimeout (20000);
  await page.locator("(//button[text()='OK'])[2]").click();
  await page.locator("(//a[@class='nav-link custom-nav-link dropdown-toggle notification-icon-arrow px-0 rotate-loading cart-section'])[2]").click();
  await page.waitForTimeout (30000);
  await page.isVisible("//h5[text()='Shopping Cart']");
  // 34,20,7
});

test.only('check out page object', async ({ page }) => {
const loginPage = new login(page);
await loginPage.launchUrl();
await page.waitForTimeout (10000);
await loginPage.clickOk();
await loginPage.clickOkGotIt();
await loginPage.clickSignInButton();
await loginPage.enterUsername();
await loginPage.enterPassword();
await loginPage.clickLoginButton();
});