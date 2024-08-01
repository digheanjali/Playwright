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

// test.only('handle Alerts', async ({ page }) => {
//     await page.goto('https://www.demoblaze.com/')
//     await page.waitForSelector('h4[class="card-title"]>a') //wait for load all selector
//     let productCount = await page.locator('h4[class="card-title"]>a').count()  // count all product
//     console.log(productCount)

//     for (let i = 0; i < productCount; i++) {
//         let text = await page.locator('h4[class="card-title"]>a').nth(i).textContent() //for given text of product/containt

//         console.log(text)

//         if (text === 'Nexus 6') {
//             await page.locator('h4[class="card-title"]>a').nth(i).click()
//             break

//         }


//     }

//     page.on('dialog', async simpleAlert => {
//         await expect(simpleAlert.message()).toContain('Product added')
//         await simpleAlert.accept()
//     })

//     await page.locator('[onclick="addToCart(3)"]').click()
//     await page.waitForTimeout(3000)        [class="card-title"]>a



// })


test.only('verify Alerts', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/')
    await page.waitForSelector('[class="card-title"]>a')
    let product = await page.locator('[class="card-title"]>a').count()
    console.log(product)


    for (let i = 0; i < product; i++) {
        let text = await page.locator('[class="card-title"]>a').nth(i).textContent()
        console.log(text)

        if (text === 'Sony vaio i5') {
            await page.locator('[class="card-title"]>a').nth(i).click()
            break

        }
    }

    page.on('dialog', async simpleAlert => {
        await expect(simpleAlert.message()).toContain('Product added')
        await simpleAlert.accept()
        await page.waitForTimeout(3000)

    })

    await page.locator('[onclick="addToCart(8)"]').click()

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

test('verify promt alert in playwright', async ({ page }) => {
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

