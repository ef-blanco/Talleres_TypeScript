import { TvShow } from './tvShow.js';
import { dataTvShows } from './dataTvShows.js';

let tvShowsTbody: HTMLElement = document.getElementById("tvShows")!;
const avrgSeasonsElem: HTMLElement = document.getElementById("avrgSeasons")!;
let card: HTMLElement = document.getElementById("colCard")!;

function renderTvShowsOnTable(tvShows: TvShow[]):void
{
    console.log("Desplegando TV Shows");
    tvShows.forEach((tvShow)=>{
        let trElement = document.createElement("tr");
        trElement.innerHTML =  `<th scope="row">${tvShow.pos}</th>
                                <button type="button" id="btn-${tvShow.pos}" class="btn btn-link">${tvShow.name}</button>
                                <td>${tvShow.channel}</td>
                                <td>${tvShow.seasons}</td>`;
    tvShowsTbody.appendChild(trElement);
    });
}

renderTvShowsOnTable(dataTvShows);

const btnBreakingBad: HTMLElement = document.getElementById("btn-1")!;
const btnOrange: HTMLElement = document.getElementById("btn-2")!;
const btnGoT: HTMLElement = document.getElementById("btn-3")!;
const btnTBBT: HTMLElement = document.getElementById("btn-4")!;
const btnSherlock: HTMLElement = document.getElementById("btn-5")!;
const btnAVES: HTMLElement = document.getElementById("btn-6")!;

function getAverageSeasons(tvShows: TvShow[]): number
{
    let totalSeasons: number = 0;
    let totalShows: number = tvShows.length;
    tvShows.forEach((tvShow)=> totalSeasons += tvShow.seasons);

    let resp: number = totalSeasons/totalShows;
    return resp;
}

avrgSeasonsElem.innerHTML = `${getAverageSeasons(dataTvShows)}`

function mostrarCard(numSerie: number):void
{
    if (numSerie == 1)
    {
        card.innerHTML = `<div class="card">
                                <img class="card-img-top" src="${dataTvShows[0].imgUrl}" alt="imagenSerie" width="100" height="200">
                                 <div class="card-body">
                                   <h3 class="card-title">${dataTvShows[0].name}</h3>
                                   <p class="card-text">${dataTvShows[0].descripcion}</p>
                                   <a href="${dataTvShows[0].serieUrl}" class="card-url">${dataTvShows[0].serieUrl}</a>
                               </div>
                             </div>` 
    }
    else if (numSerie == 2)
        {
            card.innerHTML = `<div class="card">
                                <img class="card-img-top" src="${dataTvShows[1].imgUrl}" alt="imagenSerie" width="100" height="200">
                                 <div class="card-body">
                                   <h3 class="card-title">${dataTvShows[1].name}</h3>
                                   <p class="card-text">${dataTvShows[1].descripcion}</p>
                                   <a href="${dataTvShows[1].serieUrl}" class="card-url">${dataTvShows[1].serieUrl}</a>
                               </div>
                             </div>`
        }
    
    else if (numSerie == 3)
        {
            card.innerHTML = `<div class="card">
                                <img class="card-img-top" src="${dataTvShows[2].imgUrl}" alt="imagenSerie" width="100" height="200">
                                 <div class="card-body">
                                   <h3 class="card-title">${dataTvShows[2].name}</h3>
                                   <p class="card-text">${dataTvShows[2].descripcion}</p>
                                   <a href="${dataTvShows[2].serieUrl}" class="card-url">${dataTvShows[2].serieUrl}</a>
                               </div>
                             </div>`
        }
    
    else if (numSerie == 4)
        {
            card.innerHTML = `<div class="card">
                                <img class="card-img-top" src="${dataTvShows[3].imgUrl}" alt="imagenSerie" width="100" height="200">
                                 <div class="card-body">
                                   <h3 class="card-title">${dataTvShows[3].name}</h3>
                                   <p class="card-text">${dataTvShows[3].descripcion}</p>
                                   <a href="${dataTvShows[3].serieUrl}" class="card-url">${dataTvShows[3].serieUrl}</a>
                               </div>
                             </div>`
        }
    
    else if (numSerie == 5)
        {
            card.innerHTML = `<div class="card">
                                <img class="card-img-top" src="${dataTvShows[4].imgUrl}" alt="imagenSerie" width="100" height="200">
                                 <div class="card-body">
                                   <h3 class="card-title">${dataTvShows[4].name}</h3>
                                   <p class="card-text">${dataTvShows[4].descripcion}</p>
                                   <a href="${dataTvShows[4].serieUrl}" class="card-url">${dataTvShows[4].serieUrl}</a>
                               </div>
                             </div>`
        }
    
    else if (numSerie == 6)
        {
            card.innerHTML = `<div class="card">
                                <img class="card-img-top" src="${dataTvShows[5].imgUrl}" alt="imagenSerie" width="100" height="200">
                                 <div class="card-body">
                                   <h3 class="card-title">${dataTvShows[5].name}</h3>
                                   <p class="card-text">${dataTvShows[5].descripcion}</p>
                                   <a href="${dataTvShows[5].serieUrl}" class="card-url">${dataTvShows[5].serieUrl}</a>
                               </div>
                             </div>`
        }
}

btnBreakingBad.onclick = () => mostrarCard(1);
btnOrange.onclick = () => mostrarCard(2);
btnGoT.onclick = () => mostrarCard(3);
btnTBBT.onclick = () => mostrarCard(4);
btnSherlock.onclick = () => mostrarCard(5);
btnAVES.onclick = () => mostrarCard(6);