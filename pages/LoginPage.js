// Import Playwright's expect assertion library
// Used for validations in the page object if required.
import { expect } from '@playwright/test';

// Create a LoginPage class.
// This class contains all locators and methods related to the Login page.
export class LoginPage {

    // Constructor is automatically called when an object of LoginPage is created.
    // It receives the Playwright page object from the test.
    constructor(page) {

        // Store the page object so it can be used throughout this class.
        this.page = page;

        // Locator for Username textbox.
        // '#' indicates an ID selector in CSS.
        this.username = page.locator("#user-name");

        // Locator for Password textbox.
        this.password = page.locator("#password");

        // Locator for Login button.
        this.loginBtn = page.locator("#login-button");

        // Locator for Error Message displayed after invalid login.
        this.errorMessage = page.locator("[data-test='error']");
    }

    // Reusable login method.
    // Accepts username and password as parameters.
    async login(user, pass) {

        // Enter username into Username field.
        await this.username.fill(user);

        // Enter password into Password field.
        await this.password.fill(pass);

        // Click Login button.
        await this.loginBtn.click();

        
    }

}