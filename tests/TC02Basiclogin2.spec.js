const { test, expect } = require('@playwright/test')

test('Verify login functionality with valid credentails', async ({ page }) => {

    //Step 1 ==> Navigate to the URL
    await page.goto('https://www.saucedemo.com/v1/')
    //Step 2 ==> Enter UserName
    await page.locator('#user-name').fill('standard_user')
    //step 3 ==> Enter Password 
    await page.locator('[data-test="password"]').fill('secret_sauce')
    //Step 4 ==> Click on login button 
    await page.locator('input[id="login-button"]').click()
    //Step 5 ==> Validations/ Assertions
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
    await expect(page).toHaveTitle('Swag Labs')
})



// ============note========
//CSS Selectors
//tagname[attr='Value'] ==> input[id="user-name"]
//by id ==> # before id attr value ==> #user-name
//by class ==> . before class attr value  ==> .btn_action
//by id/Class aatr nd value ==> [attr ='Value'] ==> [name="user-name"]
