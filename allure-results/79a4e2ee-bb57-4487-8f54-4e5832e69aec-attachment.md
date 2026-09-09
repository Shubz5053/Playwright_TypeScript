# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: d_applyJobs.spec.ts >> Apply For Job
- Location: src\tests\d_applyJobs.spec.ts:6:5

# Error details

```
Error: browserContext.close: Test ended.
Browser logs:

<launching> C:\Users\Shubham Sakhare\AppData\Local\ms-playwright\chromium-1217\chrome-win64\chrome.exe --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AvoidUnnecessaryBeforeUnloadCheckSync,BoundaryEventDispatchTracksNodeRemoval,DestroyProfileOnBrowserClose,DialMediaRouteProvider,GlobalMediaControls,HttpsUpgrades,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate,AutoDeElevate,RenderDocument,OptimizationHints --enable-features=CDPScreenshotNewSurface --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --edge-skip-compat-layer-relaunch --enable-automation --disable-infobars --disable-search-engine-choice-screen --disable-sync --enable-unsafe-swiftshader --no-sandbox --user-data-dir=C:\Users\SHUBHA~1\AppData\Local\Temp\playwright_chromiumdev_profile-TJOkl4 --remote-debugging-pipe --no-startup-window
<launched> pid=15296
[pid=15296][err] [15296:12176:0909/220443.632:ERROR:google_apis\gcm\engine\registration_request.cc:291] Registration response error message: PHONE_REGISTRATION_ERROR
[pid=15296][err] [15296:12176:0909/220443.632:ERROR:google_apis\gcm\engine\registration_request.cc:291] Registration response error message: PHONE_REGISTRATION_ERROR
[pid=15296][err] [15296:12176:0909/220443.709:ERROR:google_apis\gcm\engine\mcs_client.cc:700]   Error code: 401  Error message: Authentication Failed: wrong_secret
[pid=15296][err] [15296:12176:0909/220443.709:ERROR:google_apis\gcm\engine\mcs_client.cc:702] Failed to log in to GCM, resetting connection.
[pid=15296][err] [15296:12176:0909/220511.900:ERROR:google_apis\gcm\engine\registration_request.cc:291] Registration response error message: DEPRECATED_ENDPOINT
[pid=15296][err] [15296:12176:0909/220558.942:ERROR:google_apis\gcm\engine\registration_request.cc:291] Registration response error message: DEPRECATED_ENDPOINT
[pid=15296] <gracefully close start>
```