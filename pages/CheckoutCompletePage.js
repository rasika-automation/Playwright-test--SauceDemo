class CheckoutCompletePage {

    constructor(page) {
        this.page = page;

        this.backHomeButton = page.locator('#back-to-products');
    }

    async backToHome() {
        await this.backHomeButton.click();
    }
}

module.exports = CheckoutCompletePage;