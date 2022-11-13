import loc from '../../support/locators';
const users = require('../../fixtures/users.json');

describe('Create account Alura Pic', () => {
    beforeEach(() => {
     cy.visit('/');
    })

    it.only('Check validation message', () => {
        cy.get(loc.CREATE_ACCOUNT.LINK_REGISTER).click();
        cy.get(loc.BTN_SAVE).click();
        //the seccond click is to able all the warn messages
        cy.get(loc.BTN_SAVE).click();
        cy.get(loc.WARN_MESSAGE).should('contain', 'Email is required!');
        cy.get(loc.WARN_MESSAGE).should('contain', 'User name is required!');
        cy.get(loc.WARN_MESSAGE).should('contain', 'Password is required!');
        cy.get(loc.WARN_MESSAGE).should('contain', 'Full name is required!');
    })
})