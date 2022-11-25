'use strict';


function handleClickReset() {
  listResults.innerHTML = '';
  userInput = '';
}

btnReset.addEventListener('click', handleClickReset);



function handleResetAllFavs() {
  localStorage.clear();
  listFavourites.innerHTML = '';
  favouritesAnime = [];
}

resetAllFavs.addEventListener('click', handleResetAllFavs);
