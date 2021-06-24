alert('Escriba los valores solicitados a continuacion');
document.open();
//Ejercicio 1
document.write("<h3>1. Diagramas de flujo</h3>");
document.write("<img src='assets/img/diagramaf2306.jpg' alt='imagen' style='max-width: 100%;'>");

//Ejercicio 2
//Solicitar a usuario que ingrese 2 valores
let num1 = parseInt(prompt('Ingresa un valor numérico que se operará con otro'));
let num2 = parseInt(prompt('Ingresa un segundo valor numérico distinto del primero'));

document.write("<h3>2. Los resultados de operaciones de suma, resta, multiplicacion, division y modulo entre los 2 números ingresados son:</h3>");

//se dibujan en el DOM todos los casos solicitados:
//dibujando la suma
let add = num1 + num2;
let seeAdd = isNaN(add) ? 'No es una operacion válida para esos valores' : `La suma de ambos números es ${add}`;
document.write("<p>" + seeAdd + "</p>");

// dibujando la resta
let sub = num1 - num2;
let seeSub = isNaN(sub) ? 'No es una operacion válida para esos valores' : `La resta de ambos números es ${sub}`;
document.write("<p>" + seeSub + "</p>");

// dibujando la division
let div = num1 / num2;
let seeDiv = isNaN(div) ? 'No es una operacion válida para esos valores' : `La division de ambos números es ${div}`;
document.write("<p>" + seeDiv + "</p>");

//dibujando la multiplicacion
let mult = num1 * num2;
let seeMult = isNaN(mult) ? 'No es una operacion válida para esos valores' : `La multiplicación de ambos números es ${mult}`;
document.write("<p>" + seeMult + "</p>");

//dibujando el modulo
let mod = num1 % num2;
let seeMod = isNaN(mod) ? 'No es una operacion válida para esos valores' : `El modulo (resto) de ambos números es ${mod}`;
document.write("<p>" + seeMod + "</p>");

//Ejercicio 3
document.write("<h3>3. Los grados Celsius ingresados convertidos a Kelvin y Fahrenheit son:</h3>");

//solicita y captura los valores
let tempCelsius = parseInt(prompt('Ingresa una temperatura en Celsius'));

// operación a Kelvin
let toKelvin = tempCelsius + 273.15;
// Escritura
let kelvin = `${tempCelsius}°C equivalen a ${toKelvin}°K`;
document.write("<p>" + kelvin + "</p>");

// operación a Faherenheit
let toFahrenheit = (tempCelsius * 9 / 5) + 32
// Escritura
let fahrenheit = `${tempCelsius}°C equivalen a ${toFahrenheit}°F`;
document.write("<p>" + fahrenheit + "</p>");

//Ejercicio 4
document.write("<h3>4. Los días ingresados equivalen a:</h3>");

// captura la data
let totaldays = parseInt(prompt('Ingresa una cantidad de días que quieres agrupar en años, semanas y días restantes'));

// Calculos de años, semanas y días
let years = Math.floor(totaldays / 365);
console.log('años', years);
let daysleftyear = totaldays % 365;
console.log('dias de un año', daysleftyear);
let weeks = Math.floor(daysleftyear / 7);
console.log('semanas', weeks);
let daysleftweek = daysleftyear % 7;
console.log('dias', daysleftweek);

// arma elemento para dibujar
let grouped = `Los ${totaldays} días equivalen a ${years} años, ${weeks} semanas y ${daysleftweek} días.`;
document.write("<p>" + grouped + "</p>");


//Ejercicio 5

console.log('exercise 5');

let num1st = parseInt(prompt('Ingresa uno de cinco valores para operar entre ellos'));
let num2nd = parseInt(prompt('Ingresa un segundo de cinco valores para operar entre ellos'));
let num3rd = parseInt(prompt('Ingresa un tercer de cinco valores para operar entre ellos'));
let num4th = parseInt(prompt('Ingresa un cuarto de cinco valores para operar entre ellos'));
let num5th = parseInt(prompt('Ingresa un quinto de cinco valores para operar entre ellos'));

document.write("<h3>5. Con los 5 valores ingresados ahora sabes que:</h3>");

let totalAdd = num1st + num2nd + num3rd + num4th + num5th;
console.log('suma total', totalAdd);
let viewAdd = isNaN(totalAdd) ? 'Ingresaste una letra a esta operación :o' : `La suma de los 5 valores es ${totalAdd}.`;
document.write("<p>" + viewAdd + "</p>");


let average = totalAdd / 5;
console.log('promedio', average);
let viewAverage = isNaN(average) ? 'Ingresaste una letra a esta operación :o' : `El promedio de los 5 valores ingresados es ${average}.`;
document.write("<p>" + viewAverage + "</p>");


document.write("<div style='text-align: center;'>");
document.write("<a href='index.html' style='padding:2em; margin:2em; color: plum; font-weight: bold; text-decoration: none;'> <--- Volver a version con botones ---<< </a>");
document.write("</div>");
document.close();