import { contactUsPageLocators } from "./contactUsPageLocators";

class ContactUsPage {
    elements = {
        emailField: () => cy.get(contactUsPageLocators.emailField),
        nameField: () => cy.get(contactUsPageLocators.nameField),
        messageField: () => cy.get(contactUsPageLocators.messageField),
        sendButton: () => cy.get(contactUsPageLocators.sendButton),
        closeButton: () => cy.get(contactUsPageLocators.closeButton),
        contactModal: () => cy.get(contactUsPageLocators.contactModal),
    }

    fillEmail(email) {
        this.elements.emailField().type(email)
    }

    fillName(name) {
        this.elements.nameField().type(name)
    }

    fillMessage(message) {
        this.elements.messageField().type(message)
    }

    clickOnSendButton() {
        this.elements.sendButton().click()
    }

    clickOnCloseButton() {
        this.elements.closeButton().click()
    }

    getContactModalElement() {
        return this.elements.contactModal()
    }
}

export const contactUsPage = new ContactUsPage()