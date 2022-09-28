const {Given, Then, When, Before, After} = require('@cucumber/cucumber')

const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const chrome = require('chromedriver');

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

Before(function () {
    console.log('Inside Before')
});

After(function () {
    console.log('Inside After')
    driver.quit()
});


Given('I visit google homepage', async () => {    
    await driver.get('https://www.google.com');
    await driver.findElement(By.xpath('//*[@id="L2AGLb"]/div')).click()
    
          });

When('I search for Techverito', async () => {
    await driver.findElement(By.name('q')).sendKeys('Ultima school'+'\n');
          });

Then('I should see the results', async () => {
    
    let text = await driver.findElement(By.id('search')).getText();
    console.log(text)
    
          });