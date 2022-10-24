// * script - starts here * //

console.log("created-by-mondalCodeHub");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
const mainplayButton = document.getElementById('mainPlayButton');
const progressbar = document.getElementById('progressbar');
const gif = document.getElementById('gif');
const songItems = Array.from(document.getElementsByClassName('songItem'));
const currentSongInformation = document.getElementById('currentSongInformation');

let songs = [
    { songName: "The Weekend - Blinded by the lights", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Alan Walker - On my way", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Despacito - L.Fonsi", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Ram Siya Ram (Cover)", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Zara Zara", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "KOMOLA - Bengali Folk Song", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" },
    { songName: "Dhadaak - Title Song", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" },
    { songName: "Something in the way - Batman(track song)", filePath: "songs/2.mp3", coverPath: "covers/8.jpg" },
]

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    // element.getElementsByClassName("timeStamp")[0].innerText = songs[i].duration;
});


// audioElement.play();

mainplayButton.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        mainplayButton.classList.remove('fa-circle-play');
        mainplayButton.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        mainplayButton.classList.remove('fa-circle-pause');
        mainplayButton.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    progressbar.value = progress;
})

progressbar.addEventListener('change', () => {
    audioElement.currentTime = progressbar.value * audioElement.duration / 100;
})

// we nedd this fuction in 'songItemPlay' - ( )::
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songsItemPlay')).forEach((e) => {
        e.classList.remove('fa-circle-pause');
        e.classList.add('fa-circle-play');
    })
}

//* ' songItemPlay ' *//
Array.from(document.getElementsByClassName('songsItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        console.log(e.target);
        songIndex = parseInt(e.target.id);

        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        audioElement.src = `songs/${songIndex + 1}.mp3`;
        currentSongInformation.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();

        mainplayButton.classList.remove('fa-circle-play');
        mainplayButton.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    })
})


//* previous button *//

document.getElementById('nextButton').addEventListener("click", () => {
    if (songIndex >= 7) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    currentSongInformation.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    mainplayButton.classList.remove('fa-circle-play');
    mainplayButton.classList.add('fa-circle-pause');
    gif.style.opacity = 1;

})


//* next button *//
document.getElementById('previousButton').addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    console.log(songIndex);
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    currentSongInformation.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    mainplayButton.classList.remove('fa-circle-play');
    mainplayButton.classList.add('fa-circle-pause');
    gif.style.opacity = 1;

})

//* script-ends-here | mondalCodeHub (2022) *//