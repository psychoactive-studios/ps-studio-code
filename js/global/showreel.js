export function showreelHome(audio) {
  const fadeMusicToggle = audio.fadeToggle;
  const showreelMuteState = audio.getShowreelMuteState;

  const homeBlock = document.querySelector("#showreel_block_home");
  const showreelVideo = document.querySelector("#showreel_video");
  const clickToUnmuteUI = document.querySelector(".showreel-ui-wrapper");
  const clickToMuteUI = document.querySelector(".showreel-ui-wrapper-2");
  const soundBtns = Array.from(
    document.querySelectorAll(".showreel-sound-button")
  );

  showreelVideo.volume = 0.7;

  let clickLogic = "none";
  let outOfView = false;

  // homepage showreel click logic
  homeBlock.addEventListener("click", () => {
    switch (clickLogic) {
      case "none":
        firstClickLogic();
        break;
      case "once":
        secondClickLogic();
        break;
      case "twice":
        thirdClickLogic();
        break;
      default:
        firstClickLogic();
    }
  });

  // FIRST CLICK LOGIC
  function firstClickLogic() {
    showreelVideo.muted = false; //unmute video
    showreelVideo.currentTime = 0; //restart video
    clickToUnmuteUI.style.display = "none"; //hide unmute ui
    clickToMuteUI.style.opacity = 0; // set mute opacity to 0
    if (!showreelMuteState()) fadeMusicToggle(); //if unmuted, toggle music fade
    clickLogic = "once"; //update click logic
    outOfView = false; //ensure out of view logic is false
  }

  // SECOND CLICK LOGIC
  function secondClickLogic() {
    showreelVideo.muted = true; //mute video again
    if (!showreelMuteState()) fadeMusicToggle(); //if unmuted, toggle music fade
    clickToUnmuteUI.style.opacity = "100"; // set unmute opacity to 100
    clickToUnmuteUI.style.display = "flex"; // display unmute ui
    clickToMuteUI.style.display = "none"; // hide mute ui
    clickLogic = "twice"; //update click logic
  }

  // THIRD CLICK LOGIC
  function thirdClickLogic() {
    showreelVideo.muted = false; //unmute video
    if (!showreelMuteState()) fadeMusicToggle(); //if unmuted, toggle music fade
    clickToUnmuteUI.style.display = "none"; //hide unmute ui
    clickLogic = "once"; //update click logic
    outOfView = false; //ensure out of view logic is false
  }

  // catch for if user scrolls video out of view or clicks on nav
  showreelVideo.addEventListener(
    "pause",
    function () {
      outOfView = true;
      if (
        showreelVideo.muted == false && // check if video is unmuted
        document.visibilityState == "visible" // check if user is not in another tab
      ) {
        secondClickLogic();
        clickLogic = "none"; //reset click logic
      }
    },
    false
  );

  // catch to ensure mute ui is never visible when unmute ui is
  homeBlock.addEventListener("mouseenter", () => {
    if (clickToUnmuteUI.style.display == "flex") {
      clickToMuteUI.style.display = "none";
    }
  });

  // initial show / hide on hover
  homeBlock.addEventListener("mouseenter", () => {
    const unMuteStyle = window.getComputedStyle(clickToUnmuteUI);
    if (unMuteStyle.display == "none" && showreelVideo.muted) {
      clickToUnmuteUI.style.display = "flex";
    }
  });

  // hover out interaction with checks to ensure its not hovering out into the sound btns itself
  clickToUnmuteUI.addEventListener("mouseout", (event) => {
    const unMuteStyle = window.getComputedStyle(clickToUnmuteUI);

    // Check if the mouse is still over clickToUnmuteUI or any soundBtns
    const isHoveringSoundBtns = soundBtns.some((btn) =>
      btn.contains(event.relatedTarget)
    );
    const isHoveringClickToUnmute = clickToUnmuteUI.contains(
      event.relatedTarget
    );

    if (
      !isHoveringSoundBtns &&
      !isHoveringClickToUnmute &&
      unMuteStyle.display === "flex" &&
      showreelVideo.muted
    ) {
      clickToUnmuteUI.style.display = "none";
    }
  });

  // catch if user hovers off showreel, after clicking once
  showreelVideo.addEventListener("mouseout", function () {
    const clickedOnce = clickLogic == "once";
    if (clickedOnce && !outOfView) {
      setTimeout(() => {
        clickToMuteUI.style.display = "flex";
      }, 500);
    }
  });
}

// NAV SHOWREEL
export function showreelNav(audio) {
  const fadeMusicToggle = audio.fadeToggle;
  const showreelMuteState = audio.getShowreelMuteState;

  const navPlayReel = document.querySelector(".navbar_playreel-wrapper");
  const wave = document.querySelectorAll(".wave");
  const showreelVideo = document.querySelector("#showreelNavXL_video");

  showreelVideo.volume = 0.7;

  // on showreel-nav click
  navPlayReel.addEventListener("click", () => {
    showreelVideo.muted = false; //unmute video
    showreelVideo.currentTime = 0; //restart video
    if (!showreelMuteState()) fadeMusicToggle(); //if unmuted, toggle music fade
    wave.forEach((stroke) => {
      stroke.style.fill = "#F5F4F2"; //set mute svg fill back to white
    });
  });

  // when user navigates away from showreel
  showreelVideo.addEventListener(
    "pause",
    function () {
      if (
        showreelVideo.muted == false &&
        document.visibilityState == "visible"
      ) {
        if (!showreelMuteState()) fadeMusicToggle(); //if unmuted, toggle music fade
      }
    },
    false
  );
}
