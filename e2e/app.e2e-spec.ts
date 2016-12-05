import { MdlAppPage } from './app.po';

describe('mdl-app App', function() {
  let page: MdlAppPage;

  beforeEach(() => {
    page = new MdlAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
