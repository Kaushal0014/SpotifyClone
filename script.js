console.log("Welcome to MyWorld");
let songIndex=0;
let audioElement=new Audio('song/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Despacito", filePath:"Despacito.mp3",coverPath:"Despacito.jpg"} ,
    {songName:"VaathiComing", filePath:"Vaathi Coming.mp3",coverPath:"Vaaathi.jpg"} ,
    {songName:"GangamStyle", filePath:"Gangnam Style.mp3",coverPath:"Despacito.jpg"} ,
    {songName:"Attention", filePath:"Attention.mp3",coverPath:"Attention.png"} ,
    {songName:"YaLili", filePath:"Ya-Lili.mp3",coverPath:"ya.jpg"} 
]
// audioElement.play();

// songItem.forEach((element)=>{
//     element.getElementsByTagName("img")[0].src=songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText=songs[i].coverPath;

//     })
    
masterPlay.addEventListener('click',function(){
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=0.4;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays=()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`song/${songIndex+1}.mp3`;
        audioElement.currentTime =0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex =0;
    }else{
        songIndex +=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex =0;
    }else{
        songIndex -=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})