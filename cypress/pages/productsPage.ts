export class productsPage {
    elements = {
        homeMenu : () => cy.get('a[href="/"]'),
        productOneLocator : () => cy.get('a[href="/product_details/1"]'),
        productTwoLocator : () => cy.get('a[href="/product_details/2"]'),
        hoverProducts : () => cy.get('div[class="single-products"]'),
        productOneAddToCartButton : () => cy.get('a[data-product-id="1"]'),
        productTwoAddToCartButton : () => cy.get('a[data-product-id="2"]'),
        addToCartButton : () => cy.get('.cart'),
        viewCart : () => cy.get('u'),
        productImages : () => cy.get('.product_image')
    }

    viewProduct(productNum : number) {
        if (productNum == 1) {
            this.elements.productOneLocator().click();
        } else if (productNum == 2) {
            this.elements.productTwoLocator().click();
        } else {
            console.log('Invalid number passed to function!');
        }
    }

    hoverOnProductAndAddToCart(productNum : number) {
        if (productNum == 1) {
            this.elements.hoverProducts().first().trigger('mouseover');
            this.elements.productOneAddToCartButton().eq(0).click();
        } else if (productNum == 2) {
            this.elements.hoverProducts().eq(1).trigger('mouseover');
            this.elements.productTwoAddToCartButton().eq(0).click();
        } else {
            console.log('Invalid number passed to function!');
        }
    }

    addToCart() {
        this.elements.addToCartButton().click();
    }

    viewCart() {
        this.elements.viewCart().click();
    }
}