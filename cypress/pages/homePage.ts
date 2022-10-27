
export class homePage {

    elements ={
        homeMenu : () => cy.get('a[href="/"]'),
        productsMenu : () => cy.get('a[href="/products"]'),
        signUpLoginMenu : () => cy.get('a[href="/login"]'),
        cartMenu : () => cy.get('a[href="/view_cart"]'),
        testCasesMenu : () => cy.get('a[href="/test_cases"]'),
        apiTestingMenu : () => cy.get('a[href="/api_list"]'),
        youtubeTutorialsMenu : () => cy.get('a[href="https://www.youtube.com/c/AutomationExercise"]'),
        contactUsMenu : () => cy.get('a[href="/contact_us"]'),
    }

    goToHomePage() { this.elements.homeMenu().click(); }

    goToProductsPage() { this.elements.productsMenu().first().click(); }

    goToSignUpLoginPage() { this.elements.signUpLoginMenu().click(); }

    goToCartPage() { this.elements.cartMenu().click(); }

    goToTestCasesPage() { this.elements.testCasesMenu().click(); }

    goToApiTestingPage() { this.elements.apiTestingMenu().click(); }

    goToYoutubeTutorialsPage() { this.elements.youtubeTutorialsMenu().click(); }
    
    goToContactUsPage() { this.elements.contactUsMenu().click(); }

}