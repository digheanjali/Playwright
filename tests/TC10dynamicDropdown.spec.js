const { test, expect } = require('@playwright/test')


test('handling dynamic dropdown in playwright ', async ({ page }) => {

    await page.goto('https://www.redbus.in/')
    await page.locator('[id="src"]').fill('pune')
    await page.waitForSelector('[class="placeHolderMainText"]')
    let countopt = await page.locator('[class="placeHolderMainText"]').count()
    //console.log(countopt)
    // let text = await page.locator('[class="placeHolderMainText"]').last().textContent()
    // console.log(text)

    for (let i = 0; i < countopt; i++) {
        let text = await page.locator('[class="placeHolderMainText"]').nth(i).textContent()
        console.log(text)

        if (text === 'Nashik Phata') {
            await page.locator('[class="placeHolderMainText"]').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(4000)
})