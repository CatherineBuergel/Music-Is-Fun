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
        return ` <div class="col-6">
                    <div class="card text-center">
                        <img src="${this.albumArt}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${this.title}</h5>
                            <h6>${this.artist}</h6>
                            <audio src="${this.preview}" control="controls"
                            <p>${this.price}</p>
                        </div>
                    </div>
                </div>`

    }
}