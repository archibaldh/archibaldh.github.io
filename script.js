let x = document.cookie;
let playPause = true;
function cookieAudio(){
    if(x == "mute"){
        playPause = false;
        document.getElementById('bgMusic').muted = true;
        document.getElementById('musicBtn').classList.add('fa-volume-xmark');
        document.getElementById('musicBtn').classList.remove('fa-volume-high');
    } else{
        playPause = true;
        document.getElementById('bgMusic').muted = false;
        document.getElementById('musicBtn').classList.remove('fa-volume-xmark');
        document.getElementById('musicBtn').classList.add('fa-volume-high');
    }
}
function audio(){
    if(playPause == true){
        playPause = false;
        document.getElementById('bgMusic').muted = true;
        document.getElementById('musicBtn').classList.add('fa-volume-xmark');
        document.getElementById('musicBtn').classList.remove('fa-volume-high');
        document.cookie = "mute";
        x = document.cookie;
    } else{
        playPause = true;
        document.getElementById('bgMusic').muted = false;
        document.getElementById('musicBtn').classList.remove('fa-volume-xmark');
        document.getElementById('musicBtn').classList.add('fa-volume-high');
        document.cookie = "loud";
        x = document.cookie;
    }
}

