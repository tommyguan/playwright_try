import { chromium, test } from "@playwright/test";


test("Logger", async ({page}) => {
    // const browser = await chromium.launch({
    //     logger: {
    //         isEnabled: (name, severity) => true,
    //         log: (name, severity, message, args) => console.log(`name = ${name} \n msg = ${message} \n severity = ${severity} \n args = ${args}`)
    //     }
    // });
    // const context = await browser.newContext();
    // const page = await context.newPage();
    //const consoleLogs = [];
    page.on("console", msg => {
        console.log(msg.text());
  
        
    })
    await page.goto("https://letcode.in/elements");
    const btn = page.locator("#search");
    await btn.click();
    
    await page.goto("https://www.amazon.in/asas")
    await page.waitForTimeout(3000);
    // write the logs to the winston logger
});

