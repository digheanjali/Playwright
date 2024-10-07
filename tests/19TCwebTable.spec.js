const { test, expect } = require('@playwright/test')

test('Handling webTable in playwright', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    let table = await page.locator('#productTable')

    //1) Total number of rows and columns
    let columns = await table.locator('thead > tr >th').count()
    for (let i = 0; i < columns; i++) {
        let columnsText = await table.locator('thead > tr >th').nth(i).textContent()
        console.log(columnsText)
    }
    console.log(`Columns count = ${columns}`)

    let rowsCount = await table.locator('tbody > tr').count()
    console.log(`Rows count = ${rowsCount}`)
})

// //thead ==> Table header
//tr ==> Table row
//tbody ==> Table body
//td ==> Table data
// th ==> Table header 