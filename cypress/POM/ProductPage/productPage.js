import { productPageLocators } from "./productPageLocators"

class ProductPage {
    elements = {
        productName: () => cy.get(productPageLocators.title),
        addToCartButton: () => cy.get(productPageLocators.addToCartButton),
        homePagebutton: () => cy.get(productPageLocators.homePageButton),
    }

    getProductname() {
        return this.elements.productName().invoke('text')
    }

    clickOnAddToCartButton() {
        this.elements.addToCartButton().click()
    }

    clickOnHomePageButton() {
        this.elements.homePagebutton().click()
    }
}

export const productPage = new ProductPage()