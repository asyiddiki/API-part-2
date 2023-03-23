//// <reference types="cypress" />

describe('My First Test', () => {
  it("click 'type' shows the right headings", () => {
    cy.visit("https://example.cypress.io");
    //cy.pause() 
    cy.contains('type').click()
    
    // Should be a new URl which includes '/comment/action' 
    cy.url(). should('includes', '/commands/actions')
    
    // Get input, type into it and verify that the value has been updated
    cy.get('.action-email') 
      .type('fake@email.com')
      .should('have.value', 'fake@email.com') 
  })
});
