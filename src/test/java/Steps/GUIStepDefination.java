package Steps;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import ExcelReader.ReadExcel;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.github.bonigarcia.wdm.WebDriverManager;

public class GUIStepDefination<WebElements> {

	WebDriver driver;
	int Count = 0;
	ReadExcel Readexcel = new ReadExcel("C:\\Users\\ca2543\\HarpRegistration\\Savynt\\Test.xlsx");

	@Before
	public void pre_testing() throws IOException {

		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();

		driver.get(
				"https://cms-dev.okta.com/app/centersformedicaremedicaidservicesdev_harpforccsq_1/exkulstkmlHRctVST296/sso/saml");
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
	}

	@Given("user is at savynt login page")
	public void user_is_at_homepage() throws InterruptedException {
		String title = driver.getTitle();
		System.out.println(title);
		driver.findElement(By.xpath("//input[@id='okta-signin-username']")).sendKeys("amaple");
		driver.findElement(By.xpath("//input[@id='okta-signin-password']")).sendKeys("Superman123!");
		driver.findElement(By.xpath("//input[@id='okta-signin-submit']")).click();

		Thread.sleep(3000);

	}

	@Then("user gave NO MFA Access")
	public void user_gave_NO_MFA_Access() throws Exception {

		driver.findElement(By.id("arsRequestAccessForOthers")).click();
		Thread.sleep(3000);
		driver.findElement(By.id("arsRequestAccessForOthers")).click();

		int rowCount = Readexcel.getRowCount("sheet1");
		for (int rowNum = 2; rowNum <= rowCount; rowNum++) {

			WebDriverWait wait = new WebDriverWait(driver, 25);

			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='dtsearch_myDataTable']")));

			driver.findElement(By.xpath("//input[@id='dtsearch_myDataTable']")).click();

			driver.findElement(By.xpath("//input[@id='dtsearch_myDataTable']"))
					.sendKeys(Readexcel.getCellData("sheet1", "FullEmail", rowNum));

			driver.findElement(By.xpath("//button[@id='search_myDataTable']")).click();

			driver.findElement(By.xpath("//div[@id='s2id_autogen6']//b")).click();

			driver.findElement(By.xpath("//div[contains(text(),'100')]")).click();
			Thread.sleep(2000);

			try {
				driver.findElement(By.xpath(
						"/html[1]/body[1]/div[3]/div[2]/div[2]/div[2]/div[2]/div[3]/div[1]/table[1]/tbody[1]/tr/td[1]"))
						.click();
				driver.findElement(By.id("arsUserNextButton")).click();
				driver.findElement(By.id("dtsearch_applicationlist")).sendKeys("endpoint for OKTA DEV");

				driver.findElement(By.id("search_applicationlist")).click();
				Thread.sleep(1500);
				
				if(driver.findElement(By.xpath("//*[@id=\"applicationlist\"]/tbody/tr[1]/td[3]/div/a[3]")).isDisplayed()){
					driver.findElement(By.xpath("//*[@id=\"applicationlist\"]/tbody/tr[1]/td[3]/div/a[3]")).click();
					driver.findElement(By.xpath("//*[@id=\"ui-id-1\"]/div[3]/button[1]")).click();
				}else {
					System.out.println("Modification is not Available");
					driver.findElement(By.xpath("//a[@class='btn default btn-xs pull-right green']")).click();
				}
				
				
				

				
				

				driver.findElement(By.id("arsReqAcessCheckout")).click();
				
				driver.findElement(By.xpath(
						"/html[1]/body[1]/div[3]/div[2]/div[4]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[2]/div[1]/label[1]/div[1]/div[1]/input[1]"))
						.sendKeys("HARP NO MFA");
				
				driver.findElement(By.xpath(
						"/html[1]/body[1]/div[3]/div[2]/div[4]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[2]/div[1]/label[1]/div[1]/div[1]/button[1]"))
						.click();
				
				Thread.sleep(1500);

				driver.findElement(By.id("addEntitlement")).click();
				
				driver.findElement(By.id("nextBtn")).click();

				Thread.sleep(1000);
				driver.findElement(By.id("comments_global")).sendKeys("NO MFA");
				Thread.sleep(1000);
				driver.findElement(By.id("requestSubmit2")).click();

			} catch (Exception e) {

			}

			driver.findElement(By.id("reqhme")).click();
			driver.findElement(By.id("arsRequestAccessForOthers")).click();
			Thread.sleep(2000);
			driver.findElement(By.id("arsRequestAccessForOthers")).click();

		}

	}

//================================================================Dev3===============================================================================================

	@Then("user Get the Access")
	public void user_Get_the_Access() throws Exception {
		driver.findElement(By.id("ADMIN")).click();
		Thread.sleep(2000);
		int rowCount = Readexcel.getRowCount("sheet1");
		for (int rowNum = 4; rowNum <= rowCount; rowNum++) {
			
			driver.findElement(By.xpath("//input[@id='dtsearch_usersList']"))
					.sendKeys(Readexcel.getCellData("sheet1", "FullEmail", rowNum));

			driver.findElement(By.xpath("//button[@id='search_usersList']")).click();
			Thread.sleep(1500);
			driver.findElement(By.xpath("//a[@class='tooltip1']")).click();
			driver.findElement(By.xpath("//a[@id='ui-id-2']")).click();
			driver.findElement(By.xpath("//input[@id='customproperty1']")).clear();
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@id='customproperty1']")).sendKeys("3");
			Thread.sleep(3000);
			JavascriptExecutor jse = (JavascriptExecutor)driver;
			jse.executeScript("window.scrollBy(0,3000)");
			Thread.sleep(1000);
			driver.findElement(By.xpath("//*[@id=\"updateusers\"]/div/div[27]/a")).click();
			Thread.sleep(3000);
			driver.findElement(By.id("ADMIN")).click();
		}
	}

	@After
	public void teardown() throws InterruptedException {
		Thread.sleep(3000);
		driver.quit();
	}
}
