var songs;

fetch('http://localhost:4000/musics/get')
    .then(response => response.json())
    .then(musics => {
        songs = musics.map(function(music, index) {
            return {
                name: music.name,
                artist: music.singer,
                url: music.audio,
                cover: ""
            } 
        }) 
        console.log(songs);
    });
 