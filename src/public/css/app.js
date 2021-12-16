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
                    console.log(tmp);
                    console.log(this);
                    for (var j = 0; j<songs.length; j++) {
                        playlistitem[j].style.backgroundColor = "#ffffff";
                        if(songs[j].name== tmp) {
                            var indextmp = j;
                            playlistitem[indextmp].style.backgroundColor = "#0000004d";
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


    