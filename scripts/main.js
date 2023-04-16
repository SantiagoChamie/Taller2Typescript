import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var avSeasons = document.getElementById("av-seasons");
renderCoursesInTable(dataSeries);
avSeasons.innerHTML = "".concat(getAverageSeasons(dataSeries));
function renderCoursesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                            <td><a href='#' id='link").concat(serie.id, "'>").concat(serie.name, "</a></td>\n                            <td>").concat(serie.distributor, "</td>\n                            <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        var link = document.getElementById("link".concat(serie.id));
        link.addEventListener("click", function () { return setCardInfo(series.indexOf(serie)); });
    });
    var averageSeasons = getAverageSeasons(series);
    var trElement = document.createElement("tr");
    var tdElement = trElement.insertCell();
    tdElement.colSpan = 4;
    tdElement.innerText = "Seasons average: " + averageSeasons;
    seriesTbody.appendChild(trElement);
}
function getAverageSeasons(series) {
    var totalCredits = 0;
    series.forEach(function (serie) { return totalCredits = totalCredits + serie.seasons; });
    var average = totalCredits / series.length;
    return average;
}
function clearCoursesInTable() {
    while (seriesTbody.hasChildNodes()) {
        if (seriesTbody.firstChild != null) {
            seriesTbody.removeChild(seriesTbody.firstChild);
        }
    }
}
function setCardInfo(id) {
    var cardTitle = document.getElementById("card-title");
    var cardText = document.getElementById("card-text");
    var cardLink = document.getElementById("card-link");
    var cardImage = document.getElementById("card-img");
    cardTitle.innerHTML = "".concat(dataSeries[id].name);
    cardText.innerHTML = "".concat(dataSeries[id].description);
    cardLink.innerHTML = "".concat(dataSeries[id].link);
    cardLink.outerHTML = "<a href='".concat(dataSeries[id].link, "' target=\"_blank\" class=\"card-link\" id = 'card-link'>").concat(dataSeries[id].link, "</a>");
    cardImage.outerHTML = "<img class=\"card-img-top\" id = 'card-img' src='".concat(dataSeries[id].image, "' alt=\"Card image cap\">");
}
