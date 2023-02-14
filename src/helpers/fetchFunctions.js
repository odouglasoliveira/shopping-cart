export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (item) => {
  if (!item) throw new Error('Termo de busca não informado');
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return new Error('Termo de busca não informado');
  }
};
