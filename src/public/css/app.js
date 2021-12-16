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
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);
        const playlistitem = $$(".playlist-item");
        const playlist =$$(".playlist");

            const app = {
            handleEvents: function() {
                for(var i=0; i<playlistitem.length; i++) {
                playlistitem[i].onclick = function() {
                    var tmp = this.querySelector("a").outerText;
                    for (var j = 0; j<songs.length; j++) {
                        if(songs[j].name== tmp) {
                            var indextmp = j;
                        }
                    };
                
                    const ap = new APlayer({
                        container: document.getElementById('aplayer'),
                        audio: [{
                            name: songs[indextmp].name,
                            artist: songs[indextmp].artist,
                            url: 'http://localhost:4000/'+songs[indextmp].url,
                            cover: 'https://picsum.photos/200'
                        }]
                    });
                    ap.play();
                };
                };
            },  
            start: function() {
                this.handleEvents();
            },
        }
    app.start();
    });


    