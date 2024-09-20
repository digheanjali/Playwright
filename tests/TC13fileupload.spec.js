const { test, expect } = require('@playwright/test')

test('Verify fileuplode in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/File-Upload/index.html')
    await page.locator('#myFile').setInputFiles('tests/UploadData/fileUpload1.pdf')
    page.on('dialog', async alert => {
        await expect(alert.message()).toContain('Your file has now been uploaded!')
        await expect(alert.type()).toContain('alert')
        alert.accept()
    })
    await page.locator('#submit-button').click()
    await expect(page.url())
        .toContain('https://www.webdriveruniversity.com/File-Upload/index.html?filename=fileUpload1.pdf')
})


test.only('Verify multiple file uplode in playwright', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    let file1 = 'tests/UploadData/fileUpload1.pdf'
    let file2 = 'tests/UploadData/fileUpload2.pdf'
    await page.locator('#filesToUpload').setInputFiles([file1, file2])
    let filecount = await page.locator('[id="fileList"]>li').count()
    expect(filecount).toBe(2)
    expect(await page.locator('[id="fileList"]>li').first()).toHaveText('fileUpload1.pdf')
    expect(await page.locator('[id="fileList"]>li').last()).toHaveText('fileUpload2.pdf')
    console.log(filecount)
    await page.waitForTimeout(3000)
})