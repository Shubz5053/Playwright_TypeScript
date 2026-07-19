import { Locator, Page } from "@playwright/test";

export class JobDetailsPage {

  readonly page: Page;

  readonly applyButton: Locator;
  readonly companySiteButton: Locator;
  readonly chatbot: Locator;
  readonly appliedText: Locator;

  constructor(page: Page) {

    this.page = page;

    this.applyButton = page.locator("(//button[@id='apply-button'])[1]");

    this.companySiteButton = page.locator("(//button[@id='company-site-button'])[1]");

    this.chatbot = page.locator("div[class='chatbot_DrawerContentWrapper']");

    this.appliedText = page.locator("div[class='job-title-text']");
  }

  async getVisibleButton() {

    if (await this.applyButton.isVisible())
      return this.applyButton;

    return this.companySiteButton;
  }
}