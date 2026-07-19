# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.setup.ts >> login with valid user
- Location: src\tests\auth.setup.ts:12:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('a[id=\'login_Layer\']')

```

```
Error: apiRequestContext._wrapApiCall: Target page, context or browser has been closed
```