
export class ProductsPage {

  constructor(page) {
    this.page = page;

    // Locate the product title, add-to-cart button, and cart badge
    this.pageTitle = page.locator('[data-test="title"]');
    this.addToCartBackPackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  // Add the Sauce Labs Backpack to the cart
  async clickAddToCartBackPackButton() {
    await this.addToCartBackPackButton.click();
  }

}
