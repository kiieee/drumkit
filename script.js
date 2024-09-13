const drums = document.querySelectorAll('.drum');

drums.forEach(pad => {

    pad.addEventListener('click', (event) => {
        const soundId = event.target.getAttribute('data-sound');
        const audioElement = document.getElementById(soundId);
        console.log(soundId);

        if (audioElement) {
            audioElement.currentTime = 0;
            audioElement.play();
        }


    });


});

console.log(drums)