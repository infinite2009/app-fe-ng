import { AppFeNgPage } from './app.po';

describe('app-fe-ng App', () => {
  let page: AppFeNgPage;

  beforeEach(() => {
    page = new AppFeNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to mtj!');
  });
});
