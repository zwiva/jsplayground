let sectionTimeGrouper = document.getElementById("four");

let msgSectionTimeGrouper = document.createElement("h3");
msgSectionTimeGrouper.innerHTML = "4. Presiona el boton para usar el agrupador de días";
sectionTimeGrouper.appendChild(msgSectionTimeGrouper);

let btnTimeGrouper = document.createElement("button");
btnTimeGrouper.innerHTML = "Agrupa días";
sectionTimeGrouper.appendChild(btnTimeGrouper);

let btnRemoveGrouped = document.createElement("button");
btnRemoveGrouped.innerHTML = "Limpiar";
sectionTimeGrouper.appendChild(btnRemoveGrouped);

const timeGrouper = () => {
  console.log('exercise 4');
  // captura la data
  let totaldays = parseInt(prompt('Ingresa la cantidad de días que quieres agrupar'));
  
  // arma area para dibujar
  let timeSection = document.createElement("div");
  timeSection.id = "result";

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
  let grouped = document.createElement("p");
  grouped.innerHTML = `Los ${totaldays} días equivalen a ${years} años, ${weeks} semanas y ${daysleftweek} días.`;
  
  // agrega elemento dibujado a area de dibujo
  timeSection.appendChild(grouped);

  // agrega area dibujada a documento
  sectionTimeGrouper.appendChild(timeSection);
}

// limpiar documento
const eraseGrouped = () => {
  let result = document.getElementById("result");
  sectionTimeGrouper.removeChild(result);
}

btnTimeGrouper.addEventListener("click", timeGrouper);
btnRemoveGrouped.addEventListener("click", eraseGrouped);