export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
    getTemplate() {
        return ` <div class="col-12 col-md-6 my-3">
                    <div class="card text-center">
                        <img src="${this.albumArt}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${this.title}</h5>
                            <h6>${this.artist}</h6>
                            <p>$${this.price}</p>
                            <button class="btn btn-info" onclick="app.controllers.itunesCtrl.playSong('${this.preview}')">Play song</button>
                        </div>
                    </div>
                </div>`

    }
}


/* <audio controls src="${this.preview}"> </audio> */