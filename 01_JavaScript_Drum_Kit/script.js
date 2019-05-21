const addClassPlaying = element => {
    element.classList.add('playing');
    setTimeout( () => {
        element.classList.remove('playing')
        }, 70
    );
};

const playMusic = keyCode => {
    const audio = document.querySelector(`audio[data-key='${keyCode}']`);
    const button = document.querySelector(`div[data-key='${keyCode}']`);
    if(!button) {
        return false;
    }

    addClassPlaying(button);
    audio.play();
};


const handleKeyPress = e => {
    const keyCode = e.keyCode;
    playMusic(keyCode);
};

window.addEventListener('keydown', handleKeyPress);

