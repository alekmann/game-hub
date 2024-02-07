import { expect } from "chai";
import { Builder, By, Key, until } from "selenium-webdriver";

it("Selenium Test", async function () {
  this.timeout(5000);

  // Create a new instance of the WebDriver
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    // Navigate to a website
    await driver.get("http://localhost:5173/");

    // Wait for any element to be located with a timeout of 5000ms
    await driver.wait(until.elementLocated(By.css("body")), 5000);

    // Find any element on the page
    const bodyElement = await driver.findElement(By.css("body"));

    // Assert that the body element is not null
    expect(bodyElement).to.not.be.null;
  } finally {
    // Quit the WebDriver session
    await driver.quit();
  }
});
