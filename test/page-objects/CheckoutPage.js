import BasePage from "./BasePage";

class CheckoutPage extends BasePage {

    get checkoutPageHeader() {
        return $('.subheader');
    }

    get firstNameINputField() {
        return $('[data-test="firstName"]');
    }

    get lastNameInputField() {
        return $('[data-test="lastName"]')
    }

    get postalCodeInputField() {
        return $('[data-test="postalCode"]');
    }

    get continueButton() {
        return $('.btn_primary.cart_button');
    }

    get priceOfFirstItem() {
        return $('div:nth-of-type(3) > .cart_item_label > .inventory_item_price');
    }

    get priceOfSecondItem() {
        return $('div:nth-of-type(4) > .cart_item_label > .inventory_item_price');
    }

    get totalAmountInBasket() {
        return $('.summary_subtotal_label');
    }

    get finishButton() {
        return $('.btn_action.cart_button');
    }

    verifyPageTitle() {
        const pageTitle = this.checkoutPageHeader.getText();
        assert.strictEqual(pageTitle, 'Checkout: Your Information');
    }

    enterCheckoutDetails() {
        const firstNameField = this.firstNameINputField;
        firstNameField.waitAndSendKeys('test');
        const lastNameField = this.lastNameInputField;
        lastNameField.waitAndSendKeys('test');
        const postalCodeField = this.postalCodeInputField;
        postalCodeField.waitAndSendKeys('10010');
        this.continueButton.click();
    }

    verifyPriceOfItemsInBasket() {
        const firstPriceText = this.priceOfFirstItem.getText();
        const secondPriceText = this.priceOfSecondItem.getText();
        var firstPrice = firstPriceText.match(/[+-]?\d+(?:\.\d+)?/g).map(Number);
        var secondPrice = secondPriceText.match(/[+-]?\d+(?:\.\d+)?/g).map(Number);
        var total = +firstPrice + +secondPrice;
        const itemTotalText = this.totalAmountInBasket.getText();
        var totalAmount = itemTotalText.match(/[\d\.]+/g)[0];
        var itemTotal = parseFloat(totalAmount);
        expect(itemTotal).to.equal(total);
        this.finishButton.click();

    }

}

export default new CheckoutPage();