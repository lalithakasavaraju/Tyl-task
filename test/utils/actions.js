

/**
 * waiting for a link or button to exist and click
 */
browser.addCommand(
    "waitAndClick",
    function () {
        try {
            this.waitForExist();
            this.click();
        } catch (error) {
            throw new Error("Could not click on selector" + error);
        }
    },
    true
);

/**
 * waiting for selector to exist and enter value
 */
browser.addCommand(
    "waitAndSendKeys",
    function (keys) {
        try {
            this.waitForExist();
            this.setValue(keys);
        } catch (error) {
            throw new Error("Could not send values to the selector:" + keys, error);
        }
    },
    true
);

/**
 * wait for selector to exist and select option by value
 */
browser.addCommand(
    "waitAndSelectValueFromDropdown",
    function (value) {
        try {
            this.waitForExist();
            this.selectByVisibleText(value);
        } catch (error) {
            throw new Error(
                "Could not select values to the selector:" + value,
                error
            );
        }
    },
    true
);
