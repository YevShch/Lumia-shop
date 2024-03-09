Feature: add items to the cart
  As a user, I want to be able to add products to my cart
  so I can make a purchase later.

  Background: starting search
    Given that I am on the start page
    And I enter the letter "l" in the search field


  Scenario: Add products "Taklampa" and "Bordslampa" to the cart
    When I click on the product "Taklampa"
    And I click on the product "Bordslampa"
    Then I should see the product "Taklampa" in the cart
    And I should see the product "Bordslampa" in the cart
   
  Scenario: Add products from general and product pages to the cart
    When I click on the product "Lampett"
    And I go to the product page "Golvlampa"
    And I should see the product "Golvlampa" and click on buy button
    And I close the product page
    Then I should see the product "Lampett" in the cart
    And I should see the product "Golvlampa" in the cart
    
  Scenario: Add products after starting to fill out the payment form
    When I click on the product "Taklampa"
    And I click on the product "Spotlight"
    And I click on the button "Gå till kassan"
    When I enter the text "Anna" in the field "Namn:"
    And I enter the text "Parkgatan" in the field "Gatuadress:"
    And I enter the text "12344" in the field "Postnr:"
    And I click on the product "Bordslampa"
    Then I should see the product "Taklampa" in the cart
    And I should see the product "Spotlight" in the cart
    And I should see the product "Bordslampa" in the cart


   
