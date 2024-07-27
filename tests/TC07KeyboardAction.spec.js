const { test, expect } = require('@playwright/test')

test('handling keyboard actions in playwright', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare')
    await page.keyboard.down('PageDown')  //pagedown -- scrolling page to down
    await page.locator('[name="text1"]').fill('i am learning cypress')
    await page.keyboard.press('Control+A')
    // //F1 - F12, Digit0- Digit9, KeyA- KeyZ, Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete,
    //Enter, Home, Insert, PageDown, PageUp, ArrowRight, ArrowUp, Escape, ArrowDown, End,  etc
    await page.keyboard.press('Control+C')
    await page.locator('[name="text2"]').click()
    await page.keyboard.press('Control+V')
    await page.locator('[id="recaptcha"]').click()
    await page.waitForTimeout(6000)

})