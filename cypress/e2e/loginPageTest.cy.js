/// <reference types="cypress" />

import { homePage } from "../POM/HomePage/homePage"
import { loginPage } from "../POM/LoginPage/loginPage"

describe("Login Page", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('')
    })

    describe("Log In", () => {
        it("Fill Valid Credentials", () => {
            homePage.clickOnLogInButton()
            cy.wait(2000)
            loginPage.fillUsername(Cypress.env('username'))
            loginPage.fillPassword(Cypress.env('password'))
            loginPage.clickOnLoginButton()
            cy.wait(2000)
            cy.fixture("home").then(data => {
                homePage.checkUserName()
                    .then(username => {
                        expect(username.trim()).to.equal(data.username)
                    })
                homePage.clickOnLogOutButton()
                cy.wait(2000)
            })
        })

        it("Fill Invalid Username", () => {
            homePage.clickOnLogInButton()
            cy.wait(2000)
            loginPage.fillUsername("notExistingUsername")
            loginPage.fillPassword(Cypress.env('password'))
            loginPage.clickOnLoginButton()
            cy.wait(2000)

            cy.fixture("login")
                .then(data => {
                    cy.on("window:alert", res => {
                        expect(res).to.equal(data.userNotExist)
                    })
                })
        })

        it("Fill Invalid Password", () => {
            homePage.clickOnLogInButton()
            cy.wait(2000)
            loginPage.fillUsername(Cypress.env('username'))
            loginPage.fillPassword("wrongPassword!")

            loginPage.clickOnLoginButton()
            cy.wait(2000)

            cy.fixture('login')
                .then(data => {
                    cy.on("window:alert", res => {
                        expect(res).to.equal(data.wrongPassword)
                    })
                    loginPage.clickOnCloseButton()
                    homePage.getTheUserNameElement().should("not.be.visible")
                })
        })
    })
})