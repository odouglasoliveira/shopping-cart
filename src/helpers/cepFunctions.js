export const getAddress = async (cep) => {
  const promises = [
    fetch(`https://cep.awesomeapi.com.br/json/${cep}`),
    fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`),
  ];
  const successCode = 200;
  const response = await Promise.any(promises);
  if (response.status !== successCode) throw new Error('CEP inválido');
  const data = await response.json();
  return data;
};

export const searchCep = async () => {
  const cep = document.querySelector('.cep-input').value;
  const addressDisplay = document.querySelector('.cart__address');
  try {
    const data = await getAddress(cep);
    const { address, district, city, state } = data;
    const message = `${address}, ${district}, ${city}, ${state}`;
    addressDisplay.innerHTML = message;
  } catch (error) {
    addressDisplay.innerHTML = 'CEP não encontrado';
  }
};
