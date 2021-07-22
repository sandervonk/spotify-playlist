//just add these two lines to your html <head>:
//<script src="spotify-playlist.js"></script>
//<link rel="stylesheet" href="spotify-playlist.css"/>
//use this to make the popup start *not* minimized:
//document.getElementById("spotify-playlist").className = ""
//use this to set the playlist despite user's prefrences from last session:
//localstorage["spotify-playlist"] = "https://open.spotify.com/embed/playlist/YourPlaylistID"

console.log("running initSpotify!")
document.head.innerHTML += `<script src="https://sander.vonk.productions/spotify-playlist/scriptrequisites.js"></script>`

setTimeout(setupSpotify, 300)

