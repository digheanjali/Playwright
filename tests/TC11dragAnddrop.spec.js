const { test, expect } = require('@playwright/test')

test('verify drag and drop ', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    let rome = await page.locator('[id="box6"]')
    let italy = await page.locator('[id="box106"]')
    await rome.dragTo(italy)
    expect(rome).toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(3000)
})

test.only('Verify drag and drop using mouse actions', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box6').hover()
    await page.mouse.down()
    await page.locator('#box106').hover()
    await page.mouse.up()
    await page.waitForTimeout(4000)
    await expect(await page.locator('#box6')).toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
})