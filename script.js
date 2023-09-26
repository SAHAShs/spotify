

function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn =document.getElementById("play-pause");
    var songFileName="music/"+songNumber+".mp3";
    var currentsong=document.getElementById("song"+songNumber);
    var nextsongFileName="music/"+(songNumber+1)+".mp3";
    var nextsong=document.getElementById("song"+songNumber+1);

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="images/video.png">';
        currentsong.classList.remove("highlight");//keeps current playing song heiglighted
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img class="pause-button" src="images/pause.png">';
        currentsong.classList.add("highlight");
    }
}
function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img class="pause-button" src="images/pause.png">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="images/video.png">';
    }
}