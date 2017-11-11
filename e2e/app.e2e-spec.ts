import { NgrxAgGridPage } from './app.po';

describe('ngrx-ag-grid App', () => {
  let page: NgrxAgGridPage;

  beforeEach(() => {
    page = new NgrxAgGridPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
