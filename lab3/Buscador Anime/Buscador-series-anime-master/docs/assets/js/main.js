"use strict";
const inputUser = document.querySelector('.js_inputUser');
const btnSearch = document.querySelector('.js_btnSearch');
const btnReset = document.querySelector('.js_btnReset');
const listResults = document.querySelector('.js_listResults');
const listFavourites = document.querySelector('.js_listFavourites');
const resetAllFavs = document.querySelector('.js_resetAllFavs');
let dataAnime = [];
let favouritesAnime = [];
function renderFavourites() {
    let html = '';
    for (const eachfav of favouritesAnime) {
      if (
        eachfav.images.jpg.image_url ===
        'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png'
      ) {
        html += `<li class="listAnime  js_eachAnime" id="${eachfav.mal_id} "> <img class="imgAnime"  src='https://via.placeholder.com/210x295/ffffff/666666/?text=TV'><h3 class="titleAnime">${eachfav.title}</h3></li>`;
      } else {
        html += `<li class="listAnime  js_eachAnimeFav js_printTitle " id="${eachfav.mal_id} "><img class="imgAnime" src=${eachfav.images.jpg.image_url}><h3 class="titleAnime">${eachfav.title}</h3></li>`;
      }
    }
    localStorage.setItem('data', JSON.stringify(favouritesAnime));
    listFavourites.innerHTML = html;
  }
  
  //Función manejadora del click de cada li
  
  function handleClickFavourite(event) {
    const animeSelected = event.currentTarget;
    console.log(animeSelected);
    const selectedId = parseInt(event.currentTarget.id);
    console.log(selectedId);
  
    const foundAnime = dataAnime.find(
      (eachAnime) => eachAnime.mal_id === selectedId
    );
  
    const favouritesAnimeFound = favouritesAnime.findIndex(
      (fav) => fav.mal_id === selectedId
    );
    if (favouritesAnimeFound === -1) {
      favouritesAnime.push(foundAnime);
      animeSelected.classList.add('selected');
    } else {
      favouritesAnime.splice(favouritesAnimeFound, 1);
      animeSelected.classList.remove('selected');
    }
  
    renderFavourites();
    listenerAnimes();
    listenerFavs();
  }

  function handleClickReset() {
    listResults.innerHTML = '';
    userInput = '';
  }
  
  btnReset.addEventListener('click', handleClickReset);
  
  //Evento para elminar toda la lista de favoritos
  
  function handleResetAllFavs() {
    localStorage.clear();
    listFavourites.innerHTML = '';
    favouritesAnime = [];
  }
  
  resetAllFavs.addEventListener('click', handleResetAllFavs);
  
  
  //Funcion escuchadora de cada li
  
  function listenerAnimes() {
    const selectAllLiAnimes = document.querySelectorAll('.js_eachAnime');
    for (const li of selectAllLiAnimes) {
      li.addEventListener('click', handleClickFavourite);
    }
  }
  
  function handleClickFavTitle() {
    const selectedFavId = parseInt(event.currentTarget.id);
    const foundFav = favouritesAnime.find(
      (item) => item.mal_id === selectedFavId
    );
    console.log(foundFav.title);
  }
  
  function listenerFavs() {
    const selectFavs = document.querySelectorAll('.js_printTitle');
    for (const eachFav of selectFavs) {
      eachFav.addEventListener('click', handleClickFavTitle);
    }
  }
  function renderAnime() {
    let html = '';
    for (const elementAnime of dataAnime) {
      if (
        elementAnime.images.jpg.image_url ===
        'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png'
      ) {
        html += ` <li class="listAnime js_eachAnime " id="${elementAnime.mal_id} "><img class="imgAnime"  src='https://via.placeholder.com/210x295/ffffff/666666/?text=TV'><h3 class="titleAnime">${elementAnime.title}</h3>`;
        if (elementAnime.airing) {
          html += `<a href="${elementAnime.url}">Más detalles</a></li>`;
        } else {
          html += `<p>No se está transmitiendo</p></li>`;
        }
      } else {
        html += `<li class="listAnime js_eachAnime " id="${elementAnime.mal_id} "><img class="imgAnime" src=${elementAnime.images.jpg.image_url}><h3 class="titleAnime">${elementAnime.title}</h3></li>`;
        if (elementAnime.airing) {
          html += `<a href="${elementAnime.url}">Más detalles</a></li>`;
        } else {
          html += `<p>No se está transmitiendo</p></li>`;
        }
      }
    }
  
    listResults.innerHTML = html;
    listenerAnimes();
  }
  
  //Función manejadora del evento click de buscar
  
  function handleClick(event) {
    event.preventDefault();
    getAnimeData();
  }
  
  //Evento para escuchar el click en el botón de buscar
  
  btnSearch.addEventListener('click', handleClick);

  function getAnimeData() {
    const userInput = inputUser.value;
    fetch(`https://api.jikan.moe/v4/anime?q=${userInput}`)
      .then((response) => response.json())
      .then((data) => {
        dataAnime = data.data;
        renderAnime();
      });
  }
  
function onLoad() {
    const dataLocalStorage = JSON.parse(localStorage.getItem('data'));
    console.log(dataLocalStorage);
  
    if (dataLocalStorage) {
      favouritesAnime = dataLocalStorage;
      renderFavourites();
      console.log('usa LS');
    } else {
      console.log('no estoy en el LS');
    }
  }
  
  onLoad();
    