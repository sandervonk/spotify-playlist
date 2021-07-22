# spotify-playlist
 - A lightweight playlist loader that should work on most sites! (just a little JS and CSS)
 - Playlist is saved across sections in `localstorage["spotify-playlist"]`
    - you can set this to whatever embed URL you want in your own JS to force a playlist of your choice
    - setup page only shows the first time, other times use the [+] button to change it
## **_Important_**
The windows now starts out collapsed/minimized, if you want it to start open, either remove the `class="minimized"` from line 11 of the js, or have your webiste run this js (after it has loaded):
```js
document.getElementById("spotify-playlist").className = ""
```

## DEMO:
http://sandervonk.github.io/spotify-playlist/demo.html
<details>
<summary>Demo</summary>

 
[<img src="https://user-images.githubusercontent.com/10799950/126552852-c28463e8-550d-4152-8f4d-6bea3a59d5e0.png">](https://sander.vonk.productions/spotify-playlist/)

</details>

## How to:
Just add these 2 lines to your html page head, given that the two files are in the same folder as it:
```html
    <script src="spotify-playlist.js"></script>
    <link rel="stylesheet" href="spotify-playlist.css"/>
```
Or try adding this to the header this if you dont want to download the files:
```html
    <script src="https://sander.vonk.productions/spotify-playlist/spotify-playlist.js"></script>
    <link rel="stylesheet" href="https://sander.vonk.productions/spotify-playlist/spotify-playlist.css"/>
```

Example of it in use [here](https://sandervonk.github.io/Portfolio.html):
## NEW: Mobile Support

<p float="left">
<img src="https://user-images.githubusercontent.com/10799950/126557331-2c211e56-a7ef-401b-bc48-1ce6c1a008ec.png" width="32%"/>
<img src="https://user-images.githubusercontent.com/10799950/126557592-d7c9419d-d66d-4b4d-9f1d-13dda065d2c6.png" width="32%"/>
 <img src="https://user-images.githubusercontent.com/10799950/126557723-2847291b-dc65-4485-bd23-86431b86d610.png" width="32%"/>
  </p>
## Desktop/Non-Touch Support
<p float="left">
<img src="https://user-images.githubusercontent.com/10799950/126550620-c05be69e-6b98-46de-979d-1a2465cd9bc5.png" width="49%"/>
<img src="https://user-images.githubusercontent.com/10799950/126551109-9ae6eb89-a107-4b92-911d-020a2228e9e2.png" width="49%"/>
<img src="https://user-images.githubusercontent.com/10799950/126551304-bee54b86-0631-4aa2-8224-b9093981f8eb.png" width="49%"/>
<img src="https://user-images.githubusercontent.com/10799950/126551393-c65abde6-354b-4505-8c9f-8bd46622c36a.png" width="49%"/>
  </p>

