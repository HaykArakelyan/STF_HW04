/// <reference types="cypress" />

import { contactUsPage } from "../POM/ContactUsPage/contactUsPage"
import { homePage } from "../POM/HomePage/homePage"

describe("Contact Us Page", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('')
    })

    describe("Contact Us", () => {
        it("Send a Contact Message", () => {
            homePage.clickOnContactUsButton()
            cy.wait(2000)
            cy.fixture('contact')
                .then(data => {
                    contactUsPage.fillEmail(data.email)
                    contactUsPage.fillName(data.name)
                    contactUsPage.fillMessage(data.message)
                    contactUsPage.clickOnSendButton()

                    cy.on("window:alert", res => {
                        expect(res).to.equal(data.response)
                    })
                })
        })

        it("Open and Close The Modal", () => {
            homePage.clickOnContactUsButton()
            cy.wait(2000)
            contactUsPage.clickOnCloseButton()
            cy.wait(2000)
            contactUsPage.getContactModalElement().should("not.be.visible")
        })
    })
})