import { browser, by, element } from 'protractor';

export class AppFeNgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mtj-root h1')).getText();
  }
}
