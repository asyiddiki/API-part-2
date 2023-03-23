// <reference types="cypress" />

describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.url().should('include', 'login.html');
      });
    it('Should form login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        //login username
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')

        //login password
        cy.get('#user_password').clear()
        cy.get('#user_password').type('password')

        //checklist box
        cy.get('#user_remember_me').type('checkbox')
    });
});
