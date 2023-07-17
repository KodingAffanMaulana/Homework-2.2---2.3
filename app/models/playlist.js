// Add song to the playlist
let playlist = [];

function addSong(title, artists, url) {
    let song = {
        title,
        artists,
        url,
        playCount: 0
    };

    // Add the song to the playlist
    playlist.push(song);

    return song;
};

function playSong(index) {
    // Validate the index
    if (index > 0 && index <= playlist.length) {
        let songs = playlist[index - 1];
        songs.playCount++; // Increment play count
        return songs;
    } else {
        return null;
    }
};

function sortingSong() {
    const sortedPlaylist = playlist.sort((a, b) => b.playCount - a.playCount);
    return sortedPlaylist;
}

module.exports = { addSong, playlist, playSong, sortingSong};