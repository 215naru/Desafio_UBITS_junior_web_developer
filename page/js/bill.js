  // 1. primero se debe obtener los valores del nombre del ususario, el nombre del plan y precio del
// plan comprado de las query params e inyectarlos en el HTML.

// 1.1 obtener de los query params los valores del nombre y precio del plan comprado para esto
// se puede utilizar el metodo URLSearchParams y el window.location.search
const urlParams = new URLSearchParams(window.location.search) ;
const userName = urlParams.get("name");
const planName = urlParams.get("planName");
const planPrice = urlParams.get("price");

const init = async () => {
  // 1.2 inyecta los valores obtenidos en los `container_bill`.
  const userNameElement = document.querySelector(".username");
  userNameElement.textContent = userName;
  const planNameElement = document.querySelector(".name");
  planNameElement.textContent = planName;
  const priceElement = document.querySelector(".price");
  priceElement.textContent = planPrice;
  const priceTotalElement = document.querySelector(".total_price");
  priceTotalElement.textContent = planPrice;

  // 1.3 inyecta la fecha actual en la fecha de la factura
  const actualDate = document.querySelector(".date");
  const fullDate = new Date();
  const month = fullDate.getMonth() + 1;
  const year = fullDate.getFullYear();
  const day = fullDate.getDate();
  // Espera `2024/0/0`
  actualDate.textContent = `${year}/${month.toString().padStart(2,'0')}/${day.toString().padStart(2,'0')}`
};

init();