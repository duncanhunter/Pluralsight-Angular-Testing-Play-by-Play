import { UsersPage } from './users.po';
import { browser } from 'protractor';

describe('Users Page', () => {
  let page: UsersPage;
  const EC = browser.ExpectedConditions;

  beforeEach(() => {
    page = new UsersPage();
  });

  it(`should display title 'Users'`, async () => {
    page.navigateTo();
    expect(await page.getTitleText()).toEqual('Users');
  });

  it(`should edit the first user`, async () => {
    page.navigateTo();
    await page.getFirstUser().click();
    await browser.wait(EC.presenceOf(await page.getInputField()));
    await page.getInputField().clear();
    await page.getInputField().sendKeys('duncan2');
    await page.clickSubmitButton();
    await browser.wait(EC.presenceOf(await page.getFirstUser()));
    browser.sleep(2000);
    const userName = await page.getFirstUser().getText();
    expect(userName).toEqual('duncan2');
  });

});
