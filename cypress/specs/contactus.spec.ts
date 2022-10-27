describe('Submit Contact Us Request', () => {
    it('should fill and submit the contact request', () => {
      cy.visit('https://automationexercise.com');
  
      cy.get('[href="/contact_us"]').click(); 
      cy.get('[name="name"]').type('FirstName LastName');
      cy.get('[name="email"]').type('email@mail.com');
      cy.get('[name="subject"]').type('Subject Line');
      cy.get('#message').type('This is the message');
      cy.get('[data-qa="submit-button"]').click();
      cy.get('.alert-success').should('be.visible');
      cy.get('.alert-success').invoke('text').should('match', /^Success! Your details have been submitted successfully./);
    })
})