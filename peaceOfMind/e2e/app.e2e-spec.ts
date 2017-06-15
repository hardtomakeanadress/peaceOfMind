import { PeaceOfMindPage } from './app.po';

describe('peace-of-mind App', () => {
  let page: PeaceOfMindPage;

  beforeEach(() => {
    page = new PeaceOfMindPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
