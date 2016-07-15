import { CarlosappwebPage } from './app.po';

describe('carlosappweb App', function() {
  let page: CarlosappwebPage;

  beforeEach(() => {
    page = new CarlosappwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
