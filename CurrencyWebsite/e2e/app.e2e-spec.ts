import { CurrencyWebsiteAngularPage } from './app.po';

describe('currency-website-angular App', () => {
  let page: CurrencyWebsiteAngularPage;

  beforeEach(() => {
    page = new CurrencyWebsiteAngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
