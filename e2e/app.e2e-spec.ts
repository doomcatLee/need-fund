import { NeedFundPage } from './app.po';

describe('need-fund App', () => {
  let page: NeedFundPage;

  beforeEach(() => {
    page = new NeedFundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
