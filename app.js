import copyEmail from "./js/global/copyEmail"
import initCms from "./js/global/initCms"
import logCareers from "./js/global/logCareers"
import { loopLogoLoading, readyPreloader } from "./js/global/preloader"
import initProjectLotties from "./js/global/projectLotties"

const parceled = true

// global dictionary of url of mobile and desktop lotties per slug id
// structure: "slug" = ["mobile", "desktop"]
  

const onReady = () => {
    pageLoaded = true
    logCareers()
    readyPreloader()
    initProjectLotties()
    copyEmail()
    initCms()
}

const onLoading = () => {
    loopLogoLoading()
}

if (document.readyState !== 'loading') {
    onLoading()
    onReady()
  } else {
    window.addEventListener('load', onReady)
    document.addEventListener('DOMContentLoaded', onLoading)
}