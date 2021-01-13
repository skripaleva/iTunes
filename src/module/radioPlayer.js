export const radioPlayerInit = () => {
    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');
    const radioVolume = document.querySelector('.radio-volume');
    const radioMute = document.querySelector('.radio-mute');

    const audio = new Audio();
    audio.type = 'audio/aac';

    audio.volume = 0.1;

    radioStop.disabled = true;

    const changeIconPlay = () => {
        if (audio.paused) {
            radio.classList.remove('play');
            radioStop.classList.add('fa-play');    
            radioStop.classList.remove('fa-pouse');
        } else {
            radio.classList.add('play')
            radioStop.classList.add('fa-pause');
            radioStop.classList.remove('fa-play');
        }
    };

    const selectItem = elem => {
        radioItem.forEach(item => item.classList.remove('select'));
        elem.classList.add('select');
    };

    radioNavigation.addEventListener('change', (event) => {
        const target = event.target;
        const parent = target.closest('.radio-item');
        selectItem(parent);

        const title = parent.querySelector('.radio-name').textContent;
        radioHeaderBig.textContent = title;

        const urlImg = parent.querySelector('.radio-img').src;

        radioCoverImg.src = urlImg;

        radioStop.disabled = false;
        audio.src = target.dataset.radioStantion;
        audio.play();
        changeIconPlay()
    });

    radioStop.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        changeIconPlay()
    });

    radioVolume.addEventListener('input', () => {
        audio.volume = radioVolume.value / 100;
        audio.muted = false;

    });

    radioMute.addEventListener('click', () => {
        audio.muted = !audio.muted;
    });

    radioVolume.value = audio.volume * 100;

    radioPlayerInit.stop = () => {
        audio.pause();
        changeIconPlay()
    }

};