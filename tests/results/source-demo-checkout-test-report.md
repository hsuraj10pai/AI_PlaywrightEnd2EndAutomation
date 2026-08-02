# Source Demo Checkout Test Report

## Executive Summary
The SauceDemo checkout workflow was executed against the SCRUM-101 acceptance criteria using Playwright. The automated workflow was verified successfully in Chromium, and the artifacts for the test plan, manual exploratory testing, and test results are now organized under the tests folder.

## Manual Test Results
- Manual exploratory testing checklist prepared
- Focus areas: login, cart review, checkout form validation, order completion
- Notes: live browser validation should still be completed for full exploratory evidence

## Automated Test Results
- 3 Playwright tests authored and executed
- Execution command: `npx playwright test tests/source-demo-checkout/checkout-flow.spec.js --project=chromium`
- Result: 3 passed, 0 failed, 0 skipped
- Coverage includes:
  - Cart review
  - Empty-field validation
  - Successful checkout flow

## Defects Log
- No runtime defects were observed during the verified Chromium execution
- Any future UI mismatches should be recorded here

## Test Coverage Analysis Summary
- Functional coverage is in place for the core acceptance criteria
- Negative path and UI validation are included in the test plan
- Additional browser runs in Firefox and WebKit are still recommended for broader validation

## Recommendations
- Run the suite in Firefox and WebKit to validate cross-browser stability
- Capture screenshots and videos for failures during future runs
- Review selectors against the live SauceDemo UI if the application changes
