// query breakpoint and load suitable lottie into player
export default function initProjectLotties() {
  // check if lottie players exist 
  if (document.querySelectorAll('lottie-player').length > 0) {
    // create array with all lotie players
    var allLotties = [...document.querySelectorAll('lottie-player')]
    //var allLottiesHover = document.querySelectorAll('.hover-lottie-wrapper')

    let isMobile = window.innerWidth < 428
    
    // create new array from lotties if it doesn't have a source attribute
    allLotties = allLotties.filter( l => !l.hasAttribute('src'))

    allLotties.forEach( e => {
      // get source based to mobile or desktop based on mobile / screen width
      let source = isMobile ? e.getAttribute('mobile-source') : e.getAttribute('desktop-source')
      // if source is not empty, load the source into each lottie player
      if(source != ''){
        e.load(source)
      }
    })
    
    // remove safari placeholder 
    document.querySelectorAll('.safari-image').forEach(e => {
      e.remove()
    })
  }
}

//   // Play lotties one randomly and one at a time for performance
//   function isInViewport(el) {
//     var rect = el.getBoundingClientRect()
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     )
//   }

//   // lotties only play when in viewport
//   var lottiesRemoved = false

//   var x = 0

//   // method 1, timeout
//   var deleteLottiesFunction = setInterval(function () {
//     deleteLotties()
//     if (++x === 50) {
//       clearInterval(deleteLottiesFunction)
//     }
//   }, 100)
//   //
//   //deleteLotties()

//   function deleteLotties() {
//     // Function runs every 4 seconds (the duration of the lottie animations)
//     if (pageLoaded) {
//       //availableLotties = []

//       //var lotties = document.getElementsByTagName("lottie-player");
//       var lottieBoxes = document.getElementsByClassName('lottie-box')

//       var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
//       var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0

//       //console.log()
//       if (isSafari && isMac && !lottiesRemoved) {
//         lottieBoxes = document.getElementsByClassName('lottie-box')
//         if (lottieBoxes.length == 0) {
//           //clearInterval(deleteLottiesFunction);
//         }

//         for (var i = 0; i < lottieBoxes.length; i++) {
//           //lottieBoxes[i].remove()
//           //lottiesRemoved = true
//         }
//       } else {
//         safariImages = document.getElementsByClassName('safari-image')

//         for (var i = 0; i < safariImages.length; i++) {
//           safariImages[i].remove()
//           //lottiesRemoved = true
//         }
//       }
//     }
//   }
// }
