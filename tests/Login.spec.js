import { test, expect } from '@playwright/test';

import fs from 'fs';

import pdfParse from 'pdf-parse';



//Scenario 1:- Goto the saucedemo.com and login the valid user and password and verify the URL after Login.

test('1.Login test Sauce demo', async({page})=> {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

})

//Scenario 2:- Goto the saucedemo.com and login the invalid user and password and verify the error message.

test('2.Login test sauccedemo with invalid user and password',async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user1');
    await page.locator('#password').fill('secret_sauce1');
    await page.locator('#login-button').click();

    const error = page.locator('[data-test="error"]');

    await expect(error).toBeVisible();

    await expect(error).toContainText('Username and password do not match');
})

//Scenario 3:- Goto the saucedemo.com and login with valid creds and add item to the cart.

test('3.Add Item to the cart', async({page})=> {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#shopping_cart_container').click();

    await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack')

})

//Scenario 4:- Logout Scenario.

test('4.checkout and place the order', async({page})=> {

    await page.goto('https://www.saucedemo.com/');

     await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await page.locator('#shopping_cart_container').click();

    await page.locator('#checkout').click();

    await page.locator('#first-name').fill('Rasika');
    await page.locator('#last-name').fill('Kherade');
    await page.locator('#postal-code').fill('411033');
    await page.locator('#continue').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

        await page.locator('#finish').click();

            await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');


//Download PDF 

const [ download ] = await Promise.all([page.waitForEvent('download'),
page.locator('#generate-pdf-order').click()
  ]);

//SavePDF

const downloadPath = 'C:/Users/Asus/Downloads/orderReceipt.pdf';
await download.saveAs(downloadPath);
  

//Read PDF content

const dataBuffer = fs.readFileSync(downloadPath);
const pdfData = await pdfParse(dataBuffer);
console.log('PDF text:', pdfData.text);

// Example assertion

expect(pdfData.text).toContain('Thank you for your order');
await page.locator('#back-to-products').click();

});

           

    









