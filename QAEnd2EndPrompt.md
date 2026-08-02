# QA End-to-End Prompt: E-commerce Checkout Process

This workflow defines a seven-step QA process for validating the E-commerce Checkout Process user story (SCRUM-101) using MCP servers and AI agents. The scope is the SauceDemo checkout flow, including cart review, checkout information entry, order overview, order completion, error handling, and overall quality validation.

## Step 1: Read the User Story
- Read the user story file located at:
  `user-stories/SCRUM-101-ecommerce-checkout.md`
- Understand the business goal, application URL, test credentials, acceptance criteria, business rules, technical notes, and overall testing scope.
- Summarize the requirements clearly.

- Expected output:
  - Summary of the user story
  - List of acceptance criteria
  - Application URL
  - Test credentials
  - Key features to test

## Step 2: Create the Test Plan
- Use the Playwright Test Planner Agent.
- Review the user story and acceptance criteria.
- Read the application URL and test credentials from the user story.
- Explore the application and understand the workflows mentioned in the acceptance criteria.
- Create a comprehensive test plan covering:
  - Happy path scenarios
  - Negative scenarios
  - Edge cases
  - Boundary conditions
  - Navigation flow
  - UI element validation
- Save the test plan under the `specs` folder.
- File name:
  `specs/source-demo-checkout-test-plan.md`
- Ensure each test scenario includes:
  - Test objective
  - Preconditions
  - Steps
  - Expected result
  - Priority
  - Browser coverage

## Step 3: Perform Manual Exploratory Testing
- Use Playwright browser tools for manual exploratory testing.
- Read the test plan created in Step 2.
- Execute the proposed test scenarios manually.
- Follow each test case step by step.
- Verify whether the actual results match the expected results.
- Capture screenshots during testing.
- Document findings clearly.
- Expected output:
  - Manual test execution results
  - Screenshots
  - List of observations
  - List of issues discovered

## Step 4: Generate Automated Test Scripts
Now need to create automated test scripts 

- Use the Playwright Test Generator Agent.
- Review the test plan from : specs/   source-demo-checkout-test-plan.md(test scenarios and steps) and the Exploratory findings from Step 3.
- Uinsg Insights from manual Exploratory testing Generate Playwright test scripts for each scenario.
- Organize the scripts into the appropriate test suite structure under:
  `tests/source-demo-checkout/`
- Follow Playwright best practices:
  - Use clear and descriptive test names
  - Use robust selectors
  - Add meaningful assertions
  - Add comments where helpful
  - Use maintainable test structure
- Include support for:
  - Chrome
  - Firefox
  - Safari
- Expected output:
  - Automated Playwright test scripts
  - Organized test files
  - Reusable helpers or page objects if needed

## Step 5: Execute and Heal the Tests
- Use the Playwright Test Healer Agent.
- Run the generated automated test scripts.
- If failures occur, analyze them and fix or heal the tests where appropriate.
- Review:
  - Broken selectors
  - Timing issues
  - Flaky assertions
  - Missing waits
  - Incorrect test assumptions
- Re-run the suite until the tests are stable and passing as much as possible.
- Expected output:
  - Execution summary
  - List of healed or fixed tests
  - Notes on any remaining failures

## Step 6: Generate the Test Report
- Use the Playwright execution results and exploratory testing findings to generate a final QA test report with detailed graphs in visual format having Total no of tests ,no of test passed and failure and also percentage passed or failed and save under specs/tests/results/QAReports.html
and also mail to hsuraj10pai@gmail.ocm

- Count and include how many failures occurred during Playwright execution.

- Include the following sections:
  - Executive summary
     -Total test cases Palnned
     -Total Test cases executed (Manual +Automated)
     -Overall Pass/Fail/Blocked

  - Manual test results
     -Results from exploratory testing
     -Screenshots and observations
     -Issues found during Manual Testing


  - Automated test results
     -Automation Results
     -Healing activities Performed
     -pass/Fail for Each suite

  - Defects log
  - Test coverage analysis summary
  - Recommendations

- Expected output:
  - A structured Corporate QA test report 
  - Total number of passed, failed, and skipped tests
  - Failure count summary from Playwright execution
  - Summary of issues found during exploratory testing
  - Recommendations for improvement
  - Email to 'hsuraj10pai@gmail.com'


## Step 7: Commit the Code to GitHub
- Use the GitHub MCP server.
- Commit the complete code base, including:
  - Test plan
  - Manual test evidence
  - Automated test scripts
  - Test report
  - Any supporting files
- Use the repository URL provided for the project.
- Repository URL:
  `https://github.com/hsuraj10pai/AI_PlaywrightEnd2EndAutomation`
- Expected output:
  - Committed changes in the Git repository
  - Commit message summarizing the QA workflow completed

## Final Outcome
By the end of this workflow, the team should have:
- A reviewed user story
- A structured test plan
- Manual exploratory testing results
- Automated Playwright tests
- A generated test report
- A committed codebase ready for review