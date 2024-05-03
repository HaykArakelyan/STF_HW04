import { loginPageLocators } from "./loginPageLocators";

class LoginPage {
    elements = {
        usernameField: () => cy.get(loginPageLocators.usernameField),
        passwordField: () => cy.get(loginPageLocators.passwordField),
        loginButton: () => cy.get(loginPageLocators.loginButton),
        closeButton: () => cy.get(loginPageLocators.closeButton),
    }

    fillUsername(username) {
        this.elements.usernameField().type(username)
    }

    fillPassword(password) {
        this.elements.passwordField().type(password)
    }

    clickOnLoginButton() {
        this.elements.loginButton().click()
    }

    clickOnCloseButton() {
        this.elements.closeButton().click()
    }
}

export const loginPage = new LoginPage()