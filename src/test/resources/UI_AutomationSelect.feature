@Test
Feature: verify elements esist 
Scenario: successful select rows 
	Given User verifies a homepage
	When User selects "Siblings" 
	And User selects "1.3"
	And User selects "13.2"
	Then User should be able to verify all rows