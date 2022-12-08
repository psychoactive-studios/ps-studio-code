import copyEmail from "./js/global/copyEmail"
import initCms from "./js/global/initCms"
import logCareers from "./js/global/logCareers"
import { loopLogoLoading, readyPreloader } from "./js/global/preloader"
import initProjectLotties from "./js/global/projectLotties"
import loadAnim from "./js/home/loadAnim"

const parceled = true // for checking localhost vs github pages / CDN


const onReady = () => {
    pageLoaded = true

    logCareers() // logs a frog and message to the console
    readyPreloader() // hides preloader and add event listener for frog lottie
    initProjectLotties() // initiates project lotties for home and work pages
    copyEmail() // copies email to clipboard in footer
    initCms() // sets color hovers and cms filtering style for work page & content hub
    document.querySelector('.landing-video-container') && loadAnim() // for home page intro anim
}

const onLoading = () => {
    loopLogoLoading()
}

if (document.readyState !== 'loading') {
    onLoading()
    onReady()
    console.log('readystate')
  } else {
    console.log('load')
    window.addEventListener('load', onReady)
    document.addEventListener('DOMContentLoaded', onLoading)
}