"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTvShows_js_1 = require("./dataTvShows.js");
let tvShowsTbody = document.getElementById("tvShows");
const avrgSeasonsElem = document.getElementById("avrgSeasons");
function renderTvShowsOnTable(tvShows) {
    console.log("Desplegando TV Shows");
    tvShows.forEach((tvShow) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<th scope="row">${tvShow.pos}</th>
                                <td>${tvShow.name}</td>
                                <td>${tvShow.channel}</td>
                                <td>${tvShow.seasons}</td>`;
        tvShowsTbody.appendChild(trElement);
    });
}
renderTvShowsOnTable(dataTvShows_js_1.dataTvShows);
function getAverageSeasons(tvShows) {
    let totalSeasons = 0;
    let totalShows = tvShows.length;
    tvShows.forEach((tvShow) => totalSeasons += tvShow.seasons);
    let resp = totalSeasons / totalShows;
    return resp;
}
avrgSeasonsElem.innerHTML = `${getAverageSeasons(dataTvShows_js_1.dataTvShows)}`;
