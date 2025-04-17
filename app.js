import copyEmail from "./js/global/copyEmail";
import initCms from "./js/global/initCms";
import { loopLogoLoading, readyPreloader } from "./js/global/preloader";
import loadAnim from "./js/home/loadAnim";
import audioImplementation from "./js/global/audio";
import aboutPage from "./js/about/aboutPage";
import { showreelHome, showreelNav } from "./js/global/showreel";
import { homeVideoAudio } from "./js/global/videoAudio";
import { stopCmdClick } from "./js/global/bugFixes";
import {
  setAllHomepageVideoSources,
  responsiveNavShowreel,
  lazyLoadHomeVideos,
  contentHubDynamicVideos,
} from "./js/global/dynamicVideos";

const parceled = true; // for checking localhost vs github pages / CDN
const currentPage = window.location.pathname;
const homePage = currentPage == "/";

const contentHubOuter = currentPage === "/content-hub/";
const contentHubInner =
  currentPage.startsWith("/content-hub/") && !contentHubOuter;

const aboutPage = currentPage == "/about-new"; // change to just about later

const onReady = () => {
  readyPreloader(); // hides preloader and add event listener for frog lottie
  const audio = audioImplementation(homePage); // adds music, ui-sounds and mute-lottie functionality
  responsiveNavShowreel(); // make nav showreel load video sources dynamically
  if (homePage) {
    homeVideoAudio(audio); // code for home video audio
    setAllHomepageVideoSources(); // make homepage load video sources dynamically
    lazyLoadHomeVideos(); // make homepage videos lazy load in on scroll
    // showreelHome(audio); // code for homepage showreel video
  }
  if (contentHubInner) contentHubDynamicVideos();
  showreelNav(audio); // code for nav showreel video
  copyEmail(); // copies email to clipboard in footer
  initCms(); // sets color hovers and cms filtering style for work page & content hub
  document.querySelector(".landing-video-container") && loadAnim(); // for home page intro anim
  document.querySelectorAll(".article-rich-text a").forEach((e) => {
    e.target = "_blank";
  });

  if (aboutPage) aboutPage(); // all custom code for about page 
  stopCmdClick(); // prevent command click from triggering page transition
};

const onLoading = () => {
  loopLogoLoading();
};

if (document.readyState !== "loading") {
  onLoading();
  onReady();
} else {
  window.addEventListener("load", onReady);
  document.addEventListener("DOMContentLoaded", onLoading);
}

// close menu on escape key press
const handleEscape = (e) => {
  if (e.key === "Escape") {
    const closeBtn = document.querySelector(".burger-close-icon");
    const hamburgerMenu = document.querySelector(".hamburger-box");
    if (hamburgerMenu.style.opacity == 0) {
      closeBtn.click();
    }
  }
};
window.addEventListener("keydown", handleEscape);
