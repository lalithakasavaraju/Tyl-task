import BasePage from "./BasePage";

class OrderCompletionPage extends BasePage {

    get checkoutCompletePageHeader() {
        return $('#checkout_complete_container > .complete-header');
    }

    verifySuccessfulCompletionOfOrder() {
        expect(browser.getUrl()).to.contain('checkout-complete');
        const successfulHeaderText = this.checkoutCompletePageHeader.getText();
        expect(successfulHeaderText).to.contain('THANK YOU FOR YOUR ORDER');
    }
}

export default new OrderCompletionPage();