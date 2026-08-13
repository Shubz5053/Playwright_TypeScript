# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: c_applyJobs.spec.ts >> Apply For Job
- Location: src\tests\c_applyJobs.spec.ts:6:5

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class recommendedJobs {
  4  |   readonly page: Page;
  5  |   readonly searchIcon: Locator;
  6  |   readonly searchTextbox: Locator;
  7  |   readonly searchButton: Locator;
  8  |   readonly jobCards: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 |     this.searchIcon = page.locator('button[aria-label="Search jobs here"]');
  13 |     this.searchTextbox = page.locator('input[placeholder="Enter keyword / designation / companies"]');
  14 |     this.searchButton = page.locator("(//button[@type='button'])[1]");
  15 |     this.jobCards = page.locator("div[class=' row1']");
  16 |   }
  17 | 
  18 |   async navigateToRecommendedJobs() {
  19 |     await this.page.goto('/mnjuser/recommendedjobs');
  20 |   }
  21 | 
  22 |   async searchJobs(keyword: string) {
  23 |     await this.searchIcon.click();
  24 |     await this.searchTextbox.fill(keyword);
  25 |     await this.searchButton.click();
  26 |   }
  27 | 
  28 |   async getJobCount() {
  29 |     return await this.jobCards.count();
  30 |   }
  31 | 
  32 |   async openJob(index: number, context: any) {
  33 | 
  34 |     const jobCard = this.jobCards.nth(index);
  35 | 
> 36 |     await jobCard.scrollIntoViewIfNeeded();
     |                   ^ Error: locator.scrollIntoViewIfNeeded: Target page, context or browser has been closed
  37 | 
  38 |     const [jobPage] = await Promise.all([
  39 |       context.waitForEvent("page"),
  40 |       jobCard.click()
  41 |     ]);
  42 | 
  43 |     await jobPage.waitForLoadState();
  44 | 
  45 |     return jobPage;
  46 |   }
  47 | 
  48 | }
```