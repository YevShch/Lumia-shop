Feature: check the order in the cart
As a user, I want to be able to check my cart
so I can see all ordered products, 
their quantity and total cost so I can make a purchase later.

Background: starting search
    Given that I am on the start page
    And I enter the letter "l" in the search field


  Scenario: Check products, quantity, prices and total price of order in the cart
    When I click on the product "Taklampa" 
    And I click on the product "Golvlampa"
    Then I should see the product "Taklampa" at the price "2500kr" and "1st" piece in the cart
    And I should see the product "Golvlampa" at the price "1780kr" and "1st" piece in the cart
    And I should see the total price "4280" in the cart

  Scenario: Сheck that row sums has been calculated correctly in the shopping cart
    When I click on the product "Taklampa" 
    And   I click on the product "Taklampa"
    And I click on the product "Spotlight" 
    And I click on the product "Spotlight"
    Then I should see the correct total price in the product line

  Scenario: Сheck that the total order price has been calculated correctly
    When I click on the product "Taklampa"
    And I click on the product "Bordslampa"
    And I click on the product "Lampett"
    Then I should see the total price is equal to the sum of the prices of the products
    

