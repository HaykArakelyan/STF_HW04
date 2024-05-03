/// <reference types="cypress" />

import { homePage } from "../POM/HomePage/homePage"
import { productPage } from "../POM/ProductPage/productPage"

describe("Product Page", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('')
    })

    describe('Frist Product', () => {
        it("Check Product Name", () => {
            homePage.clickOnProduct()
            cy.wait(2000)
            productPage.getProductname()
                .then(productName => {
                    cy.fixture("product")
                        .then(data => {
                            expect(productName).to.equal(data.productName)
                        })
                })
        })

        it("Add To Cart", () => {
            homePage.clickOnProduct()
            cy.wait(2000)
            productPage.clickOnAddToCartButton()


            cy.on("window:alert", res => {
                cy.fixture('product')
                    .then(data => {
                        expect(res).to.equal(data.response)
                    })
            })
        })
    })
})