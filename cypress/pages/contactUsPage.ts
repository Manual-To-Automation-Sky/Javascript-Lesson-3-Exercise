export class contactUsPage{

    elements ={
        nameField : () => cy.get('[name="name"]'),
        emailField : () => cy.get('[name="email"]'),
        subjectField : () => cy.get('[name="subject"]'),
        messageField : () => cy.get('#message'),
        submitButton : () => cy.get('[data-qa="submit-button"]'),
        alertSuccessMessage : () => cy.get('.alert-success')
    }
    
    fillContactFormAndSubmit(name : string, emailAddress : string, subjectText : string, messageText : string) {
        this.elements.nameField().type(name);
        this.elements.emailField().type(emailAddress);
        this.elements.subjectField().type(subjectText);
        this.elements.messageField().type(messageText);
        this.elements.submitButton().click();
    }
    
}