const { test, expect } = require('@playwright/test')

// MouseActions==> click() 
// dblclick()
// rightclick()
// hover()

test('verify dblclick() mouse action in playwright', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons')
    await page.locator('[id="doubleClickBtn"]').dblclick()
    await expect(page.locator('[id="doubleClickBtn"]')).toBeVisible()
    await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click')

})

test.only('verify right click() action in playwright', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#rightClickBtn').click({ button: 'right' })
    await expect(page.locator('#rightClickBtn')).toBeVisible()
    await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click')

})