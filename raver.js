// Simple function to play a song and update the player
function playSong(songId) {
    const songs = {
        'song1': {
            title: 'Energy',
            cover: 'https://github.com/Banshee-gtb/mdraver-songs/blob/main/energy.jpeg?raw=true',
            audio: 'https://github.com/Banshee-gtb/mdraver-songs/raw/refs/heads/main/Energy%20M.D%20Raver.mpeg',
            download: 'https://github.com/Banshee-gtb/mdraver-songs/raw/refs/heads/main/Energy%20M.D%20Raver.mpeg'
        },
        'song2': {
            title: 'I Want to Go',
            cover: 'https://github.com/Banshee-gtb/mdraver-songs/blob/main/iwanttogo.jpeg?raw=true',
            audio: 'https://github.com/Banshee-gtb/mdraver-songs/raw/refs/heads/main/M.D%20RAVER%20FT%20SKIP%20LHEE%20-%20I%20WANT%20TO%20GO',
            download: 'https://github.com/Banshee-gtb/mdraver-songs/raw/refs/heads/main/M.D%20RAVER%20FT%20SKIP%20LHEE%20-%20I%20WANT%20TO%20GO'
        },

        'song3': {
            title: 'My Dealer',
            cover: 'https://github.com/Banshee-gtb/mdraver-songs/blob/main/mydealer.jpeg?raw=true',
            audio: 'https://github.com/Banshee-gtb/mdraver-songs/raw/refs/heads/main/M.D%20RAVER%20FT%20SLIMZZY%20K%20AND%20SKIP%20LHEE%20-%20MY%20DEALER.mp3',
            download: 'https://github.com/Banshee-gtb/mdraver-songs/raw/refs/heads/main/M.D%20RAVER%20FT%20SLIMZZY%20K%20AND%20SKIP%20LHEE%20-%20MY%20DEALER.mp3'
        },

        'song4': {
            title: 'Energy (SpeedUp)',
            cover: 'https://github.com/Banshee-gtb/mdraver-songs/blob/main/energy.jpeg?raw=true',
            audio: 'https://github.com/Banshee-gtb/mdraver-songs/raw/refs/heads/main/Energy%20M.D%20Raver%20sped%20up%20version',
            download: 'https://github.com/Banshee-gtb/mdraver-songs/raw/refs/heads/main/Energy%20M.D%20Raver%20sped%20up%20version'
        },

        'song': {
            title: 'I Want to Go',
            cover: '',
            audio: '',
            download: ''
        },
    };

    const player = document.getElementById('player');
    const playButton = document.getElementById('play-btn');
    const songTitle = document.getElementById('song-title');
    const playerCover = document.getElementById('player-cover');
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const downloadButton = document.getElementById('download-btn');

    // Show the player
    player.style.display = 'block';

    // Set current song
    const song = songs[songId];
    songTitle.textContent = song.title;
    playerCover.src = song.cover;
    audioSource.src = song.audio;
    audioPlayer.load();

    // Play/pause toggle
    playButton.onclick = function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playButton.textContent = 'Play';
        }
    };

    // Download logic
    downloadButton.onclick = function () {
        const a = document.createElement('a');
        a.href = song.download;
        a.download = song.title + '.mp3';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
}

// Handle song card click
document.querySelectorAll('.song-card').forEach(function (card) {
    card.addEventListener('click', function () {
        const songId = card.getAttribute('data-song-id');
        playSong(songId);
    });
});

// Close player
document.getElementById('close-btn').onclick = function () {
    const player = document.getElementById('player');
    player.style.display = 'none';
};
