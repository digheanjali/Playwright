const { test, expect } = require('@playwright/test')

//Types of dropdown
// Static Dropdown
//Dynyamic dropdown

test('Handling static dropdown in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption('2')
    let result = await page.locator('[class="subtitle"]')
    expect(result).toBeVisible()
    expect(result).toHaveText('You have selected Orange')
})

test('Handling static dropdown using lablel parameter', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption({ label: 'Orange' })
    let result = await page.locator('[class="subtitle"]')
    expect(result).toBeVisible()
    expect(result).toHaveText('You have selected Orange')
})

test('Handling static dropdown 3', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#superheros').selectOption('ca')
    let result2 = await page.locator('[class="subtitle"]')
    expect(result2).toBeVisible()
    expect(result2).toHaveText('You have selected Captain America')
})

test.only('Handling static dropdown 4', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#lang').selectOption({ label: "Swift" })
    let result3 = await page.locator('[class="subtitle"]')
    expect(result3).toBeVisible()
    expect(result3).toHaveText('You have selected Swift')
})