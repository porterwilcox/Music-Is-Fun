import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  let song = results[0];
  let template1 = `
  <div class="col-sm-8 offset-sm-2">
  <div class="card w-75">
  <h2 style="text-align: center">Top Hit</h2>
  <img class="card-img-top" src="${song.albumArt}" alt="ablum art">
  <div class="card-body">
       <h1 class="card-title">${song.title}</h1>
       <h4 class="card-subtitle">${song.artist}</h4>
       <h3 class="card-subtitle mb-1">${song.collection}</h3>
       <audio controls style="width: 100%">
          <source src="${song.preview}">
       </audio>
       <h2 style="text-align: right">$${song.price}</h2>
    </div>
  </div>
  </div>  
  `
  let template2 = '';
  for (let i = 1; i < results.length; i++) {
    const song = results[i];
    template2 += `
    <div class="col-sm-5 offset-sm-1">
    <div class="card mb-5">
    <img class="card-img-top" src="${song.albumArt}" alt="ablum art">
    <div class="card-body">
    <h2 class="card-title">${song.title}</h2>
       <h4 class="card-subtitle">${song.artist}</h4>
       <h4 class="card-subtitle mb-1">${song.collection}</h4>
       <audio controls style="width: 100%">
          <source src="${song.preview}">
       </audio>
       <h2 style="text-align: right">$${song.price}</h2>
    </div>
  </div>
  </div>  
  `
  }
  document.querySelector(".top-hit").innerHTML = template1;
  document.getElementById("songs").innerHTML = template2;
}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    let artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING...');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController