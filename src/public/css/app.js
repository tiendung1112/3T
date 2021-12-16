fetch('http://localhost:4000/musics/get')
    .then(response => response.json())
    .then(musics => console.log(musics))
