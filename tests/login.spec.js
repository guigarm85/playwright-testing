import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Successful login', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  // Open the SauceDemo login page
  await loginPage.visitLoginPage();

  // Sign in using the public demo account
  await loginPage.login('standard_user', 'secret_sauce');

  // Verify that login redirects to the Products page
  await expect(productsPage.pageTitle).toHaveText('Products');
});

test('Login with incorrect password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Open the SauceDemo login page
  await loginPage.visitLoginPage();

  // Attempt to log in with invalid credentials
  await loginPage.login('standard_user', 'wrong_password');

  // Verify the expected login error message
  await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');

});

test('Login with locked-out user', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Open the SauceDemo login page
  await loginPage.visitLoginPage();

  // Attempt to log in with a locked-out user
  await loginPage.login('locked_out_user', 'secret_sauce');

  // Verify the expected login error message
  await expect(loginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');

});