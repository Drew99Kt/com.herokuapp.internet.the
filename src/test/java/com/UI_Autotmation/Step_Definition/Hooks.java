package com.UI_Autotmation.Step_Definition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.testng.annotations.BeforeClass;

import com.UI_Automation.Utilities.ConfigsReader;
import com.UI_Automation.Utilities.Driver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	
	
	@Before
	public void setUp() throws InterruptedException  {
		
		
		
		Driver.getDriver().get(ConfigsReader.getProperty("urlOne"));
		Driver.getDriver().manage().window().maximize();
		Driver.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Thread.sleep(2000);
	}
	
	
	@After
	public void tearDown(Scenario scenario) throws InterruptedException { 
		// only takes a screenshot if the scenario fails
		if (scenario.isFailed()) {
			// taking a screenshot
			final byte[] screenshot = ((TakesScreenshot) Driver.getDriver())
					.getScreenshotAs(OutputType.BYTES);
			// adding the screenshot to the report
			scenario.embed(screenshot, "image/png");
		}
		Thread.sleep(2000);
		Driver.closeDriver();
	}

}
