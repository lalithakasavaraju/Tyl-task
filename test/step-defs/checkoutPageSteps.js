var {Then} = require('cucumber');

import CheckoutPage from "../page-objects/CheckoutPage";
import OrderCompletionPage from "../page-objects/OrderCompletionPage";

Then(/^I should be successfully able to buy the products$/, function () {
    expect(browser.getUrl()).to.contain('checkout-step-one');
    CheckoutPage.verifyPageTitle();
    CheckoutPage.enterCheckoutDetails();
    CheckoutPage.verifyPriceOfItemsInBasket();
    OrderCompletionPage.verifySuccessfulCompletionOfOrder();

});