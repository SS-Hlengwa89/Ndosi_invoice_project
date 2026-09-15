# Ndosi Invoice Automation Project

Playwright automation framework for UI and API testing of the Ndosi application.

This project was developed as an automation assessment demonstrating UI automation, API validation, test reporting, CI/CD execution, scheduled test execution, and test evidence.

## Technology Stack

* Playwright
* TypeScript
* Node.js
* Git
* GitHub
* GitHub Actions
* REST API testing
* dotenv

## Assessment Requirements

The solution addresses the following assessment requirements:

* Automated UI testing using Playwright
* API endpoint validation
* Detailed test coverage
* GitHub repository
* Multiple Git pushes during development
* GitHub Actions pipeline execution
* Scheduled daily test execution at midnight SAST
* Playwright HTML test reporting
* Screenshots/test evidence
* Environment variables for sensitive configuration

---

## UI Test Coverage

The UI automation follows the required Ndosi user journey:

1. Login to the Ndosi automation test site
2. Click the Menu
3. Select My Profile
4. Select Edit Profile
5. Upload a new profile picture
6. Verify that the profile picture has been updated successfully

The UI tests use Playwright and follow a Page Object Model structure to improve maintainability and reusability.

### Browsers

The UI test suite is configured to run against:

* Chromium
* Firefox

WebKit is not included in the project configuration.

---

## API Test Coverage

The API automation validates endpoints involved in the profile functionality.

The API tests include:

1. GET Profile - successful response validation
2. HTTP status code validation
3. Response structure validation
4. Response message validation
5. Profile ID validation
6. UUID format validation
7. Bearer token authentication
8. Invalid endpoint / negative testing

The API tests verify both successful and negative scenarios.

---

## Test Reporting

Playwright HTML reporting is configured for test execution.

After running the tests locally, the HTML report can be opened using:

```bash
npx playwright show-report
```

The report provides:

* Test execution results
* Passed and failed tests
* Test duration
* Test steps
* Failure information
* Screenshots and other test evidence when captured

---

## GitHub Actions

The project uses GitHub Actions to execute the automated test suite in a CI/CD environment.

The workflow is located at:

```text
.github/workflows/playwright.yml
```

The pipeline:

* Checks out the repository
* Installs Node.js 20
* Installs project dependencies
* Installs Playwright browser dependencies
* Executes the automated test suite
* Uploads the Playwright HTML report as a workflow artifact

The workflow also supports manual and scheduled execution.

### Scheduled Test Execution

The automated tests are configured to run daily at midnight South African Standard Time (SAST).

GitHub Actions cron schedules use UTC.

Midnight SAST (UTC+2) corresponds to:

```text
22:00 UTC
```

Therefore, the scheduled workflow uses:

```text
0 22 * * *
```

This allows the automated test suite to execute automatically every day at midnight SAST.

---

## Environment Configuration

Environment-specific values are stored outside the source code using environment variables.

The project uses dotenv for local environment configuration.

The test suite uses environment variables including:

```text
TEST_EMAIL
TEST_PASSWORD
```

Sensitive credentials should not be committed to GitHub.

A template file is provided as:

```text
.env.example
```

For local execution, create a `.env` file and provide the required values.

---

## Installation

Clone the repository and navigate into the project directory.

Install the project dependencies:

```bash
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

---

## Running the Tests

Run the complete Playwright test suite:

```bash
npx playwright test
```

Run the UI profile picture test:

```bash
npx playwright test tests/profile-picture.spec.ts
```

Run the API tests:

```bash
npx playwright test tests/api/profile.spec.ts
```

Open the generated HTML report:

```bash
npx playwright show-report
```

---

## Project Structure

```text
Ndosi_invoice_project/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── config/
├── fixtures/
├── pages/
│   ├── LoginPage.ts
│   └── ProfilePage.ts
│
├── test-data/
│   └── profile-picture.jpg
│
├── tests/
│   ├── api/
│   │   └── profile.spec.ts
│   │
│   └── profile-picture.spec.ts
│
├── utils/
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

### Directory Purpose

**`.github/workflows/`**

Contains the GitHub Actions CI/CD workflow.

**`config/`**

Contains project configuration and reusable configuration-related files.

**`fixtures/`**

Contains reusable Playwright test fixtures.

**`pages/`**

Contains Page Object classes used by the UI tests.

**`test-data/`**

Contains test data used by the automated tests, including the profile picture used by the UI upload test.

**`tests/`**

Contains the automated test specifications.

**`tests/api/`**

Contains API test specifications.

**`utils/`**

Contains reusable helper and utility functionality.

---

## Test Design

The project follows a maintainable automation structure using:

* Page Object Model
* Reusable fixtures
* Environment-based configuration
* Separate UI and API test suites
* Playwright assertions
* Positive and negative API scenarios
* CI/CD execution through GitHub Actions

This structure makes the test suite easier to maintain and extend.

---

## Screenshots and Test Evidence

Test evidence is used to demonstrate successful execution of the automated solution.

Evidence can include:

1. Successful UI test execution
2. Profile picture update verification
3. API test execution
4. Playwright HTML report
5. Successful GitHub Actions pipeline execution
6. Scheduled GitHub Actions configuration

Playwright is also configured to capture screenshots when tests fail, providing diagnostic evidence for failed executions.

---

## Continuous Integration

The GitHub Actions pipeline provides automated execution of the Playwright test suite without requiring the tests to be run manually on a local machine.

The pipeline can be triggered by:

* Repository changes pushed to the `main` branch
* Manual workflow execution
* Scheduled daily execution

This ensures that the automated tests can continuously validate the Ndosi application.

---

## Future Improvements

Potential future improvements include:

* Additional API endpoint coverage
* Additional negative UI scenarios
* Expanded cross-browser coverage
* Improved test data management
* Enhanced trace and video retention for failed CI tests
* Expanded API response schema validation
* Additional reusable fixtures
* Integration with external test management/reporting tools

---

## Conclusion

This project demonstrates an end-to-end automated testing solution using Playwright and TypeScript.

It covers the required Ndosi UI workflow, API validation, automated reporting, GitHub Actions CI/CD execution, scheduled test execution, cross-browser testing with Chromium and Firefox, and test evidence through screenshots.
