import { Serie } from './serie.js';

import { dataSeries } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const avSeasons: HTMLElement = document.getElementById("av-seasons")!;

renderCoursesInTable(dataSeries);

avSeasons.innerHTML = `${getAverageSeasons(dataSeries)}`

function renderCoursesInTable(series: Serie[]): void {
    console.log('Desplegando cursos');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                            <td><a href='#' id='link${serie.id}'>${serie.name}</a></td>
                            <td>${serie.distributor}</td>
                            <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
        const link: HTMLElement = document.getElementById(`link${serie.id}`)!;
        link.addEventListener("click", () => setCardInfo(series.indexOf(serie)));
    });
    let averageSeasons = getAverageSeasons(series);
    let trElement = document.createElement("tr");
    let tdElement = trElement.insertCell();
    tdElement.colSpan = 4;
    tdElement.innerText = "Seasons average: " + averageSeasons;
    seriesTbody.appendChild(trElement);
}
 
function getAverageSeasons(series: Serie[]): number {
  let totalCredits: number = 0;
  series.forEach((serie) => totalCredits = totalCredits + serie.seasons);
  let average: number = totalCredits / series.length;
  return average;
}

function clearCoursesInTable() {
  while (seriesTbody.hasChildNodes()) {
    if (seriesTbody.firstChild != null) {
        seriesTbody.removeChild(seriesTbody.firstChild);
    }
  }
}

function setCardInfo(id: number) {
  let cardTitle: HTMLElement = document.getElementById("card-title")!;
  let cardText: HTMLElement = document.getElementById("card-text")!;
  let cardLink: HTMLElement = document.getElementById("card-link")!;
  let cardImage: HTMLElement = document.getElementById("card-img")!;
  cardTitle.innerHTML = `${dataSeries[id].name}`;
  cardText.innerHTML = `${dataSeries[id].description}`;
  cardLink.innerHTML = `${dataSeries[id].link}`;
  cardLink.outerHTML = `<a href='${dataSeries[id].link}' target="_blank" class="card-link" id = 'card-link'>${dataSeries[id].link}</a>`;
  cardImage.outerHTML = `<img class="card-img-top" id = 'card-img' src='${dataSeries[id].image}' alt="Card image cap">`;
}