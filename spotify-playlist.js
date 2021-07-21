//just add these two lines to your html <head>:

//<script src="spotify-playlist.js"></script>
//<link rel="stylesheet" href="spotify-playlist.css"/>



function setupSpotify() {
    if (document.getElementById("spotify-container") === null) {
        console.log("adding element")
        spotifyContainer = `<div id=spotify-container><button id=change-link onclick=changeLink() style=display:none>+</button><iframe allow=encrypted-media allowtransparency=true frameborder=0 height=100% id=spotify-player src=https://open.spotify.com/embed/album/ style=border-top-left-radius:2rem;width:100%;height:100% width=100%></iframe><div id=add-album style=position:fixed;bottom:25%;right:50%;transform:translate(50%,50%);width:100%><button id=album-button onclick=albumInput() class="">Add your playlist</button> <input aria-label="enter your spotify album link here!"class=button-size id=album-input placeholder="Spotify Playlist Link"style=display:none;font-weight:400> <button id=album-ok onclick=albumSet() class=""style=display:none>OK</button></div></div>`
        document.body.innerHTML += spotifyContainer
    }
    console.log("running setupSpotify()")
    if (localStorage["spotify-playlist"] != undefined && localStorage["spotify-playlist"] != "undefined") {
        document.getElementById("spotify-player").src = localStorage["spotify-playlist"]
        document.getElementById("add-album").style.display = "none"
        document.getElementById("change-link").style.display = ""
    } else {
        document.getElementById("spotify-player").src = "https://open.spotify.com/embed/playlist/"
        document.getElementById("add-album").style.display = ""
        document.getElementById("album-input").oninput = checkInput
    }
}

function albumInput() {
    console.warn("running albumInput()")
    document.getElementById("album-button").style.display = "none"
    document.getElementById("album-input").style.display = ""
}
function checkInput() {
    input = document.getElementById("album-input").value.replace("embed/", "")
    if (input.replace("https://open.spotify.com/album/", '').replace("https://open.spotify.com/playlist/", '').split("?")[0].length === 22) {
        console.log("input ready")
        document.getElementById("album-ok").style.display = ""
    } else {
        document.getElementById("album-ok").style.display = "none"
    }
    if (input.includes("album")) {
        str = "https://open.spotify.com/embed/album/" + encodeURIComponent(input.replace("https://open.spotify.com/album/", '').replace("https://open.spotify.com/playlist/", '').split("?")[0])
        document.getElementById("spotify-player").style.filter = "blur(2px)"
        if (document.getElementById("album-input").value.replace("https://open.spotify.com/album/", '').replace("https://open.spotify.com/playlist/", '').split("?")[0].length != 22) {
            str = "https://open.spotify.com/embed/album/"
            document.getElementById("spotify-player").style.filter = ""
        }
    } else {
        str = "https://open.spotify.com/embed/playlist/" + encodeURIComponent(input.replace("https://open.spotify.com/album/", '').replace("https://open.spotify.com/playlist/", '').split("?")[0])
        document.getElementById("spotify-player").style.filter = "blur(2px)"
        if (input.replace("https://open.spotify.com/album/", '').replace("https://open.spotify.com/playlist/", '').split("?")[0].length != 22) {
            str = "https://open.spotify.com/embed/playlist/"
            document.getElementById("spotify-player").style.filter = ""
        }
    }

    document.getElementById("spotify-player").src = str

}

function changeLink() {
    localStorage["spotify-playlist"] = undefined
    setupSpotify()
    document.getElementById("change-link").style.display = "none"
}

function albumSet() {
    input = document.getElementById("album-input").value.replace("embed/", "")
    if (input.includes("album")) {
        str = "https://open.spotify.com/embed/album/" + encodeURIComponent(input.replace("https://open.spotify.com/album/", '').replace("https://open.spotify.com/playlist/", '').split("?")[0])
        document.getElementById("spotify-player").style.filter = "blur(2px)"
        if (document.getElementById("album-input").value.replace("https://open.spotify.com/album/", '').replace("https://open.spotify.com/playlist/", '').split("?")[0].length != 22) {
            str = "https://open.spotify.com/embed/album/"
            document.getElementById("spotify-player").style.filter = ""
        }
    } else {
        str = "https://open.spotify.com/embed/playlist/" + encodeURIComponent(input.replace("https://open.spotify.com/album/", '').replace("https://open.spotify.com/playlist/", '').split("?")[0])
        document.getElementById("spotify-player").style.filter = "blur(2px)"
        if (input.replace("https://open.spotify.com/album/", '').replace("https://open.spotify.com/playlist/", '').split("?")[0].length != 22) {
            str = "https://open.spotify.com/embed/playlist/"
            document.getElementById("spotify-player").style.filter = ""
        }
    }
    console.log(`set to: ${str}`)
    document.getElementById("add-album").style.display = "none"
    document.getElementById("spotify-player").style.filter = ""
    localStorage["spotify-playlist"] = str
    document.getElementById("album-input").value = ""
    setupSpotify()
}
setTimeout(setupSpotify, 300)
