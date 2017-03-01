import { Ng2weuiPage } from './app.po';

describe('ng2weui App', function() {
  let page: Ng2weuiPage;

  beforeEach(() => {
    page = new Ng2weuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
