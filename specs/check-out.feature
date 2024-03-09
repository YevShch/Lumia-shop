Feature: Cheking out
As a user, I would like to be able
to fill out a payment form
So that I can complete a purchase


  Background: starting search
    Given that I am on the start page
    And I enter the letter "l" in the search field

  Scenario: Cheking out
    Given I click on the product "Taklampa"
    When I click on the button "Gå till kassan"
    And I enter the text "Anna" in the field "Namn:"
    And I enter the text "Parkgatan 21" in the field "Gatuadress:"
    And I enter the text "12344" in the field "Postnr:"
    And I enter the text "Lund" in the field "Ort:"
    And I enter the text "1234567891234" in the field "Kortnr:"
    And I enter the text "01/26" in the field "Datum"
    And I enter the text "123" in the field "CCV"
    And I press the button "Betala"
    Then the payment is successful and I should receive a confirmation with text "paying"

  Scenario: Checking out with an empty cart
    And I click on the button "Gå till kassan"
    When I enter the text "Anna" in the field "Namn:"
    And I enter the text "Parkgatan 21" in the field "Gatuadress:"
    And I enter the text "12344" in the field "Postnr:"
    And I enter the text "Lund" in the field "Ort:"
    And I enter the text "1234567891234" in the field "Kortnr:"
    And I enter the text "01/26" in the field "Datum"
    And I enter the text "123" in the field "CCV"
    And I press the button "Betala"
    Then the payment should not be completed and I should not receive a confirmation with text "paying"

  Scenario: Checking out with an empty payment form
    Given I click on the product "Taklampa"
    And I click on the button "Gå till kassan"
    And I press the button "Betala"
    Then the payment should not be completed and I should not receive a confirmation with text "paying"
