export function showreelHome(audio) {
  const isMuted = audio.mutedState();
  const muteAll = audio.muteAll;
  const unmuteAll = audio.unmuteAll;
  const fadeToggle = audio.fadeToggle;
  const setMuteState = audio.setMuteState;
  const toggleCssAnim = audio.toggleCssAnim;

  const showreelDivs = document.querySelectorAll(
    ".hero-background_video-block.showreel,.showreel-ui-wrapper"
  );

  const showreelBlock = document.querySelector("#showreel_block_home");
  const showreelVideo = document.querySelector("#showreel_home");
  const mute_btn = document.querySelector("#mute-btn-container");
  const soundwave = document.querySelector(".soundwave-svg");
  const wave = document.querySelectorAll(".wave");

  showreelVideo.volume = 0.7;

  let clickedOnce = false;
  let clickedTwice = false;

  showreelBlock.classList.add("play-hover");

  showreelDivs.forEach((div) => {
    div.addEventListener("click", () => {
      console.log(isMuted);
      if (!clickedOnce) {
        if (isMuted) {
          setMuteState(true);
          mute_btn.click();
          toggleCssAnim(wave);
        }
        toggleCursor(showreelBlock);
        showreelVideo.muted = false;
        showreelVideo.currentTime = 0;
        showreelVideo.play();
        clickedOnce = true;
        showreelVideo.removeAttribute("loop");
        console.log("first");
        mute();
      } else if (!clickedTwice && clickedOnce) {
        toggleCursor(showreelBlock);
        showreelVideo.pause();
        console.log("2nd");
        showreelBlock.click();
        showreelBlock.click();
        clickedTwice = true;
        if (!isMuted) {
          unmute();
        }
      } else if (clickedOnce && clickedTwice) {
        toggleCursor(showreelBlock);
        showreelVideo.play();
        console.log("3rd");
        clickedTwice = false;
        mute();
        console.log(isMuted);
        if (isMuted) {
          console.log("unmute");
          setMuteState(true);
          mute_btn.click();
          toggleCssAnim(wave);
        }
      }
    });
  });

  // for when video ends
  showreelVideo.addEventListener("ended", () => {
    showreelVideo.muted = true;
    showreelBlock.click();
    toggleCursor(showreelBlock);
    unmute();
    clickedOnce = false;
    clickedTwice = false;
    showreelVideo.play();
  });

  soundwave.addEventListener("click", () => {
    if (clickedOnce || clickedTwice) {
      showreelVideo.muted = !showreelVideo.muted;
    }
  });
}

export function showreelNav (audio) {

}

  function mute() {
    muteAll();
    fadeToggle();
  }

  function unmute() {
    if (!isMuted) {
      unmuteAll();
      fadeToggle();
    }
  }

  function toggleCursor(showreelBlock) {
    if (showreelBlock.classList.contains("play-hover")) {
      showreelBlock.classList.remove("play-hover");
      showreelBlock.classList.add("pause-hover");
    } else {
      showreelBlock.classList.remove("pause-hover");
      showreelBlock.classList.add("play-hover");
    }
  }