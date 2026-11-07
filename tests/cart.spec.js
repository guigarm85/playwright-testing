import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

// Use the custom fixture to log in before the cart test
test.beforeEach(async ({ authenticatedPage }) => {
});

test('Verify and remove backpack from cart', async ({ page }) => {

  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  // Add the backpack and verify the cart badge
  await productsPage.clickAddToCartBackPackButton();

  await expect(productsPage.shoppingCartBadge).toHaveText('1');

  // Navigate to the cart page
  await cartPage.clickGoToCartPage();
  await expect(cartPage.cartTitle).toHaveText('Your Cart');
  
  // Verify that the backpack is in the cart with correct quantity and price
  await expect(cartPage.itemQuantity).toHaveText('1');  
  await expect(cartPage.itemPrice).toHaveText('$29.99');
  await expect(cartPage.itemName).toHaveText('Sauce Labs Backpack');

  // Remove the backpack from the cart
  await cartPage.clickRemoveFromCartBackPackButton();

  // Verify that the backpack is removed from the cart
  await expect(cartPage.cartBadge).toHaveCount(0);
  await expect(cartPage.itemName).not.toBeVisible();

});