@Test
Feature: Verify valid login (positive test), invalid login (negative test)


Background: 
	Given User is at the login page

Scenario: successful login and verify success message displays
	When User enters valid username and password and click login
	Then User should be able to verify welcome text
