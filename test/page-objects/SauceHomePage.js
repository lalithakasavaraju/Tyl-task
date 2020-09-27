import BasePage from './BasePage';


class SauceHomePage extends BasePage {
    open() {
        super.open("./");
    }

    get userNameInputField() {
        return $('[data-test="username"]');
    }

    get passwordInputField() {
        return $('[data-test="password"]');
    }

    get loginButton() {
        return $('#login-button');
    }

    enterUserName() {
        const userNameField = this.userNameInputField;
        userNameField.waitAndSendKeys('standard_user');
    }

    enterPassword() {
        const passWordField = this.passwordInputField;
        passWordField.waitAndSendKeys('secret_sauce');
    }

    clickLoginButton() {
        const loginButton = this.loginButton;
        loginButton.waitAndClick();
    }

    submitLoginCredentials() {
        this.enterUserName();
        this.enterPassword();
        this.clickLoginButton();
    }
}

export default new SauceHomePage();