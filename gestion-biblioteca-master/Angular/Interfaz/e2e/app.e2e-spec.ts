import { APMPage } from './app.po';

describe('apm App', () => {
  let page: APMPage;

  beforeEach(() => {
    page = new APMPage();
  });

  it('debe mostrar un mensaje de bienvenida', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Bienvenido');
  });
});
