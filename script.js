let musica = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');
const playPauseButton = document.getElementById('playPause');
const PauseBtn = document.getElementById('PauseBtn')
const botaoIcon = document.getElementById('botao-icon');


musica.addEventListener('timeupdate', atualizarBarra);



document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myAudio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const rewindButton = document.getElementById('rewind');
    const forwardButton = document.getElementById('forward');

    playPauseButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            botaoIcon.classList.remove('fa-play-circle');
            botaoIcon.classList.add('fa-pause-circle');
        } else {
            audio.pause();
            botaoIcon.classList.remove('fa-pause-circle');
            botaoIcon.classList.add('fa-play-circle');
        }
    });


    rewindButton.addEventListener('click', function() {
        audio.currentTime -= 10; // Retrocede 10 segundos
    });

    forwardButton.addEventListener('click', function() {
        audio.currentTime += 10; // Avança 10 segundos
    });
});


function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
};


function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}