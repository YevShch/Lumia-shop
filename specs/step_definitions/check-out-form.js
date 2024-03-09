import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Then( 'I should see an error message that the name field {string} is filled in the wrong format', ( fieldId ) => {
  // 
  cy.get( fieldId + ':invalid' ).should( 'have.attr', 'pattern', '{2,50}' );
} );

Then( 'I should see an error message that the street field {string} is filled in the wrong format', ( fieldId ) => {
  // 
  cy.get( fieldId + ':invalid' ).should( 'have.attr', 'pattern', '{2,50}' );
} );

Then( 'I should see an error message that the zip-code field {string} is filled in the wrong format', ( fieldId ) => {
  // 
  cy.get( fieldId + ':invalid' ).should( 'have.attr', 'pattern', '[\\d\\s]{5,6}' );
} );


Then( 'I should see an error message that the city field {string} is filled in the wrong format', ( fieldId ) => {
  // 
  cy.get( fieldId + ':invalid' ).should( 'have.attr', 'pattern', '[ \\wåäöÅÄÖ ]{ 2, 50 }' );
} );

Then( 'I should see an error message that the card number field {string} is filled in the wrong format', ( fieldId ) => {
  // 
  cy.get( fieldId + ':invalid' ).should( 'have.attr', 'pattern', '\\d{13,16}' );
} );

Then( 'I should see an error message that the card date field {string} is filled in the wrong format', ( fieldId ) => {
  // 
  cy.get( fieldId + ':invalid' ).should( 'have.attr', 'pattern', '\\d{2}\\/\\d{2}' );
} );

Then( 'I should see an error message that the card ccv field {string} is filled in the wrong format', ( fieldId ) => {
  // 
  cy.get( fieldId + ':invalid' ).should( 'have.attr', 'pattern', '\\d{3}' );
} );

