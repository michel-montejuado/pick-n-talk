Feature: Text to speech
  As a user who cannot read, I want text read aloud so that I understand the pictograms.

  Scenario: Speak selected pictogram
    Given a binder is open
    When the user taps a pictogram
    Then the associated word is spoken
