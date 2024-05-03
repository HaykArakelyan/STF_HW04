/// <reference types="cypress" />

import { homePage } from "../POM/HomePage/homePage"

describe("Home Page", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('')
    })

    describe("Verify Username if Logged In", () => {
        it("Check Username", () => {
            cy.fixture("home").then(data => {
                homePage.checkUserName()
                    .then(username => {
                        expect(username.trim()).to.equal(data.username)
                    })
            })
        })
    })
})