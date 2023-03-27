// <reference types="cypress" />

it.only("Testing API Headers", () => {
  it("Succesfully Validate body using name parameter ", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/ditto").as("pokemon");
    cy.get("@pokemon").its("body").its("name").should("include", "ditto");
  });
});

it.only('Validate Status', () => {
  cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
  cy.get('@pokemon').its('status').should('equal', 200)
});

it.only('Validate Status', () => {
  cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?pages=2&per_pages=1&delay=3',
    }).as('users')
    cy.get('@users').its('status').should('equal', 200)
});
