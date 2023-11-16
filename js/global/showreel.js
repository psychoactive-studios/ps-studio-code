export function showreelHome(audio) {
  const fadeMusicToggle = audio.fadeToggle;
  // const isMuted = audio.mutedState();
  // const muteAll = audio.muteAll;
  // const unmuteAll = audio.unmuteAll;
  // const fadeOutMusic = audio.fadeOutMusic;
  // const setMuteState = audio.setMuteState;
  // const toggleCssAnim = audio.toggleCssAnim;

  const showreelDivs = document.querySelectorAll(
    ".hero-background_video-block.showreel,.showreel-ui-wrapper"
  );

  const showreelVideo = document.querySelector("#showreel_home");
  const clickToUnmuteUI = document.querySelector(".showreel-ui-wrapper");
  const clickToMuteUI = document.querySelector(".showreel-ui-wrapper-2");
  // const showreelBlock = document.querySelector("#showreel_block_home");
  // const mute_btn = document.querySelector("#mute-btn-container");
  // const soundwave = document.querySelector(".soundwave-svg");
  // const wave = document.querySelectorAll(".wave");

  showreelVideo.volume = 0.7;

  let clickedOnce = false;
  let clickedTwice = false;

  showreelDivs.forEach((div) => {
    div.addEventListener("click", () => {
      if (!clickedOnce) {
        showreelVideo.muted = false;
        showreelVideo.currentTime = 0;
        clickedOnce = true;
        fadeMusicToggle();
        // console.log("once");
      } else if (!clickedTwice && clickedOnce) {
        clickToUnmuteUI.style.display = "flex";
        clickToUnmuteUI.style.opacity = "100";
        // console.log("twice");
        secondClickCode();
      } else if (clickedOnce && clickedTwice) {
        // console.log("thrice");
        clickToUnmuteUI.style.opacity = 0;
        showreelVideo.muted = false;
        clickedTwice = false;
        fadeMusicToggle();
      }
    });
  });

  clickToMuteUI.addEventListener("click", () => {
    // console.log("mute ui click");
    secondClickCode();
  });

  function secondClickCode() {
    showreelVideo.muted = true;
    clickedTwice = true;
    fadeMusicToggle();
    clickToMuteUI.style.display = "none";
  }

  // catch for if user scrolls video out of view or clicks on nav
  showreelVideo.addEventListener(
    "pause",
    function () {
      if (
        showreelVideo.muted == false &&
        document.visibilityState == "visible"
      ) {
        fadeMusicToggle();
        showreelVideo.muted = true;
        clickedOnce = false;
        clickedTwice = false;
      }
    },
    false
  );

  // catch if user hovers off showreel, after clicking once
  showreelVideo.addEventListener("mouseout", function () {
    if (clickedOnce && !clickedTwice) {
      console.log("hovered off ");
      setTimeout(() => {
        clickToMuteUI.style.display = "flex";
      }, 500);
    }
  });
}

export function showreelNav(audio) {}
