/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.url().should('include', 'login.html');
    });
    

    it('Pay Bills - Add New Payee', () => {
        cy.visit('http://zero.webappsecurity.com')
        cy.get("#signin_button").click()

        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            
            //login
            cy.login(username, password)
           
            //go to menu pay bill
            cy.clickbutton('Pay Bills')
            cy.clickbutton('Add New Payee')
                      
            //pay bills - menu Add New Payee
            cy.AddNewPayee()
        });
    })
   

    it('Pay Bills - Pay Saved Payee', () => {
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
        
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            
            //login
            cy.login(username, password)
           
            //masuk menu pay bill
            cy.clickbutton('Pay Bills')
          
            //pay bills - menu Pay Saved Pay 
            cy.PaySavedPayee()
        })
    })
});