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

test('verify right click() action in playwright', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#rightClickBtn').click({ button: 'right' })
    await expect(page.locator('#rightClickBtn')).toBeVisible()
    await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click')

})

test.only('verify hover() in playwright', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Actions/index.html')
    await page.getByText('Hover Over Me Third!').hover()
    await expect(page.locator('[style="float:right;"]>div>a').first()).toBeVisible()
    await expect(page.locator('[style="float:right;"]>div>a').last()).toBeVisible()
    await page.locator('[style="float:right;"]>div>a').nth(1).click()
    page.on('dialog', async simpleAlert => {
        await expect(simpleAlert.message()).toContain('Well done you clicked on the link!')
        await simpleAlert.accept()
    })

})