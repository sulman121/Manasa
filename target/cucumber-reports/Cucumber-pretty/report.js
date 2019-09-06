$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/AccessDev3.feature");
formatter.feature({
  "name": "Access for Dev3",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user get access for DEV 3",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is at savynt login page",
  "keyword": "Given "
});
formatter.match({
  "location": "GUIStepDefination.user_is_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Get the Access",
  "keyword": "Then "
});
formatter.match({
  "location": "GUIStepDefination.user_Get_the_Access()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027NWEDL-CKYX1N2\u0027, ip: \u002710.0.249.75\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\ca2543\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:64197}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e89fc9f2fe7a778a18303e61bac265a0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat Steps.GUIStepDefination.user_Get_the_Access(GUIStepDefination.java:156)\r\n\tat ✽.user Get the Access(file:src/test/resources/Features/AccessDev3.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/SavyntAccess.feature");
formatter.feature({
  "name": "Savynt Access",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "LOA3 and No MFA",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is at savynt login page",
  "keyword": "Given "
});
formatter.match({
  "location": "GUIStepDefination.user_is_at_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gave NO MFA Access",
  "keyword": "Then "
});
formatter.match({
  "location": "GUIStepDefination.user_gave_NO_MFA_Access()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cli id\u003d\"reqhme\" class\u003d\"active open\"\u003e...\u003c/li\u003e is not clickable at point (118, 147). Other element would receive the click: \u003cdiv class\u003d\"bg\" style\u003d\"background: rgb(0, 0, 0); opacity: 0.03; width: 100%; height: 100%; position: absolute; top: 0px;\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d76.0.3809.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027NWEDL-CKYX1N2\u0027, ip: \u002710.0.249.75\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\ca2543\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:64198}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c6537109f6d30a7b10e22864c54fc720\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat Steps.GUIStepDefination.user_gave_NO_MFA_Access(GUIStepDefination.java:133)\r\n\tat ✽.user gave NO MFA Access(file:src/test/resources/Features/SavyntAccess.feature:6)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});