/// <reference types="cypress" />
describe('Login de usuários do alura-pic', () => {

    beforeEach(() => {
      cy.visit('/');
    })
    
    it('Fazer login de usuario válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.contains('a', '(Logout)').should('be.visible');
    })
  
    it('Fazer login de usuario inválido', () => {
        cy.login('jacqueline', '1234');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })
})