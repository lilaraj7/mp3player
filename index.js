console.log("welcome to spotify")
let songIndex =0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs= [
    {songName:"1we-salaem-e-Ishq", filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"ee-ddsalaem-e-Ishq", filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"ddsalaem-e-Ishq",  filePath: "songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"ggsalaem-e-Ishq", filePath: "songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"ttsalaem-e-Ishq",  filePath: "songs/1.mp3", coverPath:"covers/5.jpg"},
    {songName:"s4ealaem-e-Ishq", filePath: "songs/2.mp3", coverPath:"covers/6.jpg"},
    // {songName:"jjsalaem-e-Ishq",  filePath: "songs/3.mp3", coverPath:"covers/7.jpg"},
    // {songName:"llsalaem-e-Ishq",  filePath: "songs/4.mp3", coverPath:"covers/8.jpg"},
    // {songName:"yysalaem-e-Ishq", filePath: "songs/1.mp3",  coverPath:"covers/9.jpg"},
]

songItems.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText =songs[i].songName;
});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;

    }
})


//listhen to Event

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.Duration/100;
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
    
})