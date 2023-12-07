const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Navigate to the login page
    await page.goto('http://www.post.at/');

    // Your login logic here
    // For example, fill in the username and password fields
    await page.fill('input[name="email"]', 'oleksandrfentsyk@gmail.com');
    await page.fill('input[name="password"]', 'Zeppelino211');

    // Click the login button
    await page.click('button[type="submit"]');

    // Wait for navigation or any element indicating successful login
    await page.waitForNavigation();

    // You can add assertions here to verify if the login was successful
    // For example, check if a specific element is present on the dashboard page
    const loggedInElement = await page.waitForSelector('YOUR_LOGGED_IN_ELEMENT_SELECTOR');
    console.log('Login successful:', loggedInElement !== null);
  } finally {
    // Close the browser
    await browser.close();
  }
})();
