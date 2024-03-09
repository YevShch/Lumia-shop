const price = '2500kr';
const number = parseInt( price.replace( /[^\d]/g, '' ), 10 );
console.log(number);

/*
Scenario: Сheck that row sums are counted correctly in the shopping cart
    When I click on the product "Taklampa" "3" times  
    And I click on the product "Spotlight" "2" times
    Then I should see the correct total price in the product line


    When( 'I click on the product {string} {string} times', ( productName, times ) => {
  // TODO: implement step
  cy.get( 'div.product h2' )
    .contains( productName )
    .parent()
    .find( 'button' )
    .click( { clickCount: times } );
} );
    */






import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
/*
Given('that I am on the start page', () => {
  // Goto the start page
  cy.visit('/');
});

And('I enter the letter {string} in the search field', (letter) => {
  // Type the letter from our feature file in the search field
  cy.get('#search').type(letter);
});
*/

/*
When( 'I click on the product {string} {string} times', ( productName, times ) => {
  // TODO: implement step
  cy.get( 'div.product h2' )
    .contains( productName )
    .parent()
    .find( 'button' )
    .click( { clickCount: times } );
} );
*/
Then( 'I should see the correct total price in the product line', () => {
  // TODO: implement step
  cy.get( '#cart ul li' ).each( ( $li ) => {
    const $price = parseInt( ( $li.find( 'span:nth-child(2)' ).text() ).replace( /[^\d]/g, '' ), 10 );
    const $count = parseInt( ( $li.find( 'span:nth-child(3)' ).text() ).replace( /[^\d]/g, '' ), 10 );
    const $total = parseInt( ( $li.find( 'span:last-child' ).text() ).replace( /[^\d]/g, '' ), 10 );
    const $expectedTotal = parseInt( ( $price ) * parseInt( $count ) );
    expect( $total ).to.equal( $expectedTotal );
  } )
} );


/*
replace( /[^\d]/g, '' ), 10
const price = '2500kr';
const  $price = parseInt( $li.find( 'span:nth-child(2)' ).parseFloat( text )).replace('kr', ''), 10);

cy.get( '#cart ul li' ).each( ( $li ) => {
  const $price = $li.find( 'span:nth-child(2)' ).text()
  const $count = $li.find( 'span:nth-child(3)' ).text()
  const $total = $li.find( 'span:last-child' ).text()
  const $expectedTotal = parseInt( $price ) * parseInt( $count )
  expect( $total ).to.equal( $expectedTotal )
} )


cy.get( '#cart li:not(.total) span:last-child' ).then( ( $spans ) => {
  let total = 0
  for ( let i = 0; i < $spans.length; i++ ) {
    total += parseFloat( $spans[ i ].innerText )
  }
  cy.get( '#cart .total span' ).invoke( 'text' ).then( ( text ) => {
    expect( total ).to.equal( parseFloat( text ) )
  } )
} )
*/

/*
cy.get( '#cart ul li' ).each( ( $li ) => {
  const $price = $li.find( 'span' ).eq( 0 ).text().replace( 'kr,', '' );
  const $count = $li.find( 'span' ).eq( 1 ).text().replace( 'st)', '' );
  const $total = $li.find( 'span' ).eq( 2 ).text().replace( 'kr', '' );
  const expectedTotal = $price * $count;
  expect( $total ).to.equal( expectedTotal );
} );
*/

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


/*
Then( 'I should see that the total price {string} is equal  to the quantity {string} multiplied by the price {string}', ( totalPrice, quantity, price ) => {
  // TODO: implement step
  const totalPrice = quantity * price;
  cy.get( 'li.total' ).should( 'contain', totalPrice );
  
} );
*/
