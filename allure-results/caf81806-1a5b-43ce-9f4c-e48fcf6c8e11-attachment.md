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
    49 × locator resolved to <input type="button" value="Update resume" class="dummyUpload typ-14Bold"/>

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
                - heading "AI enhanced profile" [level=1] [ref=e163]
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
          - generic [ref=e276]:
            - generic [ref=e277]: New
            - generic [ref=e278]:
              - heading "Diversity & inclusion" [level=1] [ref=e280]
              - img [ref=e283] [cursor=pointer]
            - heading "Share details to attract recruiters who value people from different backgrounds" [level=3] [ref=e285]
            - heading "Disability status" [level=4] [ref=e287]
            - heading "Do not have disability" [level=3] [ref=e289]
            - heading "Military experience" [level=4] [ref=e291]
            - heading "Never served" [level=3] [ref=e293]
            - heading "Career break" [level=4] [ref=e295]
            - heading "Have not taken" [level=3] [ref=e297]
    - text: ;
  - contentinfo [ref=e300]:
    - generic [ref=e303]:
      - generic [ref=e304]:
        - link "Naukri.com" [ref=e305] [cursor=pointer]:
          - /url: https://www.naukri.com
          - img "Naukri.com" [ref=e306]
        - generic [ref=e307]:
          - generic "Connect with us" [ref=e308]
          - link "Follow Naukri.com on Facebook" [ref=e309] [cursor=pointer]:
            - /url: https://www.facebook.com/Naukri
            - img "Follow Naukri.com on Facebook" [ref=e310]
          - link "Follow Naukri.com on Instagram" [ref=e311] [cursor=pointer]:
            - /url: https://instagram.com/naukridotcom/
            - img "Follow Naukri.com on Instagram" [ref=e312]
          - link "Follow Naukri.com on X" [ref=e313] [cursor=pointer]:
            - /url: https://twitter.com/naukri
            - img "Follow Naukri.com on X" [ref=e314]
          - link "Follow Naukri.com on LinkedIn" [ref=e315] [cursor=pointer]:
            - /url: http://www.linkedin.com/company/naukri.com
            - img "Follow Naukri.com on LinkedIn" [ref=e316]
      - list [ref=e318]:
        - listitem [ref=e319]:
          - link "About us" [ref=e320] [cursor=pointer]:
            - /url: https://infoedge.in
        - listitem [ref=e321]:
          - link "Careers" [ref=e322] [cursor=pointer]:
            - /url: https://careers.infoedge.com/
        - listitem [ref=e323]:
          - link "Employer home" [ref=e324] [cursor=pointer]:
            - /url: https://www.naukri.com/recruit/login
        - listitem [ref=e325]:
          - link "Sitemap" [ref=e326] [cursor=pointer]:
            - /url: https://www.naukri.com/sitemap/sitemap.php
        - listitem [ref=e327]:
          - link "Credits" [ref=e328] [cursor=pointer]:
            - /url: https://www.naukri.com/credits
      - list [ref=e330]:
        - listitem [ref=e331]:
          - link "Help center" [ref=e332] [cursor=pointer]:
            - /url: https://www.naukri.com/faq/job-seeker?utm_source=footer
        - listitem [ref=e333]:
          - link "Summons/Notices" [ref=e334] [cursor=pointer]:
            - /url: https://w5.naukri.com/summons-notices-form/
        - listitem [ref=e335]:
          - link "Grievances" [ref=e336] [cursor=pointer]:
            - /url: https://w5.naukri.com/grievances-form/
        - listitem [ref=e337]:
          - link "Report issue" [ref=e338] [cursor=pointer]:
            - /url: https://w5.naukri.com/fdbck/main/feedback.php?app_id=15
      - list [ref=e340]:
        - listitem [ref=e341]:
          - link "Privacy policy" [ref=e342] [cursor=pointer]:
            - /url: https://www.naukri.com/privacypolicy
        - listitem [ref=e343]:
          - link "Terms & conditions" [ref=e344] [cursor=pointer]:
            - /url: https://www.naukri.com/termsconditions
        - listitem [ref=e345]:
          - link "Fraud alert" [ref=e346] [cursor=pointer]:
            - /url: https://www.naukri.com/imposter/report-fake-job-recruiter
        - listitem [ref=e347]:
          - link "Trust & safety" [ref=e348] [cursor=pointer]:
            - /url: https://www.naukri.com/jobsearch/trust-safety
      - generic [ref=e349]:
        - generic [ref=e350]: Apply on the go
        - generic [ref=e351]: Get real-time job updates on our App
        - generic [ref=e352]:
          - link "naukri app download" [ref=e353] [cursor=pointer]:
            - /url: https://play.google.com/store/apps/details?id=naukriApp.appModules.login&hl=en&utm_source=naukri&utm_medium=footer
            - img "naukri app download" [ref=e354]
          - link "naukri app download" [ref=e355] [cursor=pointer]:
            - /url: https://itunes.apple.com/in/app/naukri.com-job-search/id482877505?mt=8
            - img "naukri app download" [ref=e356]
    - generic [ref=e358]:
      - generic [ref=e359]:
        - link "Info Edge (India) Ltd." [ref=e361] [cursor=pointer]:
          - /url: http://infoedge.in
          - img "Info Edge (India) Ltd." [ref=e362]
        - generic [ref=e363]:
          - generic [ref=e364]: All trademarks are the property of their respective owners
          - generic [ref=e365]: All rights reserved © 2026 Info Edge (India) Ltd.
      - generic [ref=e366]: Our businesses
      - list [ref=e369]:
        - listitem [ref=e370]:
          - link "99acres.com" [ref=e372] [cursor=pointer]:
            - /url: https://www.99acres.com/
            - img "99acres.com" [ref=e373]
        - listitem [ref=e374]:
          - link "Jeevansathi.com" [ref=e376] [cursor=pointer]:
            - /url: https://www.jeevansathi.com/
            - img "Jeevansathi.com" [ref=e377]
        - listitem [ref=e378]:
          - link "NaukriGulf.com" [ref=e380] [cursor=pointer]:
            - /url: https://www.naukrigulf.com/
            - img "NaukriGulf.com" [ref=e381]
        - listitem [ref=e382]:
          - link "Shiksha.com" [ref=e384] [cursor=pointer]:
            - /url: https://www.shiksha.com/
            - img "Shiksha.com" [ref=e385]
        - listitem [ref=e386]:
          - link "IIMJobs.com" [ref=e388] [cursor=pointer]:
            - /url: https://www.iimjobs.com
            - img "IIMJobs.com" [ref=e389]
        - listitem [ref=e390]:
          - link "hirist.tech" [ref=e392] [cursor=pointer]:
            - /url: https://www.hirist.tech/
            - img "hirist.tech" [ref=e393]
        - listitem [ref=e394]:
          - link "JobHai.com" [ref=e396] [cursor=pointer]:
            - /url: https://www.jobhai.com
            - img "JobHai.com" [ref=e397]
        - listitem [ref=e398]:
          - link "Doselect.com" [ref=e400] [cursor=pointer]:
            - /url: https://doselect.com/
            - img "Doselect.com" [ref=e401]
        - listitem [ref=e402]:
          - link "naukri.com/minis" [ref=e404] [cursor=pointer]:
            - /url: https://www.naukri.com/minis
            - img "naukri.com/minis" [ref=e405]
        - listitem [ref=e406]:
          - link "codingninjas.com" [ref=e408] [cursor=pointer]:
            - /url: https://www.codingninjas.com/?utm_source=naukri&utm_medium=desktop-footer
            - img "codingninjas.com" [ref=e409]
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
  27 |     await this.page.goto('mnjuser/profile');
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