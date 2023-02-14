import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const display = document.querySelector('.products');
document.querySelector('.cep-button').addEventListener('click', searchCep);

const showLoading = () => {
  const loadingElement = document.createElement('span');
  loadingElement.innerHTML = 'carregando...';
  loadingElement.classList.add('loading');
  display.appendChild(loadingElement);
};
showLoading();

const cleanLoading = () => {
  display.innerHTML = '';
};

const listProducts = async () => {
  const products = await fetchProductsList('computador');
  console.log(products);
  cleanLoading();
  products.forEach((product) => {
    display.appendChild(createProductElement(product));
  });
};
listProducts();
