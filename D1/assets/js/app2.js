let sectionCalc = document.getElementById("two");
let msgSectionCalc = document.createElement("h3");
msgSectionCalc.innerHTML = "2. Presiona el boton si quieres ver el resultado de operaciones entre 2 números:";
sectionCalc.appendChild(msgSectionCalc);

let btnCalc = document.createElement("button");
btnCalc.innerHTML = "Calcular";
sectionCalc.appendChild(btnCalc);

let btnEraseOp = document.createElement("button");
btnEraseOp.innerHTML = "Limpiar";
sectionCalc.appendChild(btnEraseOp);

const calc = () => {
  console.log('in exercise 2');

  //Solicitar a usuario que ingrese 2 valores
  let num1 = parseInt(prompt('ingrese un valor numérico'));
  let num2 = parseInt(prompt('ingrese un segundo valor numérico distinto del primero'));
  let resultSection = document.createElement("ul");
  resultSection.id = "results";

  //se dibujan en el DOM todos los casos solicitados:
  //dibujando la suma
  let add = num1 + num2;
  let seeAdd = document.createElement("li");
  seeAdd.innerHTML = isNaN(add) ? 'No es una operacion válida para esos valores' : `La suma de ambos números es ${add}`;
  resultSection.appendChild(seeAdd);

  // dibujando la resta
  let sub = num1 - num2;
  let seeSub = document.createElement("li");
  seeSub.innerHTML = isNaN(sub) ? 'No es una operacion válida para esos valores' : `La resta de ambos números es ${sub}`;
  resultSection.appendChild(seeSub);

  // dibujando la division
  let div = num1 / num2;
  let seeDiv = document.createElement("li");
  seeDiv.innerHTML = isNaN(div) ? 'No es una operacion válida para esos valores' : `La division de ambos números es ${div}`;
  resultSection.appendChild(seeDiv);

  //dibujando la multiplicacion
  let mult = num1 * num2;
  let seeMult = document.createElement("li");
  seeMult.innerHTML = isNaN(mult) ? 'No es una operacion válida para esos valores' : `La multiplicación de ambos números es ${mult}`;
  resultSection.appendChild(seeMult);

  //dibujando el modulo
  let mod = num1 % num2;
  let seeMod = document.createElement("li");
  seeMod.innerHTML = isNaN(mod) ? 'No es una operacion válida para esos valores' : `El modulo (resto) de ambos números es ${mod}`;
  resultSection.appendChild(seeMod);

  sectionCalc.appendChild(resultSection);

}

const eraseOp = () => {
  let results = document.getElementById("results");
  sectionCalc.removeChild(results);
}

btnCalc.addEventListener("click", calc);
btnEraseOp.addEventListener("click", eraseOp);
