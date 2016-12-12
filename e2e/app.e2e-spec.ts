import { A2ToDoPage } from './app.po';

describe('a2-to-do App', function() {
  let page: A2ToDoPage;

  beforeEach(() => {
    page = new A2ToDoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
