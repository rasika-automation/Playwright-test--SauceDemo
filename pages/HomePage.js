class HomePage {

    constructor(page) {
        this.page = page;

        this.backpack = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cart = page.locator('#shopping_cart_container');
        this.menu = page.locator('#react-burger-menu-btn');
        this.logout = page.locator('#logout_sidebar_link');
    }

    async addBackpackToCart() {
        await this.backpack.click();
    }

    async openCart() {
        await this.cart.click();
    }

    async logoutUser() {
        await this.menu.click();
        await this.logout.click();
    }
}

module.exports = HomePage;