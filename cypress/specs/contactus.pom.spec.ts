import { contactUsPage } from "../pages/contactUsPage";
import { homePage } from "../pages/homePage";

let contactUs = new contactUsPage();
let home = new homePage();

let name = 'Firstname Lastname';
let emailAddress = 'contactemail@test.com';
let subjectText = 'Subject Text';
let messageText = 'Message Text';

describe('Submit Contact Us Request', () => {
    it('should fill and submit the contact request', () => {
      cy.visit('https://automationexercise.com');

      home.goToContactUsPage();

      contactUs.fillContactFormAndSubmit(name, emailAddress, subjectText, messageText);
  
      contactUs.elements.alertSuccessMessage().should('be.visible');
      contactUs.elements.alertSuccessMessage().invoke('text').should('match', /^Success! Your details have been submitted successfully./);
    })
})