export function showreelHome(audio) {
  const fadeMusicToggle = audio.fadeToggle;
  const showreelMuteState = audio.getShowreelMuteState;

  const homeBlock = document.querySelector("#showreel_block_home");
  const showreelVideo = document.querySelector("#showreel_home");
  const clickToUnmuteUI = document.querySelector(".showreel-ui-wrapper");
  const clickToMuteUI = document.querySelector(".showreel-ui-wrapper-2");

  showreelVideo.volume = 0.7;

  let clickedOnce = false;
  let clickedTwice = false;
  let outOfView = false;

  // homepage showreel on click logic
  homeBlock.addEventListener("click", () => {
    if (!clickedOnce) {
      firstClickLogic();
    } else if (!clickedTwice && clickedOnce) {
      secondClickLogic();
    } else if (clickedOnce && clickedTwice) {
      thirdClickLogic();
    }
  });

  homeBlock.addEventListener("mouseenter", () => {
    if (clickToUnmuteUI.style.display == "flex") {
      clickToMuteUI.style.display = "none";
    }
  });

  // clickToMuteUI.addEventListener("click", () => {
  //   secondClickCode();
  // });

  function firstClickLogic() {
    showreelVideo.muted = false; //unmute video
    showreelVideo.currentTime = 0; //restart video

    clickToUnmuteUI.style.display = "none"; //hide unmute ui
    clickToMuteUI.style.opacity = 0;

    if (!showreelMuteState()) fadeMusicToggle(); // if unmuted, fade out music

    clickedOnce = true; //update click logic
    outOfView = false; //ensure out of view logic is false
  }

  function secondClickLogic() {
    showreelVideo.muted = true;

    if (!showreelMuteState()) {
      fadeMusicToggle();
    }
    clickToUnmuteUI.style.opacity = "100"; // set unmute opacity to 100
    clickToUnmuteUI.style.display = "flex";
    clickToMuteUI.style.display = "none";

    clickedTwice = true;
  }

  function thirdClickLogic() {
    clickToUnmuteUI.style.display = "none";
    showreelVideo.muted = false;
    clickedTwice = false;
    outOfView = false;
    if (!showreelMuteState()) {
      fadeMusicToggle();
    }
  }

  // catch for if user scrolls video out of view or clicks on nav
  showreelVideo.addEventListener(
    "pause",
    function () {
      outOfView = true;
      if (
        showreelVideo.muted == false &&
        document.visibilityState == "visible"
      ) {
        // homeBlock.click();
        clickToUnmuteUI.style.display = "flex";
        clickToUnmuteUI.style.opacity = "100";
        secondClickCode();
        clickToMuteUI.style.display = "none";
        clickToMuteUI.style.opacity = 0;
        console.log(showreelMuteState());
        if (!showreelMuteState()) fadeMusicToggle();
        showreelVideo.muted = true;
        clickedOnce = false;
        clickedTwice = false;
        console.log(clickToMuteUI.style.display);
      }
    },
    false
  );

  // catch if user hovers off showreel, after clicking once
  showreelVideo.addEventListener("mouseout", function () {
    // console.log(outOfView);
    if (clickedOnce && !clickedTwice && !outOfView) {
      setTimeout(() => {
        // console.log("hovered off ");
        clickToMuteUI.style.display = "flex";
      }, 500);
    }
  });
}

export function showreelNav(audio) {
  const fadeMusicToggle = audio.fadeToggle;
  const showreelMuteState = audio.getShowreelMuteState;

  const navPlayReel = document.querySelector(".navbar_playreel-wrapper");
  const wave = document.querySelectorAll(".wave");

  const showreelDivs = document.querySelectorAll(
    ".hero-background_video-block-nav.showreel-nav,.showreel-ui-wrapper-nav"
  );

  const showreelVideo = document.querySelector("#showreel_nav");
  const clickToUnmuteUI = document.querySelector(".showreel-ui-wrapper-nav");
  const clickToMuteUI = document.querySelector(".showreel-ui-wrapper-2-nav");

  showreelVideo.volume = 0.7;

  let clickedOnce = false;
  let clickedTwice = false;

  clickToMuteUI.style.display = "none";
  clickToUnmuteUI.style.display = "none";

  navPlayReel.addEventListener("click", () => {
    showreelVideo.muted = false;
    showreelVideo.currentTime = 0;
    // clickedOnce = true;
    fadeMusicToggle();
    wave.forEach((stroke) => {
      stroke.style.fill = "#F5F4F2";
    });
  });

  // showreelDivs.forEach((div) => {
  //   div.addEventListener("click", () => {
  //     if (!clickedOnce) {
  //       // showreelVideo.muted = false;
  //       // showreelVideo.currentTime = 0;
  //       // clickedOnce = true;
  //       // fadeMusicToggle();
  //       // console.log("once");
  //     } else if (!clickedTwice && clickedOnce) {
  //       clickToUnmuteUI.style.display = "flex";
  //       clickToUnmuteUI.style.opacity = "100";
  //       // console.log("twice");
  //       secondClickCode();
  //     } else if (clickedOnce && clickedTwice) {
  //       // console.log("thrice");
  //       clickToUnmuteUI.style.opacity = 0;
  //       showreelVideo.muted = false;
  //       clickedTwice = false;
  //       fadeMusicToggle();
  //     }
  //   });
  // });

  // clickToMuteUI.addEventListener("click", () => {
  //   // console.log("mute ui click");
  //   secondClickCode();
  // });

  // function secondClickCode() {
  //   showreelVideo.muted = true;
  //   clickedTwice = true;
  //   fadeMusicToggle();
  //   clickToMuteUI.style.display = "none";
  // }

  // catch for if user scrolls video out of view or clicks on nav
  showreelVideo.addEventListener(
    "pause",
    function () {
      if (
        showreelVideo.muted == false &&
        document.visibilityState == "visible"
      ) {
        if (!showreelMuteState()) fadeMusicToggle();
        showreelVideo.muted = true;
        clickedOnce = false;
        clickedTwice = false;
      }
    },
    false
  );

  // catch if user hovers off showreel, after clicking once
  // showreelVideo.addEventListener("mouseout", function () {
  //   if (clickedOnce && !clickedTwice) {
  //     console.log("hovered off ");
  //     setTimeout(() => {
  //       clickToMuteUI.style.display = "flex";
  //     }, 500);
  //   }
  // });
}
