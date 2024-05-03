export function showreelHome(audio) {
  const fadeMusicToggle = audio.fadeToggle;
  const showreelMuteState = audio.getShowreelMuteState;

  const homeBlock = document.querySelector("#showreel_block_home");
  const showreelVideo = document.querySelector("#showreel_home");
  const clickToUnmuteUI = document.querySelector(".showreel-ui-wrapper");
  const clickToMuteUI = document.querySelector(".showreel-ui-wrapper-2");

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
    console.log("first click logic");
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
    console.log("second click logic");
    showreelVideo.muted = true; //mute video again
    if (!showreelMuteState()) fadeMusicToggle(); //if unmuted, toggle music fade
    clickToUnmuteUI.style.opacity = "100"; // set unmute opacity to 100
    clickToUnmuteUI.style.display = "flex"; // display unmute ui
    clickToMuteUI.style.display = "none"; // hide mute ui
    clickLogic = "twice"; //update click logic
  }

  // THIRD CLICK LOGIC
  function thirdClickLogic() {
    console.log("third click logic");
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
    const muteStyle = window.getComputedStyle(clickToMuteUI);
    const unMuteStyle = window.getComputedStyle(clickToUnmuteUI);
    console.log(muteStyle.display == "none");
    if (unMuteStyle.display == "none" && showreelVideo.muted) {
      console.log("show unmute");
      clickToUnmuteUI.style.display = "flex";
    }
    // if (muteStyle.display == "none" && !showreelVideo.muted) {
    //   console.log("show mute");
    //   clickToMuteUI.style.display = "flex";
    // }
  });

  clickToUnmuteUI.addEventListener("mouseout", () => {
    const unMuteStyle = window.getComputedStyle(clickToUnmuteUI);
    if (unMuteStyle.display == "flex" && showreelVideo.muted) {
      console.log("hide unmute");
      clickToUnmuteUI.style.display = "none";
    }
  });

  // homeBlock.addEventListener("mouseout", () => {
  //   console.log("hovered out");
  //   const muteStyle = window.getComputedStyle(clickToMuteUI);
  //   if (muteStyle.display == "flex" && !showreelVideo.muted) {
  //     console.log("hide mute");
  //     clickToMuteUI.style.display = "none";
  //   }
  // });

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
  const showreelVideo = document.querySelector("#showreel_nav");

  showreelVideo.volume = 0.7;

  // on showreel-nav click
  navPlayReel.addEventListener("click", () => {
    showreelVideo.muted = false; //unmute video
    showreelVideo.currentTime = 0; //restart video
    console.log(!showreelMuteState());
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
