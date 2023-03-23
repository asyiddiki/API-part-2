// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (username, password) => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.get("#user_login").clear();
  cy.get("#user_login").type(username);

  cy.get('input[name="user_password"]').clear();
  cy.get('input[name="user_password"]').type(password);

  cy.get('input[name="submit"]').click();
});

//Tugas Custom Commands
Cypress.Commands.add("login", (username, password) => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.get("#user_login").clear();
  cy.get("#user_login").type(username);

  cy.get('input[name="user_password"]').clear();
  cy.get('input[name="user_password"]').type(password);

  cy.get("#user_remember_me").type("checkbox");

  cy.get('input[name="submit"]').click();
});

Cypress.Commands.add("clickbutton", (title) => {
  cy.get("a").contains(title).click();
});

Cypress.Commands.add("PaySavedPayee", () => {
  cy.clearCookies();
  cy.clearLocalStorage();

  cy.get("#sp_payee").select("Sprint");
  cy.get("#sp_account").select("Loan");
  cy.get("#sp_amount").type("500").should("have.value", "500");
  cy.get("#sp_date").click();
  cy.get(".ui-state-default").contains("20").click();
  cy.get("#sp_description").type("paybills").should("have.value", "paybills");
  cy.get("#pay_saved_payees").click();
});

Cypress.Commands.add("AddNewPayee", () => {
  cy.clearCookies();
  cy.clearLocalStorage();

  cy.get("#np_new_payee_name").type("hasbi123").should("have.value", "hasbi123");
  cy.get("#np_new_payee_address").type("Bengkulu").should("have.value", "Bengkulu");
  cy.get("#np_new_payee_account").type("hasbi123").should("have.value", "hasbi123");
  cy.get("#np_new_payee_details").type("paybills ").should("have.value", "paybills ");
  cy.get("#add_new_payee").click();
});
//API auth command
Cypress.Commands.add('loginViaAPI', (
  email = Cypress.env('userEmail'),
  password = Cypress.env('userPassword')) => {
  cy.request('POST', `${Cypress.env('apiUrl')}/users/login`, {
    username: email,password,
  }).then((response) => {
    cy.setCookie('sessionId', response.body.sessionId)
    cy.setCookie('userId', response.body.userId)
    cy.setCookie('userName', response.body.userName)
    cy.visit('/#!/main')
  })
})