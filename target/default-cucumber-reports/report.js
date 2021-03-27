$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/UI_AutumationLogin.feature");
formatter.feature({
  "name": "Verify valid login (positive test), invalid login (negative test), select followed rows",
  "description": "",
  "keyword": "Feature"
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
      "name": "@SmokeTest"
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
formatter.scenarioOutline({
  "name": "verify invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
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
      "name": "@SmokeTest"
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
      "name": "@SmokeTest"
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
      "name": "@SmokeTest"
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