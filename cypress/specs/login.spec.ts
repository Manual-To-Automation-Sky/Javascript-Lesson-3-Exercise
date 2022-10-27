let username : string = 'student';
let password : string = 'Password123';
let wrongUsername : string = 'wrongstudent';
let wrongPassword : string = 'Password456';

describe('First Cypress Test', () => {
    it('should login successfully', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login');
  
      cy.get('#username').type(username); 
      cy.get('#password').type(password);
      cy.get('#submit').click();
  
      cy.get('.post-title').should('be.visible');
    })
  
    it('should fail to login because of username', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login');
  
      cy.get('#username').type(wrongUsername); 
      cy.get('#password').type(password);
      cy.get('#submit').click();
  
      cy.get('#error').should('be.visible');
      cy.get('#error').invoke('text').should('match', /^Your username is invalid!/);
    })
  
    it('should fail to login because of password', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login');
  
      cy.get('#username').type(username); 
      cy.get('#password').type(wrongPassword);
      cy.get('#submit').click();
  
      cy.get('#error').should('be.visible');
      cy.get('#error').invoke('text').should('match', /^Your password is invalid!/);
    })
  })