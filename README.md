# Playwright Testing Portfolio

I built this project to practice web testing with Playwright and JavaScript using [SauceDemo](https://www.saucedemo.com/), a public demo e-commerce website.

I started with login and product tests, then added negative scenarios, cart validation, and a complete checkout flow. I used Page Object Model (POM) to organize page interactions and a custom fixture to reuse the login setup.

## Test scenarios

The project includes seven automated tests:

| Test | What I check |
|---|---|
| Successful login | Valid credentials redirect the user to the Products page. |
| Login with incorrect password | An incorrect password displays the expected error message. |
| Login with locked-out user | A locked-out user cannot log in and receives the expected error message. |
| Add backpack to cart | Adding a Sauce Labs Backpack updates the cart badge to 1. |
| Verify and remove backpack from cart | The cart displays the correct product, quantity, and price. After removal, the product and cart badge disappear. |
| Complete checkout successfully | The user completes a simulated purchase and sees the order confirmation message. |
| Verify checkout with empty required fields | The checkout displays a required-field error and does not advance when customer information is empty. |

Each test runs independently, with its own browser context and required setup.

## Project structure

- `tests/` — Four test files covering login, products, cart, and checkout.
- `pages/` — Page Objects for LoginPage, ProductsPage, CartPage, and CheckoutPage.
- `fixtures/fixtures.js` — Custom fixture that prepares an authenticated session for tests requiring login.
- `playwright.config.ts` — Playwright configuration for Chromium, Firefox, and WebKit.
- `package.json` — Project dependencies, including Playwright Test.

I keep the locators and page actions in the Page Objects and the assertions in the test files. This makes the tests easier to read and maintain.

## Getting started

Install Node.js 20 or newer, then open the project folder in a terminal.

Install the dependencies and Playwright browsers:

```bash
npm ci
npx playwright install
```

Run all tests across the three configured browsers:

```bash
npx playwright test
```

Run only Chromium:

```bash
npx playwright test --project=chromium
```

Open the HTML test report:

```bash
npx playwright show-report
```

## Environment and limitations

The tests require internet access because they run against the public SauceDemo website. They use the demo credentials provided by the website, not private accounts or real payment information.

The checkout test completes a simulated order, not a real purchase.

Test results may depend on the availability and behavior of SauceDemo. Reports and traces are generated locally and excluded from Git version control.

## Test results

On 7 November 2026, I ran all seven scenarios across Chromium, Firefox, and WebKit using Playwright.

- **Total executions:** 21
- **Passed:** 21
- **Failed:** 0
- **Browsers:** Chromium, Firefox, WebKit
- **Workers:** 4
- **Execution time:** 14.4 seconds

I also ran the seven tests together in Chromium after reviewing and refactoring the Page Objects. All seven passed.

This is a personal learning project that I developed and reviewed while rebuilding my practical software testing skills.
