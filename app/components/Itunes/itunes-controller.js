import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  let template = ''
  let songs = itunesService.Songs
  songs.forEach(song => {
    template += song.getTemplate();
  })
  document.getElementById('songs').innerHTML = template;
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(itunesService.Songs)

}

function drawAudio() {
  let template = `<audio controls src="" id="audio" autoplay></audio>`
  document.getElementById('audioHere').innerHTML = template;
}


//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    itunesService.addSubscriber('songs', drawSongs)
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    let form = e.target;
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
    drawSongs()
    form.reset();
  }

  playSong(url) {
    drawAudio()
    document.getElementById('audio').setAttribute('src', url);

  }
}


export default ItunesController