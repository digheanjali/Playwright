const { test, expect } = require('@playwright/test')

test('Handling radio button in playwright', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/radio.html')
    await page.locator('#vfb-7-1').check()
    await expect(page.locator('#vfb-7-1')).toBeChecked()
    await expect(page.locator('#vfb-7-3')).not.toBeChecked()
    await page.locator('#vfb-7-3').check()
    await expect(page.locator('#vfb-7-3')).toBeChecked()
})

test('Handling cheakbox in playwrite', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/radio.html')
    let cheakbox = await page.locator('#vfb-6-0')   ///store locator in variable
    await expect(page.locator('#vfb-6-0')).not.toBeChecked
    await cheakbox.check()
    await expect(cheakbox).toBeChecked
    await cheakbox.click()
    await expect(cheakbox).not.toBeChecked


})

test.only('Handling checkboxes in playwright with click method', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/radio.html')
    let checkbox2 = await page.locator('#vfb-6-1')
    checkbox2.check()
    await expect(checkbox2).toBeChecked()
    await checkbox2.click()
    //if cheakbox alredy cheak and we aplay click method on same cheakbox then it will be uncheak 
    // and we aplay directly click method on uncheaked cheakbox then it will be a cheaked
    await expect(checkbox2).not.toBeChecked()
})



