import sumar, { calcularNeto } from "./Monto";

const first = document.querySelector("#cantidad-item");
const second = document.querySelector("#precio-item");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  
  /*if (isNaN(firstNumber) || isNaN(secondNumber)) {
    div.innerHTML = "<p>Por favor ingresa valores válidos.</p>";
    return;
  }*/

  const monto = calcularNeto(firstNumber, secondNumber);  // Calcular el monto
  div.innerHTML = `<p>La cantidad es: ${firstNumber}, con un precio de: ${secondNumber}, el monto es: ${monto}</p>`;
});