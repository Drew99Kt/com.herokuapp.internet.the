package com.UI_Automation.Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.UI_Automation.Utilities.Driver;

public class RowPageElement {

	public RowPageElement () {
		PageFactory.initElements(Driver.getDriver(), this);
	}
	
	// ***********All element locator***********
	@FindBy (xpath = "//div[@id=\"content\"]/div/h3")
	public WebElement homepageText;
	
	@FindBy (xpath = "//div[@id=\"content\"]//div/h4[2]")
	public WebElement SiblingsText;
	
	@FindBy (xpath = "(//div[@id=\"sibling-1.1\"]/div)[2]")
	public WebElement rowOne;
	
	@FindBy (xpath = "(//div[@id=\"sibling-13.1\"]/div)[1]")
	public WebElement rowThirteen;
	
}
