package com.UI_Autotmation.Step_Definition;

import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;

import com.UI_Automation.Pages.LoginPageElement;
import com.UI_Automation.Utilities.ConfigsReader;
import com.UI_Automation.Utilities.Driver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class UI_AutomationInvalidLoginStep_Definition {
	LoginPageElement getEle = new LoginPageElement();
	Actions act = new Actions(Driver.getDriver());
	public static String url= "urlTwo";
	
	
	@When("User enters {string}  and {string} and click login")
	public void user_enters_and_and_click_login(String invalidUser, String invalidPass) {
	
	 getEle.enterUsername(invalidUser);
	 getEle.enterPassword(invalidPass);
	 act.moveToElement(getEle.loginButt).click().perform();
	}

	@Then("User should be able to verify invalid text")
	public void user_should_be_able_to_successfully_invalid_text() {
		String expectedAfterinvalidLogin =  getEle.errorText.getText();
		String actualText = ConfigsReader.getProperty("invalidText");
		Assert.assertTrue(expectedAfterinvalidLogin.contains(actualText));
		
		//System.out.println(expectedAfterinvalidLogin);
	}
	
	
}
