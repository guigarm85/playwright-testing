
# Playwright Testing Portfolio

I put together these two automated tests to practice web testing with Playwright and JavaScript on [SauceDemo](https://www.saucedemo.com/).

I used page objects to organize login and product interactions, and a custom fixture to log in before the cart test. The Playwright configuration is written in TypeScript.

## Test scenarios

| Test | What I check |
|---|---|
| Successful login | Signing in with the public demo account displays the Products title. |
| Add backpack to cart | The Products title is displayed and adding a Sauce Labs Backpack updates the cart badge to 1. |

## Getting started

Install Node.js 20 or newer, open this folder in a terminal, and run:

```bash
npm ci
npx playwright install
npx playwright test
```

The configuration runs both scenarios in Chromium, Firefox, and WebKit. To run only Chromium:

```bash
npx playwright test --project=chromium
```

To open the HTML report after a run:

```bash
npx playwright show-report
```

## Environment and limitations

The tests need internet access and use the standard account credentials displayed publicly on SauceDemo. Each test starts with a separate browser context. Reports and failure traces are generated locally and excluded from version control.

This is a small learning project covering successful login and adding one product to the cart. I have not included checkout, negative login cases, or full cart validation. Results depend on the availability and current behavior of the public demo site.

## Test Results

On 1 November 2026, I ran both test scenarios across Chromium, Firefox, and WebKit using Playwright.

- Total executions: 6
- Passed: 6
- Failed: 0
- Flaky: 0
- Skipped: 0

The HTML report was generated and reviewed locally. It is excluded from this repository and can be regenerated using `npx playwright test`.
