import {test, chromium} from '@playwright/test'

test('browser context & screen record', async()=>{
    const browser = await chromium.launch();   //Returns the browser instance.
    const context = await browser.newContext() //Creates a new browser context. It won't share cookies/cache with other browser contexts.
    const page = await context.newPage() //Creates a new page in the browser context.
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@aria-label="Search Amazon.in"]').fill('iphone')
    await page.locator('#nav-search-submit-button').click()
    await page.waitForTimeout(2000)




})