import { OnDemandPage } from './app.po';

describe('on-demand App', () => {
  let page: OnDemandPage;

  beforeEach(() => {
    page = new OnDemandPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
