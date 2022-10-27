import { loginPage } from "../pages/loginPage"

let login = new loginPage();
let theUsername = 'student';
let thePassword = 'Password123';
let theWrongUsername = 'wrongusername';
let theWrongPassword = 'Password456';

describe('First Cypress Test', () => {
    it('should login successfully', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login');
  
      login.login(theUsername, thePassword);
  
      cy.get('.post-title').should('be.visible');
    })
  
    it('should fail to login because of username', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login');
  
      login.login(theWrongUsername, thePassword);
  
      login.elements.errorMessage().should('be.visible');
      login.elements.errorMessage().invoke('text').should('match', /^Your username is invalid!/);
    })
  
    it('should fail to login because of password', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login');
  
      login.login(theUsername, theWrongPassword);
  
      login.elements.errorMessage().should('be.visible');
      login.elements.errorMessage().invoke('text').should('match', /^Your password is invalid!/);
    })
  })