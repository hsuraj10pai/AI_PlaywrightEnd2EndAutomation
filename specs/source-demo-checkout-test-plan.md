# Source Demo Checkout Test Plan

## Objective
Create a comprehensive QA plan for the SauceDemo checkout experience based on the SCRUM-101 user story and acceptance criteria.

## Scope
- Validate cart review, checkout information entry, order overview, order completion, and error handling
- Cover happy paths, negative paths, edge cases, navigation, and UI validation
- Support Chrome, Firefox, and Safari coverage

## Test Environment
- Application URL: https://www.saucedemo.com
- Credentials:
  - Username: `standard_user`
  - Password: `secret_sauce`

## Test Scenarios

### TC1: Cart Review
- Objective: Confirm the cart page shows the selected item and checkout option
- Preconditions: User is logged in and has at least one product added to cart
- Steps:
  1. Log in
  2. Add a product to cart
  3. Open the cart
- Expected Result:
  - Product details and pricing are visible
  - Checkout option is available
- Priority: High
- Browser Coverage: Chrome, Firefox, Safari

### TC2: Checkout Form Validation
- Objective: Validate that required checkout fields are enforced
- Preconditions: User is on the cart page with items
- Steps:
  1. Click Checkout
  2. Leave one or more fields empty
  3. Click Continue
- Expected Result:
  - Error messages appear for required fields
  - User cannot proceed until fields are valid
- Priority: High
- Browser Coverage: Chrome, Firefox, Safari

### TC3: Successful Checkout
- Objective: Validate the full happy path from checkout to confirmation
- Preconditions: User has items in cart and valid checkout information
- Steps:
  1. Log in
  2. Add an item
  3. Open cart
  4. Click Checkout
  5. Enter valid first name, last name, and postal code
  6. Click Continue
  7. Review order
  8. Click Finish
- Expected Result:
  - Order overview page is shown
  - Confirmation page appears with success message
- Priority: High
  - Browser Coverage: Chrome, Firefox, Safari

### TC4: Cancel Checkout
- Objective: Confirm the user can cancel checkout and return to cart
- Preconditions: User is on the checkout overview page
- Steps:
  1. Start checkout flow
  2. Enter valid information
  3. Continue to overview
  4. Click Cancel
- Expected Result:
  - User returns to the cart page
  - Cart contents remain available
- Priority: Medium
- Browser Coverage: Chrome, Firefox, Safari

### TC5: Invalid Input Handling
- Objective: Validate error behavior for incomplete input
- Preconditions: User is on checkout information page
- Steps:
  1. Enter invalid or incomplete values
  2. Click Continue
- Expected Result:
  - Relevant validation errors appear
  - User is not allowed to proceed until input is corrected
- Priority: Medium
- Browser Coverage: Chrome, Firefox, Safari

## Notes
- All checkout form fields are mandatory
- Users must be logged in
- Cart cannot be empty when proceeding
- Confirmation should clear the cart
- Back and cancel paths should be validated
