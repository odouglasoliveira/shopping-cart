export default function updatePrice() {
  const priceDisplay = document.querySelector('.total-price');
  priceDisplay.innerHTML = localStorage.getItem('totalPrice') || 0;
}
