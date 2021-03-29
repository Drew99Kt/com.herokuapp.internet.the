package com.UI_Autotmation.Step_Definition;

import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;

import com.UI_Automation.Pages.LoginPageElement;
import com.UI_Automation.Utilities.ConfigsReader;
import com.UI_Automation.Utilities.Driver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;




public class UI_AutomationValidLoginStep_Definition {
	LoginPageElement getEle = new LoginPageElement();
	Actions act = new Actions(Driver.getDriver());
	public static String url= "urlOne";
	
	
	
	@Given("User is at the login page")
	public void user_is_at_the_login_page() {
	
	 String expectedTitle = Driver.getDriver().getTitle();
	 System.out.println(expectedTitle);
	 String actualTitle = "The Internet";
	 Assert.assertEquals(expectedTitle, actualTitle);
	}

	@When("User enters valid username and password and click login")
	public void user_enters_valid_username_and_password_and_click_login() {
	getEle.enterUsername(ConfigsReader.getProperty("username"));
	getEle.enterPassword(ConfigsReader.getProperty("password"));
	act.moveToElement(getEle.loginButt).click().perform();
	}

	@Then("User should be able to verify welcome text")
	public void user_should_be_able_to_verify_welcome_text() {
	String expectedAfterValidLogin =  getEle.welText.getText();
	String actualText = ConfigsReader.getProperty("realText");
	Assert.assertEquals(expectedAfterValidLogin, actualText);
	}
}
