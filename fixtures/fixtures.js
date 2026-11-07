import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export const test = baseTest.extend({

  // Prepare an authenticated page for tests that require login
  authenticatedPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);

    // Open SauceDemo and sign in with the public demo account
    await loginPage.visitLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');

    // Make the authenticated page available to the test
    await use(loginPage);

  }

});
