const { test, expect } = require('@playwright/test')

test('Verify datepicker with js values in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Datepicker/index.html')
    const date = new Date()
    date.setDate(date.getDate() + 200)
    // console.log(date.getDate())//Current date 
    // console.log(date.getMonth())//index of cureent month 
    // console.log(date.getFullYear())//current year 
    //0    1     2     3    4   5    6    7   8   9   10  11  
    //jan feb  march april may june july Aug sep oct  nov  dec

    let d = date.getDate()
    let m = date.getMonth() + 1 //current month index
    let y = date.getFullYear()
    console.log(m)
    //let mnt = date.toLocaleString('default',{month:'short'})//current month in short string
    let mnt = date.toLocaleString('default', { month: 'long' })//current month in long string
    console.log(mnt)
    //24/03/2025
    // let mm = `${0}${m}`
    // console.log(mm)
    //DD/MM/yy
    let DD = `${d}/${m}/${y}`
    console.log(DD)
    let fututeMntYear = `${mnt} ${y}`
    console.log(fututeMntYear)
    await page.locator('#datepicker').click()
    while (true) {
        let monthYear = await page.locator('[class="datepicker-switch"]').first().textContent()
        console.log(monthYear)
        if (monthYear === fututeMntYear) {
            break
        }
        await page.locator('[class="next"]').first().click()
    }
    let dayCount = await page.locator('[class="day"]').count()
    console.log(dayCount)
    for (let i = 0; i < dayCount; i++) { //012
        let text = await page.locator('[class="day"]').nth(i).textContent()
        // console.log(text)
        if (text == d) {
            await page.locator('[class="day"]').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(3000)
})