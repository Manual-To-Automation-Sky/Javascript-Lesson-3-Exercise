export class loginPage {

    elements ={
        usernameField : () => cy.get('#username'),
        passwordField : () => cy.get('#password'),
        submitButton : () => cy.get('#submit'),
        errorMessage : () => cy.get('#error')
    }
    
    login(username : string, password : string) {
        this.elements.usernameField().type(username);
        this.elements.passwordField().type(password);
        this.elements.submitButton().click();
    }
    
}