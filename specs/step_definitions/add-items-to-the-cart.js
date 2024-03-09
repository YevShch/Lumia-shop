import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When( 'I click on the button {string}', ( buttonName ) => {
  // Grab 
  cy.contains( buttonName ).click()
} );


Then('I should see the product {string} in the cart', (productName) => {
  // TODO: implement step
  cy.get( 'div#cart ul' )
    .contains( productName )
    .should( 'be.visible' );
});


When('I go to the product page {string}', (productName) => {
  // TODO: implement step
  cy.get( 'div.product' )
    .contains( 'h2', productName )
    .parent()
    .parent()
    .find( 'img' )
    .click();
} );


When( 'I should see the product {string} and click on buy button', ( productName ) => {
  // TODO: implement step
  cy.get( 'div.product' )
    .contains( 'h2', productName )
    .parent()
    .find( 'button' )
    .click();
});

When('I close the product page', () => {
  // TODO: implement step
  cy.get( 'body' ).click();
});

