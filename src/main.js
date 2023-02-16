import { getSavedCartIDs } from './helpers/cartFunctions';
import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import updatePrice from './helpers/updateCost';
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

const showError = () => {
  const errorElement = document.createElement('span');
  errorElement.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  errorElement.classList.add('error');
  display.appendChild(errorElement);
};

const listProducts = async () => {
  try {
    const products = await fetchProductsList('computador');
    cleanLoading();
    products.forEach((product) => {
      display.appendChild(createProductElement(product));
    });
  } catch (error) {
    cleanLoading();
    showError();
  }
};
listProducts();

const restoreProducts = async () => {
  const productContainer = document.querySelector('.cart__products');
  const products = getSavedCartIDs().map((product) => fetchProduct(product));
  const allProducts = await Promise.all(products);
  allProducts.forEach((product) => {
    productContainer.appendChild(createCartProductElement(product));
  });
};

restoreProducts();
updatePrice();
