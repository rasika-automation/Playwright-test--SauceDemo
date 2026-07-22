class HomePage {

    constructor(page) {

        this.page = page;

        this.menuBtn = '#react-burger-menu-btn';
        this.logoutLink = '#logout_sidebar_link';
    }

    async logout() {

        await this.page.click(this.menuBtn);

        await this.page.click(this.logoutLink);
    }
}

export default HomePage;