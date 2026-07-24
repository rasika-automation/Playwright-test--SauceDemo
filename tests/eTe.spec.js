const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const CheckoutCompletePage = require('../pages/CheckoutCompletePage');


test('Complete User Journey', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const completePage = new CheckoutCompletePage(page);

    // Login
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(
        'https://www.saucedemo.com/inventory.html'
    );

    // Add Product
    await homePage.addBackpackToCart();

    // Open Cart
    await homePage.openCart();

    await expect(cartPage.productName)
        .toHaveText('Sauce Labs Backpack');

    // Checkout
    await cartPage.checkout();

    // Customer Information
    await checkoutPage.enterDetails(
        'Rasika',
        'Kherade',
        '411033'
    );

    // Finish Order
    await checkoutPage.finishOrder();

    await expect(page).toHaveURL(
        'https://www.saucedemo.com/checkout-complete.html'
    );

    // Back to Products
    await completePage.backToHome();

    // Logout
    await homePage.logoutUser();

    await expect(page).toHaveURL(
        'https://www.saucedemo.com/'
    );

});