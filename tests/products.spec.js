import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

// Use the custom fixture to log in before the product test
test.beforeEach(async ({ authenticatedPage }) => {
});

test('Add backpack to cart', async ({ page }) => {

  const productsPage = new ProductsPage(page);

  // Verify that the Products page is displayed
  await expect(productsPage.pageTitle).toHaveText('Products');

  // Add the backpack and verify the cart badge
  await productsPage.clickAddToCartBackPackButton();

  await expect(productsPage.shoppingCartBadge).toHaveText('1');

});
