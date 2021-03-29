package com.UI_Automation.Runners;



import org.junit.runner.RunWith;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {
				"pretty", 
				"html:target/default-cucumber-reports",
				"json:target/cucumber.json"
		}, 
		
		features = "src/test/resources", 
		glue = "com.UI_Autotmation.Step_Definition",
		dryRun =  false,
		monochrome = true,
		tags = "@Test" )
	



public class TestRunner {

}
