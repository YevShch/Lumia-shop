import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given( 'I should see field {string}', ( fieldName ) => {
  // 
  cy.get( 'form li' ).contains( fieldName )
    .should( 'be.visible' )
} );


When('I enter the text {string} in the field {string}', (text, fieldName) => {
  // TODO: implement step
  cy.contains('form li', fieldName).find('input').type(text)
});

When('I press the button {string}', (buttonName) => {
  // TODO: implement step
  cy.contains('div#cart', buttonName).click()
} );


Then( 'the payment is successful and I should receive a confirmation with text {string}', ( message ) => {
  // TODO: implement step
  cy.on( 'window:alert', ( str ) => {
    expect( str ).to.equal( message )
  })
} );

Then( 'the payment should not be completed and I should not receive a confirmation with text {string}', ( message ) => {
  // TODO: implement step
  cy.on( 'window:alert', ( str ) => {
    throw new Error( 'Unexpected challenge window.alert()' ) 
    // cy.on( 'window:alert', ( message ) => {
    //   throw new Error( 'Unexpected challenge window.alert()' )
  } )
} );



