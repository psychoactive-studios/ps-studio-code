// dynamically set video sources based on screen size
function setVideoSource(video) {
  const videoElem = document.getElementById(`${video}_video`);
  let videoSrc = "";

  if (window.innerWidth <= 560) {
    videoSrc = getURL(video, "mobile");
  } else if (window.innerWidth <= 1680) {
    videoSrc = getURL(video, "laptop");
  } else {
    videoSrc = getURL(video, "desktop");
  }

  // Check if the current source is already set
  if (videoElem.getAttribute("src") !== videoSrc) {
    videoElem.src = videoSrc;
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
