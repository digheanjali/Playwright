const { test, expect } = require('@playwright/test')

test('Handling radio button in playwright', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/radio.html')
    await page.locator('#vfb-7-1').check()
    await expect(page.locator('#vfb-7-1')).toBeChecked()
    await expect(page.locator('#vfb-7-3')).not.toBeChecked()
    await page.locator('#vfb-7-3').check()
    await expect(page.locator('#vfb-7-3')).toBeChecked()
})