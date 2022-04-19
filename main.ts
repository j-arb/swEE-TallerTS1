import { Serie } from "./serie.js";
import { dataSeries } from "./dataSeries.js";
let seriesTBody : HTMLElement = document.getElementById("series")!;

renderSeriesInTable(dataSeries);

function renderSeriesInTable(series : Serie[]) : void {
    console.log("Desplegando series");
    series.forEach((serie) => {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML =  `<td>${serie.id}</td>
                                <td>${serie.name}</td>
                                <td>${serie.channel}</td>
                                <td>${serie.seasons}</td>`;
        seriesTBody.appendChild(trElement);
    })
}