const { test, expect } = require('@playwright/test')

const { LoginPage } = require('../PageObject/login')


test('Verify login functionality with valid credentails', async ({ page }) => {
    const login = new LoginPage(page)
    login.goto()
    login.LoginCredential('Admin', 'admin123')
    await page.waitForTimeout(10000)
    login.dashboardAssert()
    await expect(page).toHaveTitle('OrangeHRM')



})