import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When( 'I click on the product {string}', ( productName ) => {
  // TODO: implement step
  cy.get( 'div.product h2' )
    .contains( productName )
    .parent()
    .find( 'button' ).click();
} );

Then( 'I should see the product {string} at the price {string} and {string} piece in the cart', ( productName, price, amount ) => {
  // TODO: implement step
  cy.get( 'div#cart ul' )
    .contains( productName )
    .parent()
    .contains( price )
    .parent()
    .contains( amount )
    .should( 'be.visible' );
} );

Then( 'I should see the total price {string} in the cart', ( total ) => {
  // TODO: implement step
  cy.get( 'li.total' )
    .contains( total )
    .should( 'be.visible' );
} );

Then( 'I should see the correct total price in the product line', () => {
  // TODO: implement step
  cy.get( '#cart ul li:not(.total)' ).each( ( $li ) => {
    const price = parseInt( ( $li.find( 'span:first-child' ).text() ).replace( /[^\d]/g, '' ), 10 );
    const count = parseInt( ( $li.find( 'span:nth-child(2)' ).text() ).replace( /[^\d]/g, '' ), 10 );
    const rowPrice = parseInt( ( $li.find( 'span:nth-child(3)' ).text() ).replace( /[^\d]/g, '' ), 10 );
    const expectedTotal = price * count;
    expect( rowPrice ).to.equal( expectedTotal );
  } )
} );


Then( 'I should see the total price is equal to the sum of the prices of the products', () => {
  // TODO: implement step
  cy.get( '#cart li:not(.total) span:last-child' ).then( ( $spans ) => {
    let total = 0
    for ( let i = 0; i < $spans.length; i++ ) {
      total += parseFloat( $spans[ i ].innerText )
    }
    cy.get( '#cart .total span' ).invoke( 'text' ).then( ( text ) => {
      expect( total ).to.equal( parseFloat( text ) )
    } )
  } )
} );


