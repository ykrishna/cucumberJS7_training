Feature: W3C Webdriver API Protocol Commands Verification Using Cucumber
  In order to follow W3C Webdriver API standards
  As a QA Engineer
  I want to update all existing JSON wire protocol based tests to W3C Webdriver Protocol standards

  Scenario Outline: Open a WebPage using URL
    Given I have navigated to "<webpage>"
    Then I see webpage title as "<title>"
    And I see current URL as "<currentURL>"
#    When I clicked the "3. Add a User" link
#    Then I register user details
#    When I clicked the "4. Login" link
#    Then I login to site
#    And I should see "**Successful Login**" massage on screen

    Examples:
      | webpage                            | title                                                  | currentURL                         |
      | http://thedemosite.co.uk/login.php | Login example page to test the PHP MySQL online system | http://thedemosite.co.uk/login.php |