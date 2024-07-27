const { test, expect } = require('@playwright/test')


test('verify dropdown in playwright', async ({ page }) => {

    await page.goto('https://letcode.in/dropdowns')
    await page.locator('[id="fruits"]').selectOption('1')  //select tag >option tag & selectOption('index of option')
    await expect(page.locator('[class="subtitle"]')).toBeVisible()
    await expect(page.locator('[class="subtitle"]')).toHaveText('You have selected Mango')


})