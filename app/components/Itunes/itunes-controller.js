import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  let song = results[0];
  let template1 = `
  <div class="col-sm-8 h-75">
  <div class="card">
    <h2 class="card-title">${song.title}</h2>
    <img class="card-img-top" src="${song.albumArt}" alt="ablum art">
    <div class="card-body">
       <h4 class="card-subtitle">${song.artist}</h4>
       <h3 class="card-subtitle">${song.collection}</h3>
       <audio controls>
          <source src="${song.preview}">
       </audio>
       <h2>$${song.price}</h2>
    </div>
  </div>
  </div>  
  `
  let template = '';
  for (let i = 1; i < results.length; i++) {
    const song = results[i];
    template += `
    <div class="card">
    <h2 class="card-title">${song.title}</h2>
    <img class="card-img-top" src="${song.albumArt}" alt="ablum art">
    <div class="card-body">
       <h4 class="card-subtitle">${song.artist}</h4>
       <h3 class="card-subtitle">${song.collection}</h3>
       <span>${song.preview}</span>
       <h2>$${song.price}</h2>
    </div>
  </div>  
  `
  }
  document.querySelector(".top-hit").innerHTML = template1;
  document.getElementById("songs").innerHTML = template;
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