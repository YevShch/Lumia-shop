import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the start page', () => {
  // Goto the start page
  cy.visit('/');
});

When('I enter the letter {string} in the search field', (letter) => {
  // Type the letter from our feature file in the search field
  cy.get('#search').type(letter);
});

Then('I should see the product {string}', (productName) => {
  // Grab a h2, check that it contains the product name
  // and then "go up" to the product div that the h2 is inside
  // and check that the product is visible
  cy.get('div.product h2')
    .contains(productName)
    .parentsUntil('div.product')
    .should('be.visible');
});

When( 'I enter the letters {string} in the search field', ( letter ) => {
  // Type the letter from our feature file in the search field
  cy.get( '#search' ).type( letter );
} );


Then('I should not see the product {string}', (productName) => {
  // Grab a h2, check that it contains the product name
  // and then "go up" to the product div that the h2 is inside
  // and check that the product is visible
  cy.get( 'div.product h2' )
    .contains( productName )
    .parentsUntil( 'div.product' )
    .should( 'not.be.visible' );
});


