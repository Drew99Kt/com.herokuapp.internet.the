@Test
Feature: Verify valid login (positive test), invalid login (negative test)


Background: 
	Given User is at the login page

Scenario Outline: verify invalid login
	When User enters "<Invalid_Username>"  and "<Invalid_Password>" and click login
	Then User should be able to verify invalid text

	Examples:	
	
	| Invalid_Username         | Invalid_Password   |
	| King123                  |  queen!!           |
	| blankPassword            |                    |
	|                          | blankUsername      |