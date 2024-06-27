const { test, expect } = require('@playwright/test')

test('verify cheakbox in WDUniversity', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await expect(page.locator('[value="option-1"]')).not.toBeChecked()
    await page.locator('[value="option-1"]').check()
    await expect(page.locator('[value="option-1"]')).toBeChecked()
    await page.locator('[value="option-2"]').check()
    await expect(page.locator('[value="option-2"]')).toBeChecked()
})

test.only('verify radio button', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await expect(page.locator('[value="green"]')).not.toBeChecked()
    await page.locator('[value="green"]').check()
    await expect(page.locator('[value="green"]')).toBeChecked()
    await expect(page.locator('[value="blue"]')).not.toBeChecked()
})