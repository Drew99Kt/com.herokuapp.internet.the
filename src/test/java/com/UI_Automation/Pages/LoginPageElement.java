package com.UI_Automation.Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.UI_Automation.Utilities.Driver;


public class LoginPageElement {
	
	public LoginPageElement () {
		PageFactory.initElements(Driver.getDriver(), this);
	}
	
	// ***********All element locator***********
	@FindBy (xpath = "//div [@id = \"content\"]/div/h2")
	public WebElement loginText;
	
	@FindBy (id = "username")
	public WebElement usernameBox;
	
	@FindBy (id = "password")
	public WebElement passwordBox;
	
	@FindBy (xpath = "//button[@type = \"submit\"]/i [@class=\"fa fa-2x fa-sign-in\"]")
	public WebElement loginButt;
	
	@FindBy (xpath = "//div[@id = \"content\"]/div//h4[@class=\"subheader\"]")
	public WebElement welText;
	
	@FindBy (xpath = "//div[@id = \"flash-messages\"]//div[@ id= \"flash\"]")
	public WebElement errorText;

	
	
	// ***********Create methods for inputing element **********
	public void enterUsername (String user) {
		usernameBox.sendKeys(user);
	}
	
	public void enterPassword (String pass) {
		passwordBox.sendKeys(pass);
	}
	
	
	
	
	
}
