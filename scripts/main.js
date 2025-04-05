import { dataTvShows } from './dataTvShows.js';
var tvShowsTbody = document.getElementById("tvShows");
var avrgSeasonsElem = document.getElementById("avrgSeasons");
var card = document.getElementById("col-card");
function renderTvShowsOnTable(tvShows) {
    console.log("Desplegando TV Shows");
    tvShows.forEach(function (tvShow) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(tvShow.pos, "</th>\n                                <button type=\"button\" onclick=\"mostrarCard(").concat(tvShow.pos, ")\" class=\"btn btn-link\">").concat(tvShow.name, "</button>\n                                <td>").concat(tvShow.channel, "</td>\n                                <td>").concat(tvShow.seasons, "</td>");
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
function mostrarCard(numSerie) {
    if (numSerie == 1) {
        card.innerHTML = "<div class=\"card\">\n                            <img class=\"card-img-top\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhl-FYhFVsfyBUHTvx1e4oxr6t4AbMocmC56U-L6M05l8iqnDKL4YBvzWfy_441PXgOc&usqp=CAU\" alt=\"ejemplo\" width=\"100\" height=\"180\">\n                             <div class=\"card-body\">\n                               <h3 class=\"card-title\">".concat(dataTvShows[0].name, "</h3>\n                               <p class=\"card-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum est iure ex nihil reiciendis doloribus cupiditate aut deleniti ducimus. Facilis ullam deleniti cupiditate debitis, sed nemo nihil consequuntur aliquid!</p>\n                               <a href=\"\" class=\"card-url\">url</a>\n                           </div>\n                         </div>");
    }
    else if (numSerie == 2) {
        card.innerHTML = "<div class=\"card\">\n                                <img class=\"card-img-top\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhl-FYhFVsfyBUHTvx1e4oxr6t4AbMocmC56U-L6M05l8iqnDKL4YBvzWfy_441PXgOc&usqp=CAU\" alt=\"ejemplo\" width=\"100\" height=\"180\">\n                                 <div class=\"card-body\">\n                                   <h3 class=\"card-title\">".concat(dataTvShows[1].name, "</h3>\n                                   <p class=\"card-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum est iure ex nihil reiciendis doloribus cupiditate aut deleniti ducimus. Facilis ullam deleniti cupiditate debitis, sed nemo nihil consequuntur aliquid!</p>\n                                   <a href=\"\" class=\"card-url\">url</a>\n                               </div>\n                             </div>");
    }
}
