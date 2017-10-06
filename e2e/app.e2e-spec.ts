import { AppCadastroLivrosPage } from './app.po';

describe('app-cadastro-livros App', function() {
  let page: AppCadastroLivrosPage;

  beforeEach(() => {
    page = new AppCadastroLivrosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
