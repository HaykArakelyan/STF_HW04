import { homePageLocators } from "./homePageLocators";

class HomePage {

    elements = {
        firstProduct: () => cy.get(homePageLocators.firstProduct),
        loginButton: () => cy.get(homePageLocators.loginButton),
        contactUsButton: () => cy.get(homePageLocators.contactUsButton),
        logoutButton: () => cy.get(homePageLocators.logoudButton),
        nameOfUser: () => cy.get(homePageLocators.nameOfUser),
    }


    clickOnProduct() {
        this.elements.firstProduct().click()
    }

    clickOnLogInButton() {
        this.elements.loginButton().click()
    }

    clickOnContactUsButton() {
        this.elements.contactUsButton().click()
    }

    clickOnLogOutButton() {
        this.elements.logoutButton().click()
    }

    getTheUserNameElement() {
        return this.elements.nameOfUser()
    }

    checkUserName() {
        return this.elements.nameOfUser().invoke('text')
    }
}

export const homePage = new HomePage()