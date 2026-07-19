# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: b_updateprofile.spec.ts >> Upload Resume
- Location: src\tests\b_updateprofile.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.setInputFiles: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[value=\'Update resume\']')
    - locator resolved to <input disabled type="button" value="Update resume" class="dummyUpload typ-14Bold"/>
    34 × locator resolved to <input type="button" value="Update resume" class="dummyUpload typ-14Bold"/>

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e5]:
    - link "Naukri.com" [ref=e6] [cursor=pointer]:
      - /url: https://www.naukri.com
      - img "Naukri.com" [ref=e7]
    - navigation "Main navigation":
      - list [ref=e8]:
        - listitem [ref=e9]:
          - link "Jobs 2" [ref=e10] [cursor=pointer]:
            - /url: /mnjuser/recommendedjobs
            - generic [ref=e11]: Jobs
            - generic [ref=e12]: "2"
        - listitem [ref=e13]:
          - link "Companies" [ref=e14] [cursor=pointer]:
            - /url: https://www.naukri.com/companies-hiring-in-india?src=gnbCompanies_homepage_srch
            - generic [ref=e15]: Companies
        - listitem [ref=e16]:
          - link "Services 1" [ref=e17] [cursor=pointer]:
            - /url: https://resume.naukri.com/?fftid=100001
            - generic [ref=e18]: Services
            - generic [ref=e19]: "1"
    - generic [ref=e20] [cursor=pointer]:
      - button "Search jobs here" [ref=e21]
      - generic [ref=e22]: Search jobs here
      - button [ref=e23]:
        - generic [ref=e24]: 
    - link "naukri360-pill naukri360-pill naukri360-pill naukri360-pill naukri360-pill naukri360-pill" [ref=e26] [cursor=pointer]:
      - /url: /naukri360
      - generic [ref=e27]:
        - img "naukri360-pill" [ref=e29]
        - img "naukri360-pill" [ref=e31]
        - img "naukri360-pill" [ref=e33]
        - img "naukri360-pill" [ref=e35]
        - img "naukri360-pill" [ref=e37]
        - img "naukri360-pill" [ref=e39]
    - button "Job Agent" [ref=e41]:
      - img "Job Agent" [ref=e42] [cursor=pointer]
    - button "Notifications" [ref=e44] [cursor=pointer]:
      - generic [ref=e45]: 
    - button "Open profile menu" [ref=e47] [cursor=pointer]:
      - generic [ref=e52]:
        - img "naukri user profile image" [ref=e53]
        - generic [ref=e54]: "2"
  - generic [ref=e60]:
    - generic [ref=e63]:
      - generic [ref=e68]:
        - generic [ref=e69] [cursor=pointer]:
          - img [ref=e71]
          - generic [ref=e74]:
            - img [ref=e75]
            - generic [ref=e76]: 100%
        - generic [ref=e77]:
          - generic [ref=e79]:
            - generic [ref=e80]:
              - generic [ref=e81]: Shubham Balasaheb Sakhare
              - emphasis [ref=e82] [cursor=pointer]: editOneTheme
            - generic [ref=e83]:
              - generic [ref=e85]:
                - text: SDET Automation Test Engineer
                - generic [ref=e86]: at CanWill Technologies
              - generic [ref=e88]: Profile last updated - Today
          - generic [ref=e89]:
            - generic [ref=e90]:
              - generic [ref=e92]:
                - emphasis [ref=e93]: locationOt
                - generic "Pune, INDIA" [ref=e94]
              - generic [ref=e96]:
                - emphasis [ref=e97]: experienceOneTheme
                - generic "3 Year(s)" [ref=e99]:
                  - generic [ref=e100]: 3 Years
              - generic [ref=e103]:
                - emphasis [ref=e104]: walletOneTheme
                - generic "₹ Four lakh twenty thousand" [ref=e105]:
                  - generic [ref=e106]: ₹
                  - text: 4,20,000
            - generic [ref=e107]:
              - generic [ref=e109]:
                - generic [ref=e110]:
                  - emphasis [ref=e111]: phoneOneTheme
                  - generic "9637835053" [ref=e112]
                - emphasis [ref=e114]: verifiedOneTheme
              - generic [ref=e116]:
                - generic [ref=e117]:
                  - emphasis [ref=e118]: mailOneTheme
                  - generic "shubhamsakhare2108@gmail.com" [ref=e119]
                - emphasis [ref=e122]: verifiedOneTheme
              - generic [ref=e124]:
                - emphasis [ref=e125]: calenderOneTheme
                - generic "15 Days or less notice period" [ref=e126]
      - generic [ref=e127]:
        - list [ref=e131]:
          - listitem [ref=e132]: Quick links
          - listitem [ref=e133]:
            - text: Resume
            - link "Update" [ref=e134] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e135]: Resume headline
          - listitem [ref=e136]: Key skills
          - listitem [ref=e137]:
            - text: Employment
            - link "Add" [ref=e138] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e139]:
            - text: Education
            - link "Add" [ref=e140] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e141]: IT skills
          - listitem [ref=e142]:
            - text: Projects
            - link "Add" [ref=e143] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e144]: Profile summary
          - listitem [ref=e145]: Accomplishments
          - listitem [ref=e146]: Career profile
          - listitem [ref=e147]: Personal details
        - generic [ref=e148]:
          - generic [ref=e155] [cursor=pointer]:
            - generic [ref=e156]:
              - img "NaukriPro" [ref=e158]
              - generic [ref=e159]:
                - generic [ref=e160]: Power up with
                - heading "up to 2x recruiter actions" [level=1] [ref=e163]
            - generic [ref=e164]:
              - button "Become a Pro":
                - generic: Become a Pro
              - generic [ref=e166]: 25% off
          - generic [ref=e168]:
            - generic [ref=e171]: Resume
            - generic [ref=e172]:
              - generic [ref=e174]:
                - generic [ref=e176]:
                  - generic "Shubham_Sakhare_AutomationTester_Resume.pdf" [ref=e178]
                  - generic [ref=e179]: Uploaded on Jul 16, 2026
                - generic [ref=e181]:
                  - generic "Click here to download your resume" [ref=e183] [cursor=pointer]: downloadOneTheme
                  - generic "Click here to delete your resume" [ref=e185] [cursor=pointer]: deleteOneTheme
              - generic [ref=e189]:
                - generic [ref=e190]:
                  - generic [ref=e192]:
                    - button "Choose File" [ref=e193] [cursor=pointer]
                    - button "Update resume" [ref=e195] [cursor=pointer]
                  - list
                - generic [ref=e196]: "Supported Formats: doc, docx, rtf, pdf, upto 2 MB"
          - generic [ref=e199]:
            - generic [ref=e200]:
              - text: Resume headline
              - generic [ref=e201] [cursor=pointer]: editOneTheme
            - generic [ref=e204]: Detail-oriented Software Development Engineer in Test (SDET) with 3+ years of hands-on experience in automation testing, test framework development, and CI/CD integration. Proficient in Playwright with JavaScript and Selenium with Java
          - generic [ref=e207]:
            - generic [ref=e208]:
              - text: Key skills
              - generic [ref=e209] [cursor=pointer]: editOneTheme
            - generic [ref=e211]:
              - generic "Playwright" [ref=e212]
              - generic "Javascript" [ref=e213]
              - generic "Postman" [ref=e214]
              - generic "Jenkins" [ref=e215]
              - generic "Selenium" [ref=e216]
              - generic "Java" [ref=e217]
              - generic "SQL" [ref=e218]
          - generic [ref=e222]:
            - generic [ref=e223]:
              - text: Employment
              - generic [ref=e224]: Add employment
            - generic [ref=e226]:
              - generic [ref=e227]:
                - generic "SDET Automation Test Engineer" [ref=e228]
                - generic [ref=e229] [cursor=pointer]: editOneTheme
              - generic "CanWill Technologies" [ref=e231]
              - generic [ref=e232]:
                - generic [ref=e233]: Full-time
                - generic [ref=e235]: Jun 2023 to Present (3 years 2 months)
              - generic [ref=e236]: 15 Days or less Notice Period
              - generic [ref=e239]:
                - text: Software Development Engineer in Test (SDET) with hands-on experience in JavaScript and TypeScript based test automation using Playwright and Selenium. Skilled in BDD framework implementation with Cucumber creating reusable automation frameworks, and maintaining scalable test suites. ...
                - link "Read More" [ref=e240] [cursor=pointer]:
                  - /url: javascript:;
              - generic [ref=e241]:
                - generic [ref=e242]: "Top 5 key skills:"
                - generic [ref=e243]: Playwright,Javascript,Selenium,Java
          - generic [ref=e247]:
            - generic [ref=e248]:
              - text: Education
              - generic [ref=e249]: Add education
            - generic [ref=e250]:
              - generic [ref=e252]:
                - generic [ref=e253]:
                  - generic "B.Tech / B.E." [ref=e254]
                  - generic "Information Technology" [ref=e255]
                  - generic [ref=e256] [cursor=pointer]: editOneTheme
                - generic [ref=e257]: Pune University
                - generic [ref=e258]:
                  - text: 2019-2022
                  - generic [ref=e259]: Full Time
              - generic [ref=e261] [cursor=pointer]: Add doctorate/PhD
              - generic [ref=e262] [cursor=pointer]: Add masters/post-graduation
              - generic [ref=e263] [cursor=pointer]: Add class XII
              - generic [ref=e264] [cursor=pointer]: Add class X
          - generic [ref=e268]:
            - generic [ref=e269]:
              - text: IT skills
              - generic [ref=e270]: Add details
            - list [ref=e273]:
              - listitem [ref=e274]:
                - generic [ref=e275]: Skills
                - generic [ref=e276]: Version
                - generic [ref=e277]: Last used
                - generic [ref=e278]: Experience
              - listitem [ref=e280]:
                - generic [ref=e281]: Java
                - generic [ref=e282]: "-"
                - generic [ref=e283]: "2026"
                - generic [ref=e284]: 3 Years 0 Month
                - generic [ref=e285] [cursor=pointer]: editOneTheme
              - listitem [ref=e286]:
                - generic [ref=e287]: Selenium
                - generic [ref=e288]: "-"
                - generic [ref=e289]: "2026"
                - generic [ref=e290]: 3 Years 0 Month
                - generic [ref=e291] [cursor=pointer]: editOneTheme
              - listitem [ref=e292]:
                - generic [ref=e293]: Playwright
                - generic [ref=e294]: "-"
                - generic [ref=e295]: "2026"
                - generic [ref=e296]: 3 Years 0 Month
                - generic [ref=e297] [cursor=pointer]: editOneTheme
              - listitem [ref=e298]:
                - generic [ref=e299]: Javascript
                - generic [ref=e300]: "-"
                - generic [ref=e301]: "2026"
                - generic [ref=e302]: 3 Years 0 Month
                - generic [ref=e303] [cursor=pointer]: editOneTheme
          - generic [ref=e314]:
            - generic [ref=e315]: New
            - generic [ref=e316]:
              - heading "Diversity & inclusion" [level=1] [ref=e318]
              - img [ref=e321] [cursor=pointer]
            - heading "Share details to attract recruiters who value people from different backgrounds" [level=3] [ref=e323]
            - heading "Disability status" [level=4] [ref=e325]
            - heading "Do not have disability" [level=3] [ref=e327]
            - heading "Military experience" [level=4] [ref=e329]
            - heading "Never served" [level=3] [ref=e331]
            - heading "Career break" [level=4] [ref=e333]
            - heading "Have not taken" [level=3] [ref=e335]
    - text: ;
  - contentinfo [ref=e338]:
    - generic [ref=e341]:
      - generic [ref=e342]:
        - link "Naukri.com" [ref=e343] [cursor=pointer]:
          - /url: https://www.naukri.com
          - img "Naukri.com" [ref=e344]
        - generic [ref=e345]:
          - generic "Connect with us" [ref=e346]
          - link "Follow Naukri.com on Facebook" [ref=e347] [cursor=pointer]:
            - /url: https://www.facebook.com/Naukri
            - img "Follow Naukri.com on Facebook" [ref=e348]
          - link "Follow Naukri.com on Instagram" [ref=e349] [cursor=pointer]:
            - /url: https://instagram.com/naukridotcom/
            - img "Follow Naukri.com on Instagram" [ref=e350]
          - link "Follow Naukri.com on X" [ref=e351] [cursor=pointer]:
            - /url: https://twitter.com/naukri
            - img "Follow Naukri.com on X" [ref=e352]
          - link "Follow Naukri.com on LinkedIn" [ref=e353] [cursor=pointer]:
            - /url: http://www.linkedin.com/company/naukri.com
            - img "Follow Naukri.com on LinkedIn" [ref=e354]
      - list [ref=e356]:
        - listitem [ref=e357]:
          - link "About us" [ref=e358] [cursor=pointer]:
            - /url: https://infoedge.in
        - listitem [ref=e359]:
          - link "Careers" [ref=e360] [cursor=pointer]:
            - /url: https://careers.infoedge.com/
        - listitem [ref=e361]:
          - link "Employer home" [ref=e362] [cursor=pointer]:
            - /url: https://www.naukri.com/recruit/login
        - listitem [ref=e363]:
          - link "Sitemap" [ref=e364] [cursor=pointer]:
            - /url: https://www.naukri.com/sitemap/sitemap.php
        - listitem [ref=e365]:
          - link "Credits" [ref=e366] [cursor=pointer]:
            - /url: https://www.naukri.com/credits
      - list [ref=e368]:
        - listitem [ref=e369]:
          - link "Help center" [ref=e370] [cursor=pointer]:
            - /url: https://www.naukri.com/faq/job-seeker?utm_source=footer
        - listitem [ref=e371]:
          - link "Summons/Notices" [ref=e372] [cursor=pointer]:
            - /url: https://w5.naukri.com/summons-notices-form/
        - listitem [ref=e373]:
          - link "Grievances" [ref=e374] [cursor=pointer]:
            - /url: https://w5.naukri.com/grievances-form/
        - listitem [ref=e375]:
          - link "Report issue" [ref=e376] [cursor=pointer]:
            - /url: https://w5.naukri.com/fdbck/main/feedback.php?app_id=15
      - list [ref=e378]:
        - listitem [ref=e379]:
          - link "Privacy policy" [ref=e380] [cursor=pointer]:
            - /url: https://www.naukri.com/privacypolicy
        - listitem [ref=e381]:
          - link "Terms & conditions" [ref=e382] [cursor=pointer]:
            - /url: https://www.naukri.com/termsconditions
        - listitem [ref=e383]:
          - link "Fraud alert" [ref=e384] [cursor=pointer]:
            - /url: https://www.naukri.com/imposter/report-fake-job-recruiter
        - listitem [ref=e385]:
          - link "Trust & safety" [ref=e386] [cursor=pointer]:
            - /url: https://www.naukri.com/jobsearch/trust-safety
      - generic [ref=e387]:
        - generic [ref=e388]: Apply on the go
        - generic [ref=e389]: Get real-time job updates on our App
        - generic [ref=e390]:
          - link "naukri app download" [ref=e391] [cursor=pointer]:
            - /url: https://play.google.com/store/apps/details?id=naukriApp.appModules.login&hl=en&utm_source=naukri&utm_medium=footer
            - img "naukri app download" [ref=e392]
          - link "naukri app download" [ref=e393] [cursor=pointer]:
            - /url: https://itunes.apple.com/in/app/naukri.com-job-search/id482877505?mt=8
            - img "naukri app download" [ref=e394]
    - generic [ref=e396]:
      - generic [ref=e397]:
        - link "Info Edge (India) Ltd." [ref=e399] [cursor=pointer]:
          - /url: http://infoedge.in
          - img "Info Edge (India) Ltd." [ref=e400]
        - generic [ref=e401]:
          - generic [ref=e402]: All trademarks are the property of their respective owners
          - generic [ref=e403]: All rights reserved © 2026 Info Edge (India) Ltd.
      - generic [ref=e404]: Our businesses
      - list [ref=e407]:
        - listitem [ref=e408]:
          - link "99acres.com" [ref=e410] [cursor=pointer]:
            - /url: https://www.99acres.com/
            - img "99acres.com" [ref=e411]
        - listitem [ref=e412]:
          - link "Jeevansathi.com" [ref=e414] [cursor=pointer]:
            - /url: https://www.jeevansathi.com/
            - img "Jeevansathi.com" [ref=e415]
        - listitem [ref=e416]:
          - link "NaukriGulf.com" [ref=e418] [cursor=pointer]:
            - /url: https://www.naukrigulf.com/
            - img "NaukriGulf.com" [ref=e419]
        - listitem [ref=e420]:
          - link "Shiksha.com" [ref=e422] [cursor=pointer]:
            - /url: https://www.shiksha.com/
            - img "Shiksha.com" [ref=e423]
        - listitem [ref=e424]:
          - link "IIMJobs.com" [ref=e426] [cursor=pointer]:
            - /url: https://www.iimjobs.com
            - img "IIMJobs.com" [ref=e427]
        - listitem [ref=e428]:
          - link "hirist.tech" [ref=e430] [cursor=pointer]:
            - /url: https://www.hirist.tech/
            - img "hirist.tech" [ref=e431]
        - listitem [ref=e432]:
          - link "JobHai.com" [ref=e434] [cursor=pointer]:
            - /url: https://www.jobhai.com
            - img "JobHai.com" [ref=e435]
        - listitem [ref=e436]:
          - link "Doselect.com" [ref=e438] [cursor=pointer]:
            - /url: https://doselect.com/
            - img "Doselect.com" [ref=e439]
        - listitem [ref=e440]:
          - link "naukri.com/minis" [ref=e442] [cursor=pointer]:
            - /url: https://www.naukri.com/minis
            - img "naukri.com/minis" [ref=e443]
        - listitem [ref=e444]:
          - link "codingninjas.com" [ref=e446] [cursor=pointer]:
            - /url: https://www.codingninjas.com/?utm_source=naukri&utm_medium=desktop-footer
            - img "codingninjas.com" [ref=e447]
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class updateProfile {
  4  |   readonly page: Page;
  5  | 
  6  |   readonly viewProfileButton: Locator;
  7  |   readonly editProfileButton: Locator;
  8  |   readonly editProfileForm: Locator;
  9  |   readonly saveButton: Locator;
  10 |   readonly updatedname: Locator;
  11 |   readonly successMessage: Locator;
  12 |   readonly uploadResumeButton: Locator;
  13 | 
  14 |   constructor(page: Page) {
  15 |     this.page = page;
  16 |     this.viewProfileButton = page.locator("div[class='view-profile-wrapper']");
  17 |     this.editProfileButton = page.locator("em[class='icon edit ']");
  18 |     this.editProfileForm = page.locator("input[placeholder='Enter Your Name']");
  19 |     this.saveButton = page.locator("button[id='saveBasicDetailsBtn']");
  20 |     this.updatedname = page.locator("span[class='fullname']");
  21 |     this.successMessage = page.locator('span[class="success-text"]').getByText('Profile updated successfully');
  22 |     this.uploadResumeButton = page.locator("input[value='Update resume']");
  23 | 
  24 |   }
  25 | 
  26 |   async navigate() {
  27 |     await this.page.goto('/mnjuser/homepage');
  28 |   }
  29 | 
  30 |   async uploadResume(filePath: string) {
> 31 |     await this.uploadResumeButton.setInputFiles(filePath);
     |     ^ Error: locator.setInputFiles: Test timeout of 30000ms exceeded.
  32 |   }
  33 | 
  34 |   async updateProfile(name: string, name1: string) {
  35 |     await this.viewProfileButton.click();
  36 |     await this.page.waitForURL('/mnjuser/profile');
  37 |     await this.editProfileButton.click();
  38 |     const value = await this.editProfileForm.inputValue();
  39 |     if (value === name) {
  40 |       await this.editProfileForm.fill(name1);
  41 |     } else {
  42 |       await this.editProfileForm.fill(name);
  43 |     }
  44 |     await this.saveButton.click();
  45 |   }
  46 | 
  47 |   async ValidateUpdatedName(name1: string, name: string) {
  48 |     await this.successMessage.waitFor({ state: 'visible' });
  49 |     const updatedNameText = await this.updatedname.textContent();
  50 |     if (updatedNameText === name) {
  51 |       expect(updatedNameText).toBe(name);
  52 |     } else {
  53 |       expect(updatedNameText).toBe(name1);
  54 |     }
  55 |   }
  56 | }
```