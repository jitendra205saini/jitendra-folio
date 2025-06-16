const bars = document.getElementById('bars');
const audio = document.getElementById('myAudio');
    let isPlaying = false;

    // Auto start animation for 2 seconds
    window.addEventListener('load', () => {
      setTimeout(() => {
        bars.classList.remove('autoStart');
      }, 500); // 2000 milliseconds = 2 seconds
    });

    bars.addEventListener('click', () => {
      isPlaying = !isPlaying;

      if (isPlaying) {
        bars.classList.add('playing');
        audio.play();
      } else {
        bars.classList.remove('playing');
        audio.pause();
      }
    });