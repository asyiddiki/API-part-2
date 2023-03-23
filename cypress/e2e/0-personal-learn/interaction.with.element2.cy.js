/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('visit the website', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.get('#user_login').type('username')
    cy.get('input[name="user_password"]').type('password')
    cy.get('#user_remember_me').click()
    cy.get('input[name="submit"]').click()
    });
});