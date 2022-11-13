import loc from '../support/locators'

Cypress.Commands.add('login', (nome, senha) => {
    cy.visit('https://alura-fotos.herokuapp.com')
    cy.get(loc.CREATE_ACCOUNT.USERNAME).type(nome);
    cy.get(loc.CREATE_ACCOUNT.PASSWORD).type(senha ,{log: false});
    cy.get(loc.BTN_SAVE).click();
})