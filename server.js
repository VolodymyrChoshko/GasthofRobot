const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false, slowMo: 100});
  const page = await browser.newPage();

  console.log("Loading Page ...")
  await page.goto('https://office.gastronovi.com/en/', {waitUntil: 'load', timeout: 0});
  console.log("Page Loaded")

  console.log("Skipped");
  const continueBtn1 = await page.waitForSelector('a.introjs-skipbutton', {timeout: 0});
  await continueBtn1.click();

  //Login on the app  
  console.log("Back Office ---");
  const backOffice = await page.waitForSelector('#choiceTable > #choiceWrap > #back', {timeout: 0});
  await backOffice.click();
  console.log("Back Office --- Clicked");

  console.log("Username ---");
  const inputUsername = await page.waitForSelector('input#username', {timeout: 0});
  await inputUsername.type("mangst");
  console.log("Username --- Filled");

  console.log("Password ---");
  const inputPassword = await page.waitForSelector('input#password', {timeout: 0});
  await inputPassword.type("8302");
  console.log("Password --- Filled");

  console.log("Login Button ---");
  const loginButton = await page.waitForSelector('#send-element > input#send', {timeout: 0});
  await loginButton.click();
  console.log("Login Button --- Clicked");

  console.log("Restaurant ---");
  const Restaurant = await page.waitForSelector('div#booking_14787', {timeout: 0});
  await Restaurant.click();
  console.log("Restaurant --- Clicked");

  
  console.log("Skipped");
  const continueBtn2 = await page.waitForSelector('a.introjs-skipbutton', {timeout: 0});
  await continueBtn2.click();

  console.log("NavServe ---");
  const navServe = await page.waitForSelector('button#ext-gen207', {timeout: 0});
  await navServe.click();
  console.log("NavServe --- Clicked");

  console.log("Turnover ---");
  const turnover = await page.waitForSelector('a#menuItem_54', {timeout: 0});
  await turnover.click();
  console.log("Turnover --- Clicked");

  console.log("Skipped");
  const continueBtn3 = await page.waitForSelector('a.introjs-skipbutton', {timeout: 0});
  await continueBtn3.click();

  console.log("More ---");
  const more = await page.waitForSelector('button#ext-gen459', {timeout: 0});
  await more.click();
  console.log("More --- Clicked");

  console.log("Expert ---");
  const expertBtn = await page.waitForSelector('a#ext-comp-1183', {timeout: 0});
  await expertBtn.click();
  console.log("Expert --- Clicked");

  console.log("Expert as excel ---");
  const expertExcelBtn = await page.$$('div.DataViewWindow', {timeout: 0});
  await expertExcelBtn[2].click();
  console.log("Expert as excel --- Clicked");

  console.log("PeriodCombo ---");
  const PeriodCombo = await page.waitForSelector('input#ReportDefaultExportInterval', {timeout: 0});
  await PeriodCombo.click();
  console.log("PeriodCombo --- Clicked");

  console.log("Period ---");
  const inputPeriod = await page.$$('div.x-combo-list-inner div.x-combo-list-item', {timeout: 0});
  console.log(inputPeriod);
  await inputPeriod[0].click();
  console.log("Period --- Clicked");

  console.log("Cost ---");
  const inputCost = await page.waitForSelector('input#ext-comp-1193', {timeout: 0});
  await inputCost.type("Gasthof Geerlisburg");
  console.log("Cost --- Filled");

  console.log("Timeback ---");
  const backButton = await page.waitForSelector('button#ext-gen726', {timeout: 0});
  await backButton.click();
  await backButton.click();
  console.log("Timeback --- Clicked");

  console.log("Create ---");
  const createButton = await page.waitForSelector('button#ext-gen666', {timeout: 0});
  await createButton.click();
  console.log("Create --- Clicked");

  console.log("Confirm ---");
  const confirmButton = await page.waitForSelector('div.thumb-wrap a', {timeout: 0});
  console.log(confirmButton);
  if(confirmButton) await confirmButton.click();
  console.log("Confirm --- Clicked");

  console.log("Close Download confirm");
  const confirmButtonDownload = await page.waitForSelector('button#ext-gen786', {timeout: 0});
  console.log(confirmButtonDownload);
  if(confirmButtonDownload) await confirmButtonDownload.click();
  console.log("Close Download confirm....Clicked");

  await browser.close();
  process.exit();
})();


// introjs-donebutton
// introjs-disabled