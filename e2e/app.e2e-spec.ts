import { FrontTestPage } from './app.po';

describe('front-test App', () => {
  let page: FrontTestPage;

  beforeEach(() => {
    page = new FrontTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
