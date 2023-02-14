import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList',  () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled()
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('testa se a função retorna o objeto que deve retornar', async () => {
    expect(await fetchProductsList('computador')).toEqual(computadorSearch);
  });

  it('testa se retorna um erro quando a função é chamada sem parametro', async () => {
    await expect(fetchProductsList()).rejects.toThrow('Termo de busca não informado');
  });
});
