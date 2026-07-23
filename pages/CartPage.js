

class CartPage {

    constructor(page) {
        this.page = page;

        this.productName = page.locator('[data-test="inventory-item-name"]');
        this.checkoutButton = page.locator('#checkout');
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}

module.exports = CartPage;