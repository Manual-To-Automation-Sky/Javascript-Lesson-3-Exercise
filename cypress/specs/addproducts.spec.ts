import { homePage } from '../pages/homePage';
import { productsPage } from '../pages/productsPage';

let products = new productsPage();
let home = new homePage();

/// <reference types="cypress-xpath" />
describe('Add Products to Cart', () => {    
    it('should add a product to cart', () => {
      cy.visit('https://automationexercise.com');

      home.goToProductsPage();
      products.viewProduct(1);
      products.addToCart();
      products.viewCart();

      products.elements.productImages().should('have.length', 1);

      home.goToProductsPage();
      products.viewProduct(2);
      products.addToCart();
      products.viewCart();

      products.elements.productImages().should('have.length', 2);
    })

    it('should add a product to cart via hover', () => {
      home.goToProductsPage();
      products.hoverOnProductAndAddToCart(1);
      products.viewCart();

      products.elements.productImages().should('have.length', 1)

      home.goToProductsPage();
      products.hoverOnProductAndAddToCart(2);
      products.viewCart();

      products.elements.productImages().should('have.length', 2)
    })
  })