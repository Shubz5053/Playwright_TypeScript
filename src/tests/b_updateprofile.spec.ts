import { test } from '@playwright/test';
import { updateProfile } from '../pages/updateprofile';
import personalInfo from '../testdata/personalinfo.json';

test('Upload Resume', async ({ page }) => {
  const fileChooserPromise = page.waitForEvent("filechooser");
  const updateProfilePage = new updateProfile(page);
  await updateProfilePage.navigate();
  await updateProfilePage.uploadResume();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(
    "src/Files/Shubham_Sakhare_SDET_Resume.pdf"
  );
})

test('should update profile successfully', async ({ page }) => {
  const updateProfilePage = new updateProfile(page);
  await updateProfilePage.navigate();
  await updateProfilePage.updateProfile(personalInfo.name, personalInfo.name1);
  await page.locator('.spinner-wrapper').waitFor({ state: 'hidden' });
  await updateProfilePage.ValidateUpdatedName(personalInfo.name1, personalInfo.name);
}); 