import { browser, by, element } from 'protractor';

export class UsersPage {
  navigateTo() {
    return browser.get('/users');
  }

  getTitleText() {
    return element(by.css('h1')).getText();
  }

  selectFirstUser() {
    return element(by.css('.user-button'));
  }

  selectFirstUserText() {
    return this.selectFirstUser().getText();
  }

  clickFirstUser() {
    return this.selectFirstUser().click();
  }

  getInputField() {
    return element(by.css('input'));
  }

  clearInputField() {
    return this.getInputField().clear();
  }

  clickSubmitButton() {
    return element(by.css('button')).click();
  }
}
