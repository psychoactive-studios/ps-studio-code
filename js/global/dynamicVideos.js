// dynamically set video sources based on screen size
function setVideoSource(video) {
  let videoSrc;
  const isContentHub = video == "content-hub";

  const videoElem = isContentHub
    ? document.querySelector(".content-hub-video")
    : document.getElementById(`${video}_video`);

  if (window.innerWidth <= 560) {
    videoSrc = isContentHub
      ? getURLContentHub(videoElem, "mobile")
      : getURL(video, "mobile");
  } else if (window.innerWidth <= 1680) {
    videoSrc = isContentHub
      ? getURLContentHub(videoElem, "laptop")
      : getURL(video, "laptop");
  } else {
    videoSrc = isContentHub
      ? getURLContentHub(videoElem, "desktop")
      : getURL(video, "desktop");
  }

  // Check if the current source is already set, then update it
  if (isContentHub) {
    const sourceElement = videoElem.querySelector("source");
    let videoSource = sourceElement ? sourceElement.getAttribute("src") : null;

    if (sourceElement.getAttribute("src") !== videoSrc) {
      videoSource = videoSrc;
      sourceElement.setAttribute("src", videoSource);
      videoElem.load();
      videoElem.play();
    }
  } else {
    if (videoElem.getAttribute("src") !== videoSrc) {
      try {
        videoElem.pause(); // Pause the video before changing the src
        videoElem.removeAttribute("src"); // Clear the current src to ensure a fresh load
        videoElem.setAttribute("src", videoSrc); // Set the new src
        videoElem.load(); // Explicitly load the video
      } catch (error) {
        console.warn(`Failed to update video source for ${video}`, error);
      }
    }
  }

  // Preload only if the video is already in the viewport
  const isInViewport = (elem) => {
    const rect = elem.getBoundingClientRect();
    return (
      rect.top <
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right > 0
    );
  };

  if (isInViewport(videoElem) && videoElem.paused) {
    videoElem.play().catch((error) => {
      console.warn(`Failed to autoplay video: ${video}`, error);
    });
  }
}

// call to set all nav showreel video sources
export function responsiveNavShowreel() {
  function satNavSources() {
    setVideoSource("showreelNav");
    setVideoSource("showreelNavXL");
  }
  satNavSources();
  debounceWindowResizedListener(satNavSources);
}

// call to set all homepage video sources
export function setAllHomepageVideoSources() {
  function setAllVideoSources() {
    setVideoSource("oasis");
    setVideoSource("showreel");
    setVideoSource("sgf");
    setVideoSource("metamorphoses");
  }
  setAllVideoSources();
  debounceWindowResizedListener(setAllVideoSources);
}

// Main function to lazy load home videos
export function lazyLoadHomeVideos() {
  // SGF VIDEO
  setupLazyLoad(
    document.getElementById("sgf_video"),
    document.getElementById("project-thumbnails")
  );
  // OASIS VIDEO
  setupLazyLoad(
    document.getElementById("oasis_video"),
    document.getElementById("project-thumbnails-2")
  );
  // SHOWREEL VIDEO
  setupLazyLoad(
    document.getElementById("showreel_video"),
    document.getElementById("project-thumbnails-3")
  );
  // HERO TESSELATION VIDEO
  setupLazyLoad(
    document.getElementById("metamorphoses_video"),
    document.getElementById("metamorphoses_video")
  );
}

export function contentHubDynamicVideos() {
  debounceWindowResizedListener(() => setVideoSource("content-hub"));
}

// UTILITY FUNCTIONS

// set up IntersectionObserver for lazy loading videos
function setupLazyLoad(videoElement, triggerElement) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        videoElement.setAttribute("preload", "auto"); // Preload the video
        videoElement.play(); // Play the video
        observer.unobserve(triggerElement); // Stop observing after triggering
      }
    },
    { threshold: 0 }
  );
  observer.observe(triggerElement); // Start observing the trigger element
}

// render new video source based on window screen size change event
function debounceWindowResizedListener(func) {
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(func, 500);
  });
}

// return correct digital ocean url
function getURL(video, device) {
  let url;
  if (video.includes("Nav")) {
    url = `https://psychoactive-website-media.sfo3.cdn.digitaloceanspaces.com/Responsive-Videos/showreel_${device}.mp4`;
  } else {
    url = `https://psychoactive-website-media.sfo3.cdn.digitaloceanspaces.com/Responsive-Videos/${video}_${device}.mp4`;
  }
  return url;
}

function getURLContentHub(video, device) {
  const sourceElement = video.querySelector("source");
  const videoSource = sourceElement ? sourceElement.getAttribute("src") : null;

  const match = videoSource.match(/\/([^\/]+)_(mobile|laptop|desktop)\.mp4$/);
  const videoTitle = match ? match[1] : null;

  const url = `https://psychoactive-website-media.sfo3.cdn.digitaloceanspaces.com/Responsive-Videos/Content-Hub/${videoTitle}_${device}.mp4`;

  return url;
}
