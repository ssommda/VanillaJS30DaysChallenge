const addClassPlaying = element => {
    element.classList.add('playing');
    setTimeout( () => {
        element.classList.remove('playing')
        }, 70
    );
};

const findAudioSrc = keyCode => {
    const audios = document.getElementsByTagName('audio');
    for(let i = 0; i < audios.length; i++) {
        const audiosKey = audios[i].getAttribute('data-key');
        if(Number(audiosKey) === keyCode) {
            const audioSrc = audios[i].getAttribute('src');
            return audioSrc
        }
    }
};

const findButton = keyCode => {
    const buttons = document.getElementsByClassName('key');
    for(let i = 0; i < buttons.length; i++) {
        const buttonKey = buttons[i].getAttribute('data-key');
        if(Number(buttonKey) === keyCode) {
            addClassPlaying(buttons[i]);
        }
    }
};

const playMusic = keyCode => {
    const targetSrc = findAudioSrc(keyCode);
    const audio = new Audio(targetSrc);
    audio.play();
};


const handleKeyPress = e => {
    const keyCode = e.keyCode;
    findButton(keyCode);
    playMusic(keyCode);
};

document.addEventListener('keypress', handleKeyPress);

