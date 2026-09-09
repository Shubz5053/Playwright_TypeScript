# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: d_applyJobs.spec.ts >> Apply For Job
- Location: src\tests\d_applyJobs.spec.ts:6:5

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Test ended.
Call log:
  - waiting for locator('div[class=\' row1\']').nth(1)

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
  9  |   readonly recommendedFilter: Locator;
  10 |   readonly datelist: Locator;
  11 | 
  12 |   constructor(page: Page) {
  13 |     this.page = page;
  14 |     this.searchIcon = page.locator('button[aria-label="Search jobs here"]');
  15 |     this.searchTextbox = page.locator('input[placeholder="Enter keyword / designation / companies"]');
  16 |     this.searchButton = page.locator("(//button[@type='button'])[1]");
  17 |     this.jobCards = page.locator("div[class=' row1']");
  18 |     this.recommendedFilter = page.locator('button[id = "filter-sort"]');
  19 |     this.datelist = page.locator('li[title = "Date"]');
  20 |   }
  21 | 
  22 |   async RecommendedFilter() {
  23 |     await this.recommendedFilter.click();
  24 |   }
  25 | 
  26 |   async Datelist() {
  27 |     await this.datelist.click();
  28 |   }
  29 | 
  30 |   async navigateToRecommendedJobs() {
  31 |     await this.page.goto('/mnjuser/recommendedjobs');
  32 |   }
  33 | 
  34 |   async searchJobs(keyword: string) {
  35 |     await this.searchIcon.click();
  36 |     await this.searchTextbox.fill(keyword);
  37 |     await this.searchButton.click();
  38 |   }
  39 | 
  40 |   async getJobCount() {
  41 |     return await this.jobCards.count();
  42 |   }
  43 | 
  44 |   async openJob(index: number, context: any) {
  45 | 
  46 |     const jobCard = this.jobCards.nth(index);
  47 | 
> 48 |     await jobCard.scrollIntoViewIfNeeded();
     |                   ^ Error: locator.scrollIntoViewIfNeeded: Test ended.
  49 | 
  50 |     const [jobPage] = await Promise.all([
  51 |       context.waitForEvent("page"),
  52 |       jobCard.click()
  53 |     ]);
  54 | 
  55 |     await jobPage.waitForLoadState();
  56 | 
  57 |     return jobPage;
  58 |   }
  59 | 
  60 | }
```