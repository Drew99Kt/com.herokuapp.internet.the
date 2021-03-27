Feature: Verify valid login (positive test), invalid login (negative test), select followed rows


Background: 
	Given User is at the login page
@SmokeTest
Scenario: successful login and verify success message displays
	When User enters valid username and password and click login
	Then User should be able to verify welcome text

@SmokeTest
Scenario Outline: verify invalid login
	When User enters "<Invalid_Username>"  and "<Invalid_Password>" and click login
	Then User should be able to verify invalid text

	Examples:	
	
	| Invalid_Username         | Invalid_Password   |
	| King123                  |  queen!!           |
	| blankPassword            |                    |
	|                          | blankUsername      |
	
@RegressionTest
Scenario: successful select rows 
	Given User verifies a homepage
	When User selects "Siblings" 
	And User selects "1.3"
	And User selects "13.2"
	Then User should be able to verify all rows