import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';test('Logout test', async ({ page }) => {

    const login = new LoginPage(page);
    const home = new HomePage(page);

    await page.goto('https://www.saucedemo.com');

    await login.login('standard_user', 'secret_sauce');

    await home.logout();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
});