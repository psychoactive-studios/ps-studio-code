import aboutLottie from "./js/global/about/aboutLottie";
import copyEmail from "./js/global/copyEmail";
import initCms from "./js/global/initCms";
import logCareers from "./js/global/logCareers";
import { loopLogoLoading, readyPreloader } from "./js/global/preloader";
import initProjectLotties from "./js/global/projectLotties";
import loadAnim from "./js/home/loadAnim";
import setLogoHref from "./js/pitches/setLogoHref";
import audioImplementation from "./js/global/audio";

const parceled = true; // for checking localhost vs github pages / CDN

// prevent command click
// let cmdClick = false;
// document.addEventListener("click", logKey);
// function logKey(e) {
//   cmdClick = e.metaKey;
//   console.log(cmdClick);
//   // console.log(`The meta key is pressed: ${e.metaKey}`);
// }

// function pageTransition(e) {

// if(e.ctrlKey || e.metaKey){
// return //aborts function execution and regular open in new tab behavior will happen
// }

// //rest of code

// e.preventDefault()

// etc....
// }

const onReady = () => {
  audioImplementation(); // adds music, ui-sounds and mute-lottie functionality
  const page = window.location.pathname.split("/").pop();
  logCareers(); // logs a frog and message to the console
  readyPreloader(); // hides preloader and add event listener for frog lottie
  initProjectLotties(); // initiates project lotties for home and work pages
  copyEmail(); // copies email to clipboard in footer
  initCms(); // sets color hovers and cms filtering style for work page & content hub
  document.querySelector(".landing-video-container") && loadAnim(); // for home page intro anim
  document.querySelector(".client-link") && setLogoHref();
  document.querySelectorAll(".article-rich-text a").forEach((e) => {
    e.target = "_blank";
  });
  page == "about" && aboutLottie();
  stopCmdClick(); // prevent command click from triggering page transition
};

const onLoading = () => {
  loopLogoLoading();
};

if (document.readyState !== "loading") {
  onLoading();
  onReady();
  //console.log('readystate')
} else {
  //console.log('load')
  window.addEventListener("load", onReady);
  document.addEventListener("DOMContentLoaded", onLoading);
}

function stopCmdClick() {
  document.addEventListener("click", function (e) {
    if (e.ctrlKey || e.metaKey) {
      document.querySelectorAll(".menu-transition-cover").forEach((element) => {
        element.setAttribute("style", "visibility:hidden !important");
      });
    } else {
      document.querySelectorAll(".menu-transition-cover").forEach((element) => {
        element.setAttribute("style", "visibility:visible !important");
      });
    }
  });
}
