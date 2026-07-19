import { Page, Locator, expect } from '@playwright/test';

export class recommendedJobs {
  readonly page: Page;
  readonly searchIcon: Locator;
  readonly searchTextbox: Locator;
  readonly searchButton: Locator;
  readonly jobCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchIcon = page.locator('button[aria-label="Search jobs here"]');
    this.searchTextbox = page.locator('input[placeholder="Enter keyword / designation / companies"]');
    this.searchButton = page.locator("(//button[@type='button'])[1]");
    this.jobCards = page.locator("div[class=' row1']");
  }

  async navigateToRecommendedJobs() {
    await this.page.goto('/mnjuser/recommendedjobs');
  }

  async searchJobs(keyword: string) {
    await this.searchIcon.click();
    await this.searchTextbox.fill(keyword);
    await this.searchButton.click();
  }

  async getJobCount() {
    return await this.jobCards.count();
  }

  async openJob(index: number, context: any) {

    const jobCard = this.jobCards.nth(index);

    await jobCard.scrollIntoViewIfNeeded();

    const [jobPage] = await Promise.all([
      context.waitForEvent("page"),
      jobCard.click()
    ]);

    await jobPage.waitForLoadState();

    return jobPage;
  }

}