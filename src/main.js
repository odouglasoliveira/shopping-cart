import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const listProducts = async () => {
  const display = document.querySelector('.products');
  const products = await fetchProductsList('computador');
  console.log(products);
  products.forEach((product) => {
    display.appendChild(createProductElement(product));
  });
};
listProducts();
