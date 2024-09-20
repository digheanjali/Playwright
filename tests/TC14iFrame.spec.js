

const { test, expect } = require("@playwright/test")

//1st way 
test('Handling Iframeby .framelocator in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/frame')
    //await page.locator('[placeholder="Enter name"]').fill('Minskole')
    let frame = await page.frameLocator('#firstFr')
    await frame.locator('[placeholder="Enter name"]').fill('Minskole')
    expect(frame.locator('[placeholder="Enter name"]')).toBeVisible()
    await page.waitForTimeout(3000)
})


//2nd way by .frame method by passing name attr
test('Handling iframe by .frame method', async ({ page }) => {
    await page.goto('https://letcode.in/frame')
    let frame1 = await page.frame('firstFr')
    await frame1.locator('[name="fname"]').fill('Anjali')
    await frame1.locator('[name="lname"]').fill('Pawase')
    await expect(frame1.locator('[name="fname"]')).toBeVisible()
    await expect(frame1.locator('[name="lname"]')).toBeVisible()
    await expect(frame1.locator('[class="title has-text-info"]'))
        .toHaveText('You have entered Anjali Pawase')
    await page.waitForTimeout(3000)
})



// 3rd way by passing URL to .frame method

test.only('Verify Iframe by by url to .frame method', async ({ page }) => {
    await page.goto('https://letcode.in/frame')
    let frame3 = await page.frame({ url: 'https://letcode.in/frameUI' })
    await frame3.locator('[name="fname"]').fill('Anjali')
    await frame3.locator('[name="lname"]').fill('Dighe')
    await expect(frame3.locator('[name="fname"]')).toBeVisible()
    await expect(frame3.locator('[name="lname"]')).toBeVisible()
    await expect(frame3.locator('[class="title has-text-info"]'))
        .toHaveText('You have entered Anjali Dighe')
})