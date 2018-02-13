import { browser, by, element } from 'protractor';

export class UsersPage {
  navigateTo() {
    return browser.get('/users');
  }

  getTitleText() {
    return element(by.css('h1')).getText();
  }

  getFirstUser() {
    return element(by.css('.user-button'));
  }

  getInputField() {
    return element(by.css('input'));
  }

  getSubmitButton() {
    return element(by.css('button'));
  }
}
