
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Successful login', async ({ page }) => {

  const loginPage = new LoginPage(page);

  // Open the SauceDemo login page
  await loginPage.visitLoginPage();

  // Sign in using the public demo account
  await loginPage.login('standard_user', 'secret_sauce');

  // Verify that login redirects to the Products page
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');

});
