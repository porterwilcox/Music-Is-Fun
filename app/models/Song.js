export default class Song {
    constructor(song) {
        this.title = song.trackName
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "300x300")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
}