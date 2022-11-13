describe('Sign in Alura Pic', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Login in with valid user', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('Login with invalid user', () => {
        cy.login('jacqueline', '1234');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })

})