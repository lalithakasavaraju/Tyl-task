import BasePage from "./BasePage";

class ProductListingPage extends BasePage {

    get productListingHeading() {
        return $('#inventory_filter_container > .product_label');
    }

    get sortProductsDropDown() {
        return $('#inventory_filter_container > .product_sort_container');
    }

    get secondExpensiveProduct() {
        return $(".inventory_item:nth-child(2) .pricebar > .btn_inventory.btn_primary");
    }

    get leastExpensiveProduct() {
        return $('.inventory_item:nth-child(6) .pricebar > .btn_inventory.btn_primary')
    }

    get basketIcon() {
        return $('.fa-layers-counter.shopping_cart_badge');
    }

    verifyBasketBadgeNumber() {
        const basketBadgeIcon = this.basketIcon;
        basketBadgeIcon.scrollIntoView();
        const numberOnBasket = basketBadgeIcon.getText();
        assert.strictEqual(numberOnBasket, '2');
    }

    verifyPageTitle() {
        const productHeading = this.productListingHeading;
        const productListTitle = productHeading.getText();
        assert.strictEqual(productListTitle, 'Products');
    }

    selectOptionFromProductSortDropDown() {
        const sortDropdown = this.sortProductsDropDown;
        sortDropdown.waitAndSelectValueFromDropdown('Price (high to low)');
    }

    addItemsToBasket() {
        const secondItemCartButton = this.secondExpensiveProduct;
        secondItemCartButton.click();
        const leastExpensiveItemCartButton = this.leastExpensiveProduct;
        leastExpensiveItemCartButton.scrollIntoView();
        leastExpensiveItemCartButton.click();
        this.verifyBasketBadgeNumber();
        this.basketIcon.click();


    }

}

export default new ProductListingPage();