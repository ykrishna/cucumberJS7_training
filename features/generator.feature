Feature: Step is a generator
  Scenario: Step generator run successfully
    When I call a step which is a generator with return value "ok"
    Then I can see the yielded "ok" value in the context