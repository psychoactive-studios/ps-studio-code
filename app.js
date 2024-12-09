import copyEmail from "./js/global/copyEmail";
import initCms from "./js/global/initCms";
import { loopLogoLoading, readyPreloader } from "./js/global/preloader";
import initProjectLotties from "./js/global/projectLotties";
import loadAnim from "./js/home/loadAnim";
import audioImplementation from "./js/global/audio";
import { showreelHome, showreelNav } from "./js/global/showreel";
import { stopCmdClick } from "./js/global/bugFixes";
// import setLogoHref from "./js/pitches/setLogoHref";

const parceled = true; // for checking localhost vs github pages / CDN
const currentPage = window.location.pathname;
const homePage = currentPage == "/";

const onReady = () => {
  readyPreloader(); // hides preloader and add event listener for frog lottie
  const audio = audioImplementation(homePage); // adds music, ui-sounds and mute-lottie functionality
  if (homePage) showreelHome(audio); // code for homepage showreel video
  showreelNav(audio); // code for nav showreel video
  initProjectLotties(); // initiates project lotties for home and work pages
  copyEmail(); // copies email to clipboard in footer
  initCms(); // sets color hovers and cms filtering style for work page & content hub
  document.querySelector(".landing-video-container") && loadAnim(); // for home page intro anim
  // document.querySelector(".client-link") && setLogoHref();
  document.querySelectorAll(".article-rich-text a").forEach((e) => {
    e.target = "_blank";
  });
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
