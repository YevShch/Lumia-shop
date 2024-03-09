Feature: Search
  As a user I want to able to search for products
  using the search field.

  Scenario: Searching for products including "s"
    Given that I am on the start page
    When I enter the letter "s" in the search field
    Then I should see the product "Bordslampa"
    And I should see the product "Spotlight"

  Scenario: Searching for products including "u"
    Given that I am on the start page
    When I enter the letter "u" in the search field
    Then I should not see the product "Spotlight"
    And I should not see the product "Bordslampa"

  Scenario Outline: Searching for products including "<searchTerm>"
    Given that I am on the start page
    When I enter the letters "<searchTerm>" in the search field
    Then I should see the product "<productName>"

    Examples:
      | searchTerm | productName |
      | bord       | Bordslampa  |
      | tak        | Taklampa    |
      | spot       | Spotlight |
