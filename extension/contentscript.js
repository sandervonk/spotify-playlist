if (window.addEventListener) { // Mozilla, Netscape, Firefox
    window.addEventListener('load', WindowLoad, false);
} else if (window.attachEvent) { // IE
    window.attachEvent('onload', WindowLoad);
}
function WindowLoad() {
    document.head.innerHTML += `<script src="https://sander.vonk.productions/spotify-playlist/spotify-playlist.js"></script><link rel="stylesheet" href="https://sander.vonk.productions/spotify-playlist/spotify-playlist.css"/>`
}