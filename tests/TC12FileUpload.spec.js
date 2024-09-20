const { test, expect } = require('@playwright/test')

test('Verify fileuplode in playwright', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/File-Upload/index.html')
    //let fileuplode = await page.locator('#myFile')
    await page.locator('#myFile').setInputFiles('tests/UploadData/fileUpload1.pdf')
    //fileuplode.setInputFiles('tests/UploadData/fileUpload1.pdf')
    // await page.waitForTimeout(4000)
    page.on('dialog', async simapleAlert => {
        await expect(simapleAlert.message()).toContain('Your file has now been uploaded')
        console.log(simapleAlert.type())
        await expect(simapleAlert.type()).toContain('alert')
        await simapleAlert.accept()
    })
    await page.locator('#submit-button').click()
    await expect(page.url())
        .toContain('https://www.webdriveruniversity.com/File-Upload/index.html?filename=fileUpload1.pdf')
    //tests/UploadData/fileUpload1.pdf
})