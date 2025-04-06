import { dataTvShows } from './dataTvShows.js';
var tvShowsTbody = document.getElementById("tvShows");
var avrgSeasonsElem = document.getElementById("avrgSeasons");
var card = document.getElementById("colCard");
function renderTvShowsOnTable(tvShows) {
    console.log("Desplegando TV Shows");
    tvShows.forEach(function (tvShow) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(tvShow.pos, "</th>\n                                <button type=\"button\" id=\"btn-").concat(tvShow.pos, "\" class=\"btn btn-link\">").concat(tvShow.name, "</button>\n                                <td>").concat(tvShow.channel, "</td>\n                                <td>").concat(tvShow.seasons, "</td>");
        tvShowsTbody.appendChild(trElement);
    });
}
renderTvShowsOnTable(dataTvShows);
var btnBreakingBad = document.getElementById("btn-1");
var btnOrange = document.getElementById("btn-2");
var btnGoT = document.getElementById("btn-3");
var btnTBBT = document.getElementById("btn-4");
var btnSherlock = document.getElementById("btn-5");
var btnAVES = document.getElementById("btn-6");
function getAverageSeasons(tvShows) {
    var totalSeasons = 0;
    var totalShows = tvShows.length;
    tvShows.forEach(function (tvShow) { return totalSeasons += tvShow.seasons; });
    var resp = totalSeasons / totalShows;
    return resp;
}
avrgSeasonsElem.innerHTML = "".concat(getAverageSeasons(dataTvShows));
function mostrarCard(numSerie) {
    if (numSerie == 1) {
        card.innerHTML = "<div class=\"card\">\n                                <img class=\"card-img-top\" src=\"".concat(dataTvShows[0].imgUrl, "\" alt=\"imagenSerie\" width=\"100\" height=\"200\">\n                                 <div class=\"card-body\">\n                                   <h3 class=\"card-title\">").concat(dataTvShows[0].name, "</h3>\n                                   <p class=\"card-text\">").concat(dataTvShows[0].descripcion, "</p>\n                                   <a href=\"").concat(dataTvShows[0].serieUrl, "\" class=\"card-url\">").concat(dataTvShows[0].serieUrl, "</a>\n                               </div>\n                             </div>");
    }
    else if (numSerie == 2) {
        card.innerHTML = "<div class=\"card\">\n                                <img class=\"card-img-top\" src=\"".concat(dataTvShows[1].imgUrl, "\" alt=\"imagenSerie\" width=\"100\" height=\"200\">\n                                 <div class=\"card-body\">\n                                   <h3 class=\"card-title\">").concat(dataTvShows[1].name, "</h3>\n                                   <p class=\"card-text\">").concat(dataTvShows[1].descripcion, "</p>\n                                   <a href=\"").concat(dataTvShows[1].serieUrl, "\" class=\"card-url\">").concat(dataTvShows[1].serieUrl, "</a>\n                               </div>\n                             </div>");
    }
    else if (numSerie == 3) {
        card.innerHTML = "<div class=\"card\">\n                                <img class=\"card-img-top\" src=\"".concat(dataTvShows[2].imgUrl, "\" alt=\"imagenSerie\" width=\"100\" height=\"200\">\n                                 <div class=\"card-body\">\n                                   <h3 class=\"card-title\">").concat(dataTvShows[2].name, "</h3>\n                                   <p class=\"card-text\">").concat(dataTvShows[2].descripcion, "</p>\n                                   <a href=\"").concat(dataTvShows[2].serieUrl, "\" class=\"card-url\">").concat(dataTvShows[2].serieUrl, "</a>\n                               </div>\n                             </div>");
    }
    else if (numSerie == 4) {
        card.innerHTML = "<div class=\"card\">\n                                <img class=\"card-img-top\" src=\"".concat(dataTvShows[3].imgUrl, "\" alt=\"imagenSerie\" width=\"100\" height=\"200\">\n                                 <div class=\"card-body\">\n                                   <h3 class=\"card-title\">").concat(dataTvShows[3].name, "</h3>\n                                   <p class=\"card-text\">").concat(dataTvShows[3].descripcion, "</p>\n                                   <a href=\"").concat(dataTvShows[3].serieUrl, "\" class=\"card-url\">").concat(dataTvShows[3].serieUrl, "</a>\n                               </div>\n                             </div>");
    }
    else if (numSerie == 5) {
        card.innerHTML = "<div class=\"card\">\n                                <img class=\"card-img-top\" src=\"".concat(dataTvShows[4].imgUrl, "\" alt=\"imagenSerie\" width=\"100\" height=\"200\">\n                                 <div class=\"card-body\">\n                                   <h3 class=\"card-title\">").concat(dataTvShows[4].name, "</h3>\n                                   <p class=\"card-text\">").concat(dataTvShows[4].descripcion, "</p>\n                                   <a href=\"").concat(dataTvShows[4].serieUrl, "\" class=\"card-url\">").concat(dataTvShows[4].serieUrl, "</a>\n                               </div>\n                             </div>");
    }
    else if (numSerie == 6) {
        card.innerHTML = "<div class=\"card\">\n                                <img class=\"card-img-top\" src=\"".concat(dataTvShows[5].imgUrl, "\" alt=\"imagenSerie\" width=\"100\" height=\"200\">\n                                 <div class=\"card-body\">\n                                   <h3 class=\"card-title\">").concat(dataTvShows[5].name, "</h3>\n                                   <p class=\"card-text\">").concat(dataTvShows[5].descripcion, "</p>\n                                   <a href=\"").concat(dataTvShows[5].serieUrl, "\" class=\"card-url\">").concat(dataTvShows[5].serieUrl, "</a>\n                               </div>\n                             </div>");
    }
}
btnBreakingBad.onclick = function () { return mostrarCard(1); };
btnOrange.onclick = function () { return mostrarCard(2); };
btnGoT.onclick = function () { return mostrarCard(3); };
btnTBBT.onclick = function () { return mostrarCard(4); };
btnSherlock.onclick = function () { return mostrarCard(5); };
btnAVES.onclick = function () { return mostrarCard(6); };
