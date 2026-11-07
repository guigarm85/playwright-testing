export class CartPage {

  constructor(page) {
    this.page = page;

    // Locate the cart title, cart badge, item price, item name, and remove button
    this.goToCartPage = page.locator('[data-test="shopping-cart-link"]');
    this.cartTitle = page.locator('[data-test="title"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.itemQuantity = page.locator('[data-test="item-quantity"]');
    this.itemPrice = page.locator('[data-test="inventory-item-price"]')
    this.itemName = page.locator('[data-test="inventory-item-name"]');
    this.removeFromCartBackPackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
  }

  // Navigate to the cart page
  async clickGoToCartPage() {
    await this.goToCartPage.click();
  }

  // Remove the Sauce Labs Backpack from the cart
  async clickRemoveFromCartBackPackButton() {
    await this.removeFromCartBackPackButton.click();
  }
  
}