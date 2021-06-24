let section5Numbers = document.getElementById("five");

let msgSection5Numbers = document.createElement("h3");
msgSection5Numbers.innerHTML = "5. Presiona el boton para operar con 5 números";
section5Numbers.appendChild(msgSection5Numbers);

let btn5Numbers = document.createElement("button");
btn5Numbers.innerHTML = "Opera con 5!";
section5Numbers.appendChild(btn5Numbers);

let btnRemoveResult5 = document.createElement("button");
btnRemoveResult5.innerHTML = "Limpiar";
section5Numbers.appendChild(btnRemoveResult5);

const fiveNumbers = () => {
  console.log('exercise 5');
  let fiveSection = document.createElement("ul");
  fiveSection.id = "resultFive";

  let num1 = parseInt(prompt('Ingresa uno de cinco valores'));
  let num2 = parseInt(prompt('Ingresa un segundo de cinco valores'));
  let num3 = parseInt(prompt('Ingresa un tercer de cinco valores'));
  let num4 = parseInt(prompt('Ingresa un cuarto de cinco valores'));
  let num5 = parseInt(prompt('Ingresa un quinto de cinco valores'));

  let totalAdd = num1 + num2 + num3 + num4 + num5;
  console.log('suma total', totalAdd);
  let viewAdd = document.createElement("li");
  viewAdd.innerHTML = isNaN(totalAdd) ? 'Ingresaste una letra a esta operación :o':`La suma de los 5 valores es ${totalAdd}.`;
  fiveSection.appendChild(viewAdd);

  let average = totalAdd / 5;
  console.log('promedio', average);
  let viewAverage = document.createElement("li");
  viewAverage.innerHTML = isNaN(average) ? 'Ingresaste una letra a esta operación :o':`El promedio de los 5 valores ingresados es ${average}.`;
  fiveSection.appendChild(viewAverage);

  section5Numbers.appendChild(fiveSection);
}

const eraseOps5 = () => {
  let result = document.getElementById("resultFive");
  section5Numbers.removeChild(result);
}

btn5Numbers.addEventListener("click", fiveNumbers);
btnRemoveResult5.addEventListener("click", eraseOps5);
