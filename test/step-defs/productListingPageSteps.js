var {When} = require('cucumber');

import ProductListingPage from "../page-objects/ProductListingPage";

When(/^I sort the products high to low$/, function () {
    expect(browser.getUrl()).to.contain('inventory');
    ProductListingPage.verifyPageTitle();
    ProductListingPage.selectOptionFromProductSortDropDown();

});

When(/^I add second costliest and cheapest items to the basket$/, function () {
    ProductListingPage.addItemsToBasket();
});