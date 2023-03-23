/// <reference types="cypress" />

describe('Browser Actions', () => {
    it('should load books website', () => {
      cy.visit('https://books.toscrape.com/index.html', { timeout: 10000 });
      cy.url().should('include', 'index.html');
    });
    it('Should click on the Travel category', () => {
      cy.visit('https://books.toscrape.com/index.html')
      cy.get('a').contains('Travel').click();
      //cy.get('h1').contains('Travel');
      cy.get('h1').should('have.text','Travel');
    });
  });