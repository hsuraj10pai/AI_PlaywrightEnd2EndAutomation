const { test, expect } = require('@playwright/test');

const username = process.env.SAUCEDEMO_USER || 'standard_user';
const password = process.env.SAUCEDEMO_PASSWORD || 'secret_sauce';

async function login(page) {
  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL(/inventory/);
}

test.describe('SauceDemo checkout workflow', () => {
  test('cart review shows item details and checkout option', async ({ page }) => {
    await login(page);
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('.shopping_cart_link').click();

    await expect(page).toHaveURL(/cart/);
    await expect(page.locator('[data-test="checkout"]')).toBeVisible();
  });

  test('checkout form blocks submission when required fields are empty', async ({ page }) => {
    await login(page);
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="continue"]').click();

    await expect(page).toHaveURL(/checkout-step-one/);
    await expect(page.locator('body')).toContainText(/required|error|Error/i);
  });

  test('user can complete checkout successfully', async ({ page }) => {
    await login(page);
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill('QA');
    await page.locator('[data-test="lastName"]').fill('User');
    await page.locator('[data-test="postalCode"]').fill('12345');
    await page.locator('[data-test="continue"]').click();

    await expect(page).toHaveURL(/checkout-step-two/);
    await page.locator('[data-test="finish"]').click();

    await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you');
  });
});
