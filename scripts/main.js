import { dataTvShows } from './dataTvShows.js';
var tvShowsTbody = document.getElementById("tvShows");
var avrgSeasonsElem = document.getElementById("avrgSeasons");
function renderTvShowsOnTable(tvShows) {
    console.log("Desplegando TV Shows");
    tvShows.forEach(function (tvShow) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(tvShow.pos, "</th>\n                                <button type=\"button\" class=\"btn btn-link\">").concat(tvShow.name, "</button>\n                                <td>").concat(tvShow.channel, "</td>\n                                <td>").concat(tvShow.seasons, "</td>");
        tvShowsTbody.appendChild(trElement);
    });
}
renderTvShowsOnTable(dataTvShows);
function getAverageSeasons(tvShows) {
    var totalSeasons = 0;
    var totalShows = tvShows.length;
    tvShows.forEach(function (tvShow) { return totalSeasons += tvShow.seasons; });
    var resp = totalSeasons / totalShows;
    return resp;
}
avrgSeasonsElem.innerHTML = "".concat(getAverageSeasons(dataTvShows));
