var {When} = require('cucumber');
var {Given} = require('cucumber');

const assert = require('assert');

import SauceHomePage from "../page-objects/SauceHomePage";

Given(/^I am on swag labs website$/, function () {
    browser.url('/');
    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain('saucedemo');
    assert.strictEqual(pageDetails.title, 'Swag Labs');
    browser.pause(2000);
});

When(/^I login with valid credentials$/, function () {
    SauceHomePage.submitLoginCredentials();


});