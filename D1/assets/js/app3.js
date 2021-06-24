let sectionTempConverter = document.getElementById("three");

let msgSectionTempConverter = document.createElement("h3");
msgSectionTempConverter.innerHTML = "3. Presiona el boton para convertir desde grados Celsius a Kelvin y Fahrenheit";
sectionTempConverter.appendChild(msgSectionTempConverter);

let btnTempConverter = document.createElement("button");
btnTempConverter.innerHTML = "Convertidor";
sectionTempConverter.appendChild(btnTempConverter);

let btnEraseTemp = document.createElement("button");
btnEraseTemp.innerHTML = "Limpiar";
sectionTempConverter.appendChild(btnEraseTemp);

const tempConverter = () => {
  console.log('exercise 3');

  let tempCelsius = parseInt(prompt('Ingresa la temperatura en Celsius'));

  let convertSection = document.createElement("ul");
  convertSection.id = "resultsT";

  // operación a Kelvin
  let toKelvin = tempCelsius + 273.15;
  // contenedor para resultado de la operación
  let kelvin = document.createElement("li");
  kelvin.innerHTML = `${tempCelsius}°C equivalen a ${toKelvin}°K`;
  convertSection.appendChild(kelvin);
  sectionTempConverter.appendChild(convertSection);

  // operación a Kelvin
  let toFahrenheit = (tempCelsius * 9/5) + 32
  // contenedor para resultado de la operación
  let fahrenheit = document.createElement("li");
  fahrenheit.innerHTML = `${tempCelsius}°C equivalen a ${toFahrenheit}°F`;
  convertSection.appendChild(fahrenheit);
  sectionTempConverter.appendChild(convertSection);

}
const eraseTemp = () => {
  let results = document.getElementById("resultsT");
  sectionTempConverter.removeChild(results);
}

btnTempConverter.addEventListener("click", tempConverter);
btnEraseTemp.addEventListener("click", eraseTemp);
