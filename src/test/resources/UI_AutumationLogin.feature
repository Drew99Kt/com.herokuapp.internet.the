Feature: Verify valid login (positive test) and invalid login (negative test).

Background: 
	Given User is at the login page
@Test1
Scenario: successful login and verify success message displays
	When User enters valid username and password and click login
	Then User should be able to verify welcome text

@Test2
Scenario Outline: verify invalid login
	When User enters "<Invalid_Username>"  and "<Invalid_Password>" and click login
	Then User should be able to verify invalid text

	Examples:	
	
	| Invalid_Username         | Invalid_Password   |
	| King123                  |  queen!!           |
	| Lavender456              |                    |
	|                          | blankusername      |
	
@Test3
Scenario: successful select rows 
	Given User verifies a homepage
	When User selects "Siblings" 
	And User selects "1.3"
	And User selects "13.2"
	Then User should be able to verify all rows