
const { test, expect } = require('@playwright/test')
// locator 7 mathods
// 8) .locator ==>regular method
//toHaveAttribute==>two value('attr name','attr value')

// 1) getbyAltText ==> Alt attribute value

test('verify getByAltText method in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/test#google_vignette')
    let ele = await page.getByAltText('letcode')
    await expect(page.getByAltText('letcode')).toBeVisible()
    expect(ele).toHaveAttribute('src', '../../assets/logo.png')
    expect(ele).toHaveAttribute('alt', 'letcode')
})

// 2) getByLabel ==> label tag name ==> text or ==> arial-label attribute  ==> attr value 

test('Verify getByLabel method in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/test#google_vignette')
    let ele2 = page.getByLabel('main navigation')
    await expect(page.getByLabel('main navigation')).toBeVisible()
    await expect(ele2).toHaveAttribute('role', 'navigation')
})
// 3) getByPlaceholder ==> placeholder attrbute value 

test('Verify getByPlaceholder method in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    let fstName = await page.getByPlaceholder('First Name')
    expect(fstName).toBeVisible()
    expect(fstName).toHaveClass('feedback-input')
    expect(fstName).toHaveAttribute('name', 'first_name')
    fstName.fill('Minskole')
    await page.waitForTimeout(3000)
})
// 4) getByRole ==> role as per element and text 

test('Verify getByRole method in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    let check1 = await page.getByRole('checkbox', { name: "Option 1" })
    check1.check()
    await page.waitForTimeout(3000)
    expect(check1).toBeVisible()
    expect(check1).toHaveAttribute('type', 'checkbox')
})
// 5) getByText ==> Text value

test('Verify getByText method in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    let ele2 = await page.getByText('WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))')
    await expect(ele2).toBeVisible()
    await expect(ele2).toHaveId('nav-title')
})
// 6) getByTitle ==> title attribute value

test('Verify getByTitle method in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/test#google_vignette')
    let ele3 = await page.getByTitle('Koushik Chatterjee')
    await expect(ele3).toBeVisible()
    await expect(ele3).toHaveText(' Koushik Chatterjee ')
    await expect(ele3).toHaveAttribute('target', '_blank')
})
// 7) getByTestId ==> data-testId atrribute value


test('Verify getByTestId method in playwright', async ({ page }) => {
    await page.goto('https://www.atlassian.com/')
    let searchIcon = await page.getByTestId('global-nav-search-icon')
    searchIcon.first().click()
    await expect(page.locator('#autocomplete-0-input')).toBeVisible()
    await page.waitForTimeout(3000)
})
