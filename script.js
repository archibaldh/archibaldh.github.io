let playPause = true;
function audio(){
    if(playPause == true){
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