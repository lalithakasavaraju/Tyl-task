Feature: Checkout functionality

  Scenario: Verify checkout functionality

    Given I am on swag labs website
    When I login with valid credentials
    And I sort the products high to low
    And I add second costliest and cheapest items to the basket
    And I checkout the items
    Then I should be successfully able to buy the products
