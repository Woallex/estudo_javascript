var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
}

//Uso do Break
var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
    if (videoGames[i] === 'PS4') {
        break;
    }
}