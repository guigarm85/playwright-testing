import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

// Use the custom fixture to log in before each checkout test
test.beforeEach(async ({ authenticatedPage }) => {
});

test('Complete checkout successfully', async ({ page }) => {

  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Add the backpack to the cart
  await productsPage.clickAddToCartBackPackButton();

  // Navigate to the cart page
  await cartPage.clickGoToCartPage();

  // Navigate to the checkout page
  await checkoutPage.clickCheckoutButton();
  await expect(checkoutPage.checkoutTitle).toContainText('Checkout: Your Information');

  // Fill in the required fields and continue
  await checkoutPage.fillCheckoutInformation('John', 'Doe', '12345');
  await checkoutPage.clickContinue();

  // Verify that the checkout overview page is displayed
  await expect(checkoutPage.checkoutTitle).toContainText('Checkout: Overview');
  await checkoutPage.clickFinish();

  // Verify that the checkout complete page is displayed
  await expect(checkoutPage.checkoutCompleteHeader).toContainText('Thank you for your order!');  
});

test('Verify checkout with empty required fields', async ({ page }) => {

  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Add the backpack to the cart
  await productsPage.clickAddToCartBackPackButton();

  // Navigate to the cart page
  await cartPage.clickGoToCartPage();

  // Navigate to the checkout page
  await checkoutPage.clickCheckoutButton();
  await expect(checkoutPage.checkoutTitle).toContainText('Checkout: Your Information');

  // Leave the required fields empty and click continue
  await expect(checkoutPage.firstNameInput).toBeEmpty();
  await expect(checkoutPage.lastNameInput).toBeEmpty();
  await expect(checkoutPage.postalCodeInput).toBeEmpty();
  await checkoutPage.clickContinue();

  // Verify that the error message is displayed for the empty required fields
  await expect(checkoutPage.errorMessage).toContainText('Error: First Name is required');
  await expect(checkoutPage.checkoutTitle).toContainText('Checkout: Your Information');

});