import { TvShow } from "./tvShow";
import { dataTvShows } from "./dataTvShows";

let tvShowsTbody: HTMLElement = document.getElementById("tvShows")!;
const avrgSeasonsElem: HTMLElement = document.getElementById("avrgSeasons")!;

function renderTvShowsOnTable(tvShows: TvShow[]):void
{
    console.log("Desplegando TV Shows");
    tvShows.forEach((tvShow)=>{
        let trElement = document.createElement("tr");
        trElement.innerHTML =  `<th scope="row">${tvShow.pos}</th>
                                <td>${tvShow.name}</td>
                                <td>${tvShow.channel}</td>
                                <td>${tvShow.seasons}</td>`;
    tvShowsTbody.appendChild(trElement);
    });
}

renderTvShowsOnTable(dataTvShows);

function getAverageSeasons(tvShows: TvShow[]): number
{
    let totalSeasons: number = 0;
    let totalShows: number = tvShows.length;
    tvShows.forEach((tvShow)=> totalSeasons += tvShow.seasons);

    let resp: number = totalSeasons/totalShows;
    return resp;
}

avrgSeasonsElem.innerHTML = `${getAverageSeasons(dataTvShows)}`