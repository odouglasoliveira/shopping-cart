import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Testa se a fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('Testa se o fetch é chamado', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });
  it('Testa se a função utiliza o endpoint correto', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });
  it('Testa se o retorno da função é correto', async () => {
    expect(await fetchProduct('MLB1405519561')).toMatchObject(product);
  });
  it('Testa se ao chamar a função sem argumento, retorna um erro', async () => {
    await expect(fetchProduct()).rejects.toThrow('ID não informado');
  })
});
