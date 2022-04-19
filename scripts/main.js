import { dataSeries } from "./dataSeries.js";
var seriesTBody = document.getElementById("series");
renderSeriesInTable(dataSeries);
function renderSeriesInTable(series) {
    console.log("Desplegando series");
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                                <td>").concat(serie.name, "</td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        seriesTBody.appendChild(trElement);
    });
}
