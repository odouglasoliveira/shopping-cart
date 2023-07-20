export const fetchProduct = async (baseId) => {
  if (!baseId) throw new Error('ID não informado');
  const response = await fetch(`https://api.mercadolibre.com/items/${baseId}`);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (item) => {
  if (!item) throw new Error('Termo de busca não informado');
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`);
  const { results } = await response.json();
  return results;
};
