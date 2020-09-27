import BasePage from "./BasePage";

class BasketPage extends BasePage {

    get basketPageHeader() {
        return $('#contents_wrapper > .subheader')
    }

    get numberOfItemsOnBasketPage() {
        return $('#cart_contents_container > .cart_list > .cart_item');
    }

    get checkoutButton() {
        return $('.btn_action.checkout_button');
    }

    verifyBasketPageHeaderText() {
        const basketPageHeader = this.basketPageHeader;
        const textPresent = basketPageHeader.getText();
        expect(textPresent).to.contains('Your Cart');
    }

    verifyNUmberOfItemsOnTheBastPage() {
        const numberOfItemsOnPage = $$('.cart_item');
        assert.ok(numberOfItemsOnPage.length, 2);
    }

    clickCheckoutButton() {
        this.checkoutButton.click();
    }

}

export default new BasketPage();