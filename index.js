const { addSong, playlist, playSong, sortingSong } = require('./app/models/playlist');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/playlist', (req, res) => {
    const { title, artists, url } = req.body;

    // Validate the required fields
    if (!title || !artists || !url) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    addSong(title, artists, url);
    res.status(201).json({ message: 'Song added to the playlist' });
});

// Play a song from the playlist
app.get('/playlist/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const playsongs = playSong(index);

    if (playsongs) {
        res.status(201).json({ message: 'Playing song', playsongs });
    } else {
        res.status(400).json({ message: 'Invalid index' });
    }
});

// Get the list of songs in the playlist
app.get('/playlist', (req, res) => {
    const playlist = sortingSong()
    res.json({ Playlist: playlist });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
