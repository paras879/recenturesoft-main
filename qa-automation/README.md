# Complete QA Automation Suite

This repository module contains a full, production-ready QA testing suite.
It completely isolates local environment dependencies and targets the **LIVE** URL.

## Folder Structure
- `unit/`: Jest (Unit testing utility functions and logic)
- `integration/`: Jest + fetch (Testing live API endpoints)
- `edge/`: Jest (Invalid inputs, XSS/SQLi boundary checks)
- `e2e/`: Playwright (Real browser user journey)
- `load/`: k6 (Performance and stress testing)

## Configuration
Before running any tests, ensure the `.env` file in this directory contains the correct live URL:
```env
WEBSITE_URL=https://recenturesoft-main.vercel.app
```

## How to Run Tests

### 1. Install Node Dependencies
Ensure you have Node.js installed, then run:
```bash
npm install
```

### 2. Run Jest Tests (Unit, Integration, Edge)
You can run them individually or all together:
```bash
npm run test:unit
npm run test:integration
npm run test:edge
```
*(Jest will output a detailed pass/fail report in the terminal).*

### 3. Run E2E Tests (Playwright)
To execute the End-to-End user journeys across Chromium, Firefox, and Safari (WebKit):
```bash
npm run test:e2e
```
*If a test fails, Playwright will generate an HTML report and save a screenshot/video in `playwright-report/`.*

### 4. Run Load Tests (k6)
**Pre-requisite:** You must install the `k6` binary on your system. 
- [Download k6 here](https://k6.io/docs/get-started/installation/)

Once installed, execute the load test from your terminal:
```bash
k6 run load/load-test.js -e WEBSITE_URL=https://recenturesoft-main.vercel.app
```
*This will simulate 500 concurrent users hitting your live website over 5 minutes and output response time metrics.*
