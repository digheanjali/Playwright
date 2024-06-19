const { test, expect } = require('@playwright/test')

test('verify OHRM login page', async ({ page }) => {
    //AAA
    //Arrange
    //Action
    //Assertion 

    let dashboardEle = page.locator('.oxd-topbar-header-breadcrumb-module')
    //Step 1 ==> Visit Url 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //Step 2 ==> Enter Username 
    await page.locator('input[name ="username"]').fill('Admin')
    //step 3 ==> Enter Password
    await page.locator('input[name="password"]').fill('admin123')
    //Step 4 ==> Click on login button 
    await page.locator('button[type="submit"]').click()
    //Step 5 ==> Assertion/ Validation 
    await expect(dashboardEle).toBeVisible()
    await expect(dashboardEle).toHaveText('Dashboard')
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

})

test.only('verify OHRM login page with invalid credentials', async ({ page }) => {

    //step1 ==> visit the url
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //step2 ==> Enter name
    await page.locator('input[name="username"]').fill('anjali')
    //step3 ==> Enter password
    await page.locator('input[name="password"]').fill('jhgdhf')
    //step4 ==> Click on login button
    await page.locator('[type="submit"]').click()
    //step5 ==> Assertion/validation

    await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials')
    await expect(page.locator('[alt="company-branding"]')).toBeVisible()
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')



})