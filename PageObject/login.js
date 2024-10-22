const { expect } = require('@playwright/test')

class LoginPage {
    constructor(page) {
        this.page = page
        this.username = page.locator('input[name ="username"]')
        this.password = page.locator('input[name="password"]')
        this.loginBtn = page.locator('button[type="submit"]')
        this.dashboard = page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')

    }

    async goto() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async LoginCredential(Username, pass) {
        await this.username.fill(Username)
        await this.password.fill(pass)
        await this.loginBtn.click()


    }

    async dashboardAssert() {
        await expect(this.dashboard).toBeVisible()
    }
}
module.exports = { LoginPage }