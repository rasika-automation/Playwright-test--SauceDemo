const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Valid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});

test('Invalid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user1', 'secret_sauce1');

    await expect(loginPage.errorMessage).toContainText(
        'Username and password do not match'
    );

});