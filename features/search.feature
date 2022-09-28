Feature: Search

    Scenario: Search any

    Given I visit google homepage
    When I search for Techverito
    Then I should see the results