class PlayDrum {
    constructor(num) {
        this.keyCode = num;
    }

    static findAudio(keyCode) {
        return document.querySelector(`audio[data-key='${keyCode}']`);
    }

    static findButton(keyCode) {
        return document.querySelector(`div[data-key='${keyCode}']`);
    }

    static addClassPaying(element) {
        element.classList.add('playing');
        setTimeout( () => {
              element.classList.remove('playing')
          }, 70
        );
    }

    play() {
        const audio = PlayDrum.findAudio(this.keyCode);
        const button = PlayDrum.findButton(this.keyCode);
        PlayDrum.addClassPaying(button);
        audio.play();

        // 1. 피쳐브랜치에서 커밋 생성
    }
}

const handleKeyPress = e => {
    const keyCode = e.keyCode;
    const playDrum = new PlayDrum(keyCode);
    playDrum.play();
};

window.addEventListener('keydown', handleKeyPress);
