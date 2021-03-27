package com.UI_Autotmation.Step_Definition;

import org.junit.Assert;

import com.UI_Automation.Pages.RowPageElement;
import com.UI_Automation.Utilities.Driver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UI_AutomationSelectRows {
	
	RowPageElement rowEle = new RowPageElement ();
	
	@Given("User verifies a homepage")
	public void user_verifies_a_homepage() {
		 String expectedTitle = Driver.getDriver().getTitle();
		 System.out.println(expectedTitle);
		 String actualTitle = "The Internet";
		 Assert.assertEquals(expectedTitle, actualTitle);
	}

	@When("User selects {string}")
	public void user_selects(String string) {
	   String sibText= rowEle.SiblingsText.getText();
	   System.out.println("Select row: " + sibText);
	   
	   String rowOneText= rowEle.rowOne.getText();
	   System.out.println("Select row: " + rowOneText);
	   
	   String rowTwoText= rowEle.rowThirteen.getText();
	   System.out.println("Select row: " + rowTwoText);
	   
	   
	}

	@Then("User should be able to verify all rows")
	public void user_should_be_able_to_verify_all_rows() {
		String expectedA = "Siblings" ;
		String expectedB = "1.3" ;
		String expectedC = "13.2" ;
	  Assert.assertEquals(expectedA, rowEle.SiblingsText.getText());
	  Assert.assertEquals(expectedB, rowEle.rowOne.getText());
	  Assert.assertEquals(expectedC, rowEle.rowThirteen.getText());
	}
}
