import { test, expect } from "@playwright/test";
import { recommendedJobs } from "../pages/recommendedjobs";
import { JobDetailsPage } from "../pages/JobDetailsPage";
import jobData from "../testData/jobDetails.json";

test("Apply For Job", async ({ page }) => {
  const login = new recommendedJobs(page);
  await login.navigateToRecommendedJobs();
  const jobsPage = new recommendedJobs(page);
  await jobsPage.searchJobs(jobData.searchKeyword);
  await jobsPage.RecommendedFilter();
  await jobsPage.Datelist();
  await page.waitForTimeout(5000);
  const context = page.context();
  const count = await jobsPage.getJobCount();
  console.log(`Total Jobs : ${count}`);
  for (let i = 0; i < count; i++) {
    const jobPage = await jobsPage.openJob(i, context);
    const job = new JobDetailsPage(jobPage);
    try {
      const button = await job.getVisibleButton();
      const buttonText = (await button.textContent())?.trim();
      if (buttonText === "Apply") {
        await button.click();
        await jobPage.waitForTimeout(5000);
        if (!(await job.chatbot.isVisible())) {
          await expect(job.appliedText).toContainText("Applied to");
          console.log(`✅ Job ${i + 1} Applied Successfully`);
        }
      } else {
        console.log(`❌ Job ${i + 1} Please Apply Manually`);
      }
    } catch (error) {
      console.log(`Error on Job ${i + 1}`, error);
    } finally {
      await jobPage.close();
    }
  }
});


