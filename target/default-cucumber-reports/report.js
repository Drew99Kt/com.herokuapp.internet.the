$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/UI_AutumationLogin.feature");
formatter.feature({
  "name": "Verify valid login (positive test) and invalid login (negative test).",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "verify invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test2"
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
        "Lavender456",
        ""
      ]
    },
    {
      "cells": [
        "",
        "blankusername"
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
      "name": "@Test2"
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
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "User enters \"Lavender456\"  and \"\" and click login",
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
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "User enters \"\"  and \"blankusername\" and click login",
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