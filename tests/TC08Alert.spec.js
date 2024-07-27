const { test, expect } = require("@playwright/test")
const exp = require("constants")

//types of alerts 
// js simple alert 
// js confirm alert 
// js prompt alert 


test('Handling Simple Alert in playwright', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async simpleAlert => {
        // console.log(simpleAlert.message())
        await expect(simpleAlert.message()).toContain('I am a JS Alert')
        await simpleAlert.accept()
        await expect(simpleAlert.type()).toContain('alert')
        console.log(simpleAlert.type())

    })
    await page.locator('button[onclick="jsAlert()"]').click()
    await expect(page.locator('[id="result"]')).toHaveText('You successfully clicked an alert')
    await page.waitForTimeout(3000)

})

test('handling confirm alert in playwright', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async confirmAlert => {
        console.log(confirmAlert.message())
        await expect(confirmAlert.message()).toContain('I am a JS Confirm')
        await confirmAlert.accept()
        await expect(confirmAlert.type()).toContain('confirm')
        console.log(confirmAlert)
    })
    await page.locator('[onclick="jsConfirm()"]').click()
    await expect(page.locator('[id="result"]')).toHaveText('You clicked: Ok')
    await page.waitForTimeout(3000)

})

test.only('verify promt alert in playwright', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async prompt => {
        await expect(prompt.message()).toContain('I am a JS prompt')
        // await prompt.accept('i am learning playwright')
        await expect(prompt.type()).toContain('prompt')
        console.log(prompt.type())
        prompt.dismiss()

    })
    await page.locator('[onclick="jsPrompt()"]').click()
    // await expect(page.locator('[id="result"]')).toHaveText('You entered: i am learning playwright')
    await expect(page.locator('[id="result"]')).toHaveText('You entered: null')

    await page.waitForTimeout(3000)

})

