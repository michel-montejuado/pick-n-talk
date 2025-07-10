Feature: Share binders
  As a user, I want to share my binders so that collaborators can assist me.

  Scenario: Share a binder with someone
    Given I view one of my binders
    When I share the binder using an email address
    Then that person can view my binder
