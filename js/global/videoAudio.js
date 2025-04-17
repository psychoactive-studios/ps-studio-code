export function homeVideoAudio(audio) {
  const fadeMusicToggle = audio?.fadeToggle;
  const isMuted = audio?.mutedState;

  const playVideoTriggers = document.querySelectorAll(".home-hover-outer");
  const allHomepageVideos = document.querySelectorAll(".home-video");

  // Reduce volume of all homepage videos to 0.7`
  allHomepageVideos.forEach((video) => {
    if (video) {
      video.volume = 0.7;
    }
  });

  // Map to store click states for each video
  const videoClickStates = new Map();
  const videoOutOfViewStates = new Map();

  // homepage video click logic
  playVideoTriggers.forEach((trigger) => {
    const currentVideo = trigger.querySelector(".home-video"); // get current video
    const currentPlayWrapper = trigger.querySelector(".play-video-wrapper");
    const currentPlayBtn = trigger.querySelector(".view-project-btn");

    if (!currentVideo) return; // exit if no video found

    // Initialize states for this video
    videoClickStates.set(currentVideo, "none");
    videoOutOfViewStates.set(currentVideo, false);

    // catch for if user scrolls video out of view or clicks on nav
    currentVideo.addEventListener(
      "pause",
      function () {
        videoOutOfViewStates.set(currentVideo, true);
        if (
          currentVideo.muted == false && // check if video is unmuted
          document.visibilityState == "visible" // check if user is not in another tab
        ) {
          secondClickLogic(currentVideo, currentPlayWrapper);
          videoClickStates.set(currentVideo, "none"); //reset click logic
        }
      },
      false
    );

    // trigger click logic
    trigger.addEventListener("click", (e) => {
      // Check if the click was on the view project button or any of its children
      if (
        currentPlayBtn &&
        (e.target === currentPlayBtn || currentPlayBtn.contains(e.target))
      ) {
        e.stopPropagation();
        return; // Exit if so
      }

      const currentClickState = videoClickStates.get(currentVideo);
      switch (currentClickState) {
        case "none":
          firstClickLogic(currentVideo, currentPlayWrapper);
          break;
        case "once":
          secondClickLogic(currentVideo, currentPlayWrapper);
          break;
        case "twice":
          thirdClickLogic(currentVideo, currentPlayWrapper);
          break;
        default:
          firstClickLogic(currentVideo, currentPlayWrapper);
      }
    });
  });

  // FIRST CLICK LOGIC
  function firstClickLogic(currentVideo, currentPlayWrapper) {
    currentVideo.muted = false; //unmute video
    currentVideo.currentTime = 0; //restart video
    currentPlayWrapper.style.display = "none"; //hide play ui

    //if unmuted, toggle music fade
    if (fadeMusicToggle && !isMuted()) {
      fadeMusicToggle();
    }

    videoClickStates.set(currentVideo, "once"); //update click logic
    videoOutOfViewStates.set(currentVideo, false); //ensure out of view logic is false
  }

  // SECOND CLICK LOGIC
  function secondClickLogic(currentVideo, currentPlayWrapper) {
    currentVideo.muted = true; //mute video again
    currentPlayWrapper.style.opacity = "100"; // set unmute opacity to 100
    currentPlayWrapper.style.display = "flex"; // display unmute ui

    //if unmuted, toggle music fade
    if (fadeMusicToggle && !isMuted()) {
      fadeMusicToggle();
    }

    videoClickStates.set(currentVideo, "twice"); //update click logic
  }

  // THIRD CLICK LOGIC
  function thirdClickLogic(currentVideo, currentPlayWrapper) {
    currentVideo.muted = false; //unmute video
    currentPlayWrapper.style.display = "none"; //hide unmute ui
    videoClickStates.set(currentVideo, "once"); //update click logic

    //if unmuted, toggle music fade
    if (fadeMusicToggle && !isMuted()) {
      fadeMusicToggle();
    }

    videoOutOfViewStates.set(currentVideo, false); //ensure out of view logic is false
  }
}
