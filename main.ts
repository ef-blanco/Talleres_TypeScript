import { TvShow } from './tvShow.js';
import { dataTvShows } from './dataTvShows.js';

let tvShowsTbody: HTMLElement = document.getElementById("tvShows")!;
const avrgSeasonsElem: HTMLElement = document.getElementById("avrgSeasons")!;
let card: HTMLElement = document.getElementById("col-card")!;

function renderTvShowsOnTable(tvShows: TvShow[]):void
{
    console.log("Desplegando TV Shows");
    tvShows.forEach((tvShow)=>{
        let trElement = document.createElement("tr");
        trElement.innerHTML =  `<th scope="row">${tvShow.pos}</th>
                                <button type="button" onclick="mostrarCard(${tvShow.pos})" class="btn btn-link">${tvShow.name}</button>
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

function mostrarCard(numSerie: number):void
{
    if (numSerie == 1)
    {
        card.innerHTML = `<div class="card">
                            <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhl-FYhFVsfyBUHTvx1e4oxr6t4AbMocmC56U-L6M05l8iqnDKL4YBvzWfy_441PXgOc&usqp=CAU" alt="ejemplo" width="100" height="180">
                             <div class="card-body">
                               <h3 class="card-title">${dataTvShows[0].name}</h3>
                               <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum est iure ex nihil reiciendis doloribus cupiditate aut deleniti ducimus. Facilis ullam deleniti cupiditate debitis, sed nemo nihil consequuntur aliquid!</p>
                               <a href="" class="card-url">url</a>
                           </div>
                         </div>`
    }
    else if (numSerie == 2)
        {
            card.innerHTML = `<div class="card">
                                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhl-FYhFVsfyBUHTvx1e4oxr6t4AbMocmC56U-L6M05l8iqnDKL4YBvzWfy_441PXgOc&usqp=CAU" alt="ejemplo" width="100" height="180">
                                 <div class="card-body">
                                   <h3 class="card-title">${dataTvShows[1].name}</h3>
                                   <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum est iure ex nihil reiciendis doloribus cupiditate aut deleniti ducimus. Facilis ullam deleniti cupiditate debitis, sed nemo nihil consequuntur aliquid!</p>
                                   <a href="" class="card-url">url</a>
                               </div>
                             </div>`
        }
}