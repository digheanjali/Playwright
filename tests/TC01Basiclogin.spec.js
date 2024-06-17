const { test } = require('@playwright/test')

test('verify OHRM login page', async ({ page }) => {
    //AAA
    //Arrange
    //Action
    //Assertion 
    //Step 1 ==> Visit Url 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //Step 2 ==> Enter Username 
    await page.locator('input[name="username"]').fill('Admin')
    //step3==> enter password
    await page.locator('input[name="password"]').fill('admin123')
    await page.waitForTimeout(3000)
    //Step 4 ==> Click on login button 
    await page.locator('button[type="submit"]').click()
    //Step 5 ==> Assertion/ Validation
    // await page.locator('.oxd-topbar-header-breadcrumb-module')



})