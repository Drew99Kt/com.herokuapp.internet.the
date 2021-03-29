$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/UI_AutomationSelect.feature");
formatter.feature({
  "name": "verify elements esist",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.scenario({
  "name": "successful select rows",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User verifies a homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_AutomationSelectRows.user_verifies_a_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Siblings\"",
  "keyword": "When "
});
formatter.match({
  "location": "UI_AutomationSelectRows.user_selects(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"1.3\"",
  "keyword": "And "
});
formatter.match({
  "location": "UI_AutomationSelectRows.user_selects(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"13.2\"",
  "keyword": "And "
});
formatter.match({
  "location": "UI_AutomationSelectRows.user_selects(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to verify all rows",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_AutomationSelectRows.user_should_be_able_to_verify_all_rows()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/UI_AutomationValidLogin.feature");
formatter.feature({
  "name": "Verify valid login (positive test), invalid login (negative test)",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is at the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_AutomationValidLoginStep_Definition.user_is_at_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "successful login and verify success message displays",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "User enters valid username and password and click login",
  "keyword": "When "
});
formatter.match({
  "location": "UI_AutomationValidLoginStep_Definition.user_enters_valid_username_and_password_and_click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to verify welcome text",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_AutomationValidLoginStep_Definition.user_should_be_able_to_verify_welcome_text()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/UI_AutumationInValidLogin.feature");
formatter.feature({
  "name": "Verify valid login (positive test), invalid login (negative test)",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.scenarioOutline({
  "name": "verify invalid login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters \"\u003cInvalid_Username\u003e\"  and \"\u003cInvalid_Password\u003e\" and click login",
  "keyword": "When "
});
formatter.step({
  "name": "User should be able to verify invalid text",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Invalid_Username",
        "Invalid_Password"
      ]
    },
    {
      "cells": [
        "King123",
        "queen!!"
      ]
    },
    {
      "cells": [
        "blankPassword",
        ""
      ]
    },
    {
      "cells": [
        "",
        "blankUsername"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is at the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_AutomationValidLoginStep_Definition.user_is_at_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "User enters \"King123\"  and \"queen!!\" and click login",
  "keyword": "When "
});
formatter.match({
  "location": "UI_AutomationInvalidLoginStep_Definition.user_enters_and_and_click_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to verify invalid text",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_AutomationInvalidLoginStep_Definition.user_should_be_able_to_successfully_invalid_text()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is at the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_AutomationValidLoginStep_Definition.user_is_at_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "User enters \"blankPassword\"  and \"\" and click login",
  "keyword": "When "
});
formatter.match({
  "location": "UI_AutomationInvalidLoginStep_Definition.user_enters_and_and_click_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to verify invalid text",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_AutomationInvalidLoginStep_Definition.user_should_be_able_to_successfully_invalid_text()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is at the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_AutomationValidLoginStep_Definition.user_is_at_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "User enters \"\"  and \"blankUsername\" and click login",
  "keyword": "When "
});
formatter.match({
  "location": "UI_AutomationInvalidLoginStep_Definition.user_enters_and_and_click_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to verify invalid text",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_AutomationInvalidLoginStep_Definition.user_should_be_able_to_successfully_invalid_text()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});