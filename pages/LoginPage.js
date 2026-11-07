export class LoginPage {

  constructor(page) {
    this.page = page;

    // Locate the username, password, and login button
    this.username_textbox = page.locator('[data-test="username"]');
    this.password_textbox = page.locator('[data-test="password"]');
    this.login_button = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async enterUsername(username) {
    await this.username_textbox.fill(username);
  }

  async enterPassword(password) {
    await this.password_textbox.fill(password);
  }

  async clickLoginButton() {
    await this.login_button.click();
  }

  // Reuse the login steps in a single method
  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  // Open the public SauceDemo login page
  async visitLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

}
