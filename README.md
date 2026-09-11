# Ndosi Invoice Automation Project

Playwright automation framework for UI and API testing of the Ndosi application.

## Technology Stack

- Playwright
- TypeScript
- Node.js
- Git
- GitHub Actions
- REST API testing
- dotenv

## Test Coverage

### UI Testing

The UI automation covers:

1. Login
2. Navigate to Menu
3. Open My Profile
4. Edit Profile
5. Upload a new profile picture
6. Verify the updated profile

### API Testing

The API automation covers:

1. GET Profile - successful response validation
2. Profile response structure validation
3. Invalid endpoint / negative testing
4. HTTP status code validation
5. Response message validation
6. Profile ID validation
7. UUID format validation
8. Bearer token authentication

## Project Structure

```text
Ndosi_invoice_project/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── config/
│
├── fixtures/
│
├── pages/
│
├── tests/
│   ├── api/
│   │   └── profile.spec.ts
│   │
│   └── framework.spec.ts
│
├── utils/
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
