Feature: Check the payment form 
As a user, I would like to be able
 to fill out a payment form
So that I can complete a purchase

  Background: starting search
    Given that I am on the start page
    And I enter the letter "l" in the search field
    And I click on the product "Taklampa"
    When I click on the button "Gå till kassan"

  Scenario: Check that payment form exists
    Then I should see field "Namn:"
    And I should see field "Gatuadress:"
    And I should see field "Postnr:"
    And I should see field "Ort:"
    And I should see field "Kortnr:"
    And I should see field "Datum"
    And I should see field "CCV"

  Scenario Outline: Fill out name field with invalid data
    When I enter the text "<text>" in the field "Namn:"
    And I enter the text "Parkgatan 21" in the field "Gatuadress:"
    And I enter the text "12345" in the field "Postnr:"
    And I enter the text "Lund" in the field "Ort:"
    And I enter the text "1234567891234" in the field "Kortnr:"
    And I enter the text "01/26" in the field "Datum"
    And I enter the text "123" in the field "CCV"
    And I press the button "Betala"
    Then I should see an error message that the name field "#name" is filled in the wrong format

    Examples:
      | text                                                                                                                        |
      | 1                                                                                                                           |
      | a                                                                                                                           |
      | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |
      | !!!!!!!!!!!!                                                                                                                |
      | Александр                                                                                                                   |

  Scenario Outline: Fill out street field with invalid data
    When I enter the text "Anna" in the field "Namn:"
    And I enter the text "<text>" in the field "Gatuadress:"
    And I enter the text "12345" in the field "Postnr:"
    And I enter the text "Lund" in the field "Ort:"
    And I enter the text "1234567891234" in the field "Kortnr:"
    And I enter the text "01/26" in the field "Datum"
    And I enter the text "123" in the field "CCV"
    And I press the button "Betala"
    Then I should see an error message that the name field "#street" is filled in the wrong format

    Examples:
      | text                                                                                                                        |
      | 1                                                                                                                           |
      | a                                                                                                                           |
      | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |
      | Цветочная                                                                                                                   |
      | !!!!!!!!!!!!                                                                                                                |


  Scenario Outline: Fill out postal code field with incorrect data
    When I enter the text "Anna" in the field "Namn:"
    And I enter the text "Parkgatan 21" in the field "Gatuadress:"
    And I enter the text "<text>" in the field "Postnr:"
    And I enter the text "Lund" in the field "Ort:"
    And I enter the text "1234567891234" in the field "Kortnr:"
    And I enter the text "01/26" in the field "Datum"
    And I enter the text "123" in the field "CCV"
    And I press the button "Betala"
    Then I should see an error message that the zip-code field "#zip" is filled in the wrong format


    Examples:
      | text   |
      | 1      |
      | a      |
      | 123456 |
      | aa aaa |
      | 122 ww |
      | **´-1  |

  Scenario Outline: Fill out sity field with invalid data
    When I enter the text "Anna" in the field "Namn:"
    And I enter the text "Parkgatan 21" in the field "Gatuadress:"
    And I enter the text "12345" in the field "Postnr:"
    And I enter the text "<text>" in the field "Ort:"
    And I enter the text "1234567891234" in the field "Kortnr:"
    And I enter the text "01/26" in the field "Datum"
    And I enter the text "123" in the field "CCV"
    And I press the button "Betala"
    Then I should see an error message that the city field "#city" is filled in the wrong format

    Examples:
      | text                                                                                                                        |
      | 111111111                                                                                                                   |
      | Москва                                                                                                                      |
      | x                                                                                                                           |
      | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |
      | **rt&ll                                                                                                                     |

  Scenario Outline: Fill out card number field with invalid data
    When I enter the text "Anna" in the field "Namn:"
    And I enter the text "Parkgatan 21" in the field "Gatuadress:"
    And I enter the text "12345" in the field "Postnr:"
    And I enter the text "Lund" in the field "Ort:"
    And I enter the text "<text>" in the field "Kortnr:"
    And I enter the text "01/26" in the field "Datum"
    And I enter the text "123" in the field "CCV"
    And I press the button "Betala"
    Then I should see an error message that the card number field "#card-nr" is filled in the wrong format

    Examples:
      | text                |
      | 1 23456789012       |
      | aaaaaaaaaaaaaa      |
      | !!!!!!              |
      | 123456789012        |
      | 12345678901234567   |
      | 1234 5678 9012 1234 |


  Scenario Outline: Fill out card date field with invalid data
    When I enter the text "Anna" in the field "Namn:"
    And I enter the text "Parkgatan 21" in the field "Gatuadress:"
    And I enter the text "12345" in the field "Postnr:"
    And I enter the text "Lund" in the field "Ort:"
    And I enter the text "12345678901234" in the field "Kortnr:"
    And I enter the text "<text>" in the field "Datum"
    And I enter the text "123" in the field "CCV"
    And I press the button "Betala"
    Then I should see an error message that the card number field "#card-date" is filled in the wrong format

    Examples:
      | text  |
      | 78/78 |
      | 01/01 |
      | aaaaa |
      | !!/** |
      | aa/aa |
      | 01/aa |
      | 122/5 |


  Scenario Outline: Fill out card ccv field with invalid data
    When I enter the text "Anna" in the field "Namn:"
    And I enter the text "Parkgatan 21" in the field "Gatuadress:"
    And I enter the text "12345" in the field "Postnr:"
    And I enter the text "Lund" in the field "Ort:"
    And I enter the text "12345678901234" in the field "Kortnr:"
    And I enter the text "01/25" in the field "Datum"
    And I enter the text "<text>" in the field "CCV"
    And I press the button "Betala"
    Then I should see an error message that the card number field "#card-ccv" is filled in the wrong format

    Examples:
      | text |
      | 12   |
      | 1234 |
      | !!!  |
      | aaa  |
