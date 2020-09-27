var {When} = require('cucumber');

import BasketPage from "../page-objects/BasketPage";

When(/^I checkout the items$/, function () {
    expect(browser.getUrl()).to.contain('cart');
    BasketPage.verifyBasketPageHeaderText();
    BasketPage.verifyNUmberOfItemsOnTheBastPage();
    BasketPage.clickCheckoutButton();


});