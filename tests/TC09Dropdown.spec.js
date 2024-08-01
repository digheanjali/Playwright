const { test, expect } = require('@playwright/test')


test('verify  static dropdown in playwright', async ({ page }) => {

    await page.goto('https://letcode.in/dropdowns')
    await page.locator('[id="fruits"]').selectOption('1')  //select tag >option tag & selectOption('index of option')
    await expect(page.locator('[class="subtitle"]')).toBeVisible()
    await expect(page.locator('[class="subtitle"]')).toHaveText('You have selected Mango')


})


test('handling static dropdown using label parameter', async ({ page }) => {

    await page.goto('https://letcode.in/dropdowns')
    await page.locator('[id="fruits"]').selectOption({ label: 'Mango' }) //option cha text write like this { label: 'Mango' }
    let res = await page.locator('[class="subtitle"]')
    expect(res).toBeVisible()
    expect(res).toHaveText('You have selected Mango')

})

test('handling static dropdown using attr value parameter', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#superheros').selectOption('bw')   //attr value
    let result = await page.locator('[class="subtitle"]')
    expect(result).toBeVisible()
    expect(result).toHaveText('You have selected Batwoman')


})


test('Handling static dropdown 4', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('[id="lang"]').selectOption({ index: 2 }) //index of text
    let result2 = await page.locator('[class="subtitle"]')
    expect(result2).toBeVisible()
    expect(result2).toHaveText('You have selected Python')


})

test.only('Handling static dropdown 4', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('[id="country"]').selectOption({ label: 'India' })


})
