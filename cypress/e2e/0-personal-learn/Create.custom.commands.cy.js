/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.url().should('include', 'login.html');
      });
    it('Should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.fixture("user").then(user => {
        const username = user.username
        const password = user.password
        cy.login(username, password)
        cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')
        })
       
    });
});