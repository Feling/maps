import { MapsAutocompPage } from './app.po';

describe('maps-autocomp App', () => {
  let page: MapsAutocompPage;

  beforeEach(() => {
    page = new MapsAutocompPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
