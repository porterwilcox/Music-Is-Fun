import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  let musicResults = results.filter(s => {
    if (!s.preview) {
      return
     } 
      return s.preview.includes("video")? '' : s
  });
  let song = musicResults[0];
  let template1 = `
  <div class="col-sm-10">
  <div class="card top-hit-card">
  <h2 style="text-align: center">Top Hit</h2>
  <img class="card-img-top" src="${song.albumArt}" alt="ablum art">
  <div class="card-body">
       <h1 class="card-title">${song.title}</h1>
       <h4 class="card-subtitle mb-2">${song.artist}</h4>
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
  for (let i = 1; i < musicResults.length; i++) {
    const song = musicResults[i];
    template2 += `
    <div class="col-sm-6 card-deck">
    <div class="card mb-5 song-card">
    <img class="card-img-top" src="${song.albumArt}" alt="ablum art">
    <div class="card-body">
    <h2 class="card-title">${song.title}</h2>
       <h5 class="card-subtitle mb-2">${song.artist}</h5>
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

document.querySelector(".music").addEventListener('play', function(event){
  let previews = document.getElementsByTagName("audio")
  for (let i = 0; i < previews.length; i++) {
    const soundBite = previews[i];
    if (soundBite == event.target){
      soundBite.play()
    }
    else {
      soundBite.pause();
    }    
  }
}, true)

let artist = document.getElementsByTagName("input");
artist[0].addEventListener('keyup', letters)
artist[0].addEventListener('keyup', showButton)
function letters(){
  artist[0].value = artist[0].value.toUpperCase();
}
function showButton(){
  let wait = setTimeout(showButtonNow, 500);
}
function showButtonNow(){
  let button = document.getElementsByTagName("button");
  button[0].style.visibility = "visible";
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
    let hackyWaitTime = setTimeout(topPlease, 750);
    function topPlease(){
      window.scrollTo(0, 0);
    }
    let button = document.getElementsByTagName("button");
    button[0].style.visibility = "hidden";
  }
}


export default ItunesController