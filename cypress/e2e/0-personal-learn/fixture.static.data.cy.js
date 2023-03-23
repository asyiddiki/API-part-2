/// <reference types="cypress" />
//Web.OrangeHrm
describe('Working with inputs', () => { 
    it('visit the website', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin') //bisa juga 1 (dari vidio fixture min.5)
    //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') //bisa juga 2 (copas dr link cypress)
    cy.get('input[name="password"]').type('admin123') //bisa juga 1
    //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123') //bisa juga 2
    cy.get('.oxd-button').click()
    cy.get('.oxd-userdropdown-name').click() //class=. Id=#
    cy.get('.oxd-userdropdown-img').click()
    //cy.get(':nth-child(1) > .oxd-userdropdown-link').click()
    //cy.get('.oxd-dialog-close-button').click()
    //cy.get('.oxd-userdropdown-link').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    });
}); 