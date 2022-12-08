// query breakpoint and load suitable lottie into player
export default function initProjectLotties() {
  if (document.querySelectorAll('.lottie-wrapper').length > 0) {
    var allLotties = document.getElementsByClassName('lottie-wrapper')
    var allLottiesHover = document.getElementsByClassName('hover-lottie-wrapper')

    for (var i = 0; i < allLotties.length; i++) {
      if (window.innerWidth < 428) {
        var id = allLotties[i].id
        allLotties[i].load(lottiesDict[id][0])
      } else {
        var id = allLotties[i].id
        allLotties[i].load(lottiesDict[id][1])
      }
    }

    for (var i = 0; i < allLottiesHover.length; i++) {
      var id = allLottiesHover[i].id
      if (window.innerWidth < 428 && lottiesDictHover[id][0] != '') {
        //console.log("Init lotties")

        allLottiesHover[i].load(lottiesDictHover[id][0])
      } else if (lottiesDictHover[id][1] != '') {
        //console.log("Init lotties")
        //var id = allLottiesHover[i].id
        allLottiesHover[i].load(lottiesDictHover[id][1])
      }
    }
  }else if(document.querySelectorAll('lottie-player').length > 0){
    // code for the work page
        var allLotties = document.getElementsByTagName("lottie-player");
        
            for (var i = 0; i < allLotties.length; i++) {
            if (window.innerWidth < 428) {
              var id = allLotties[i].id
              allLotties[i].load(lottiesDict[id][0])
            console.log(lottiesDict[id][0])
          } else {
              var id = allLotties[i].id
              allLotties[i].load(lottiesDict[id][1])
          }
        }
  }

  // Play lotties one randomly and one at a time for performance
  function isInViewport(el) {
    var rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  // lotties only play when in viewport
  var lottiesRemoved = false

  var x = 0

  // method 1, timeout
  var deleteLottiesFunction = setInterval(function () {
    deleteLotties()
    if (++x === 50) {
      clearInterval(deleteLottiesFunction)
    }
  }, 100)
  //
  //deleteLotties()

  function deleteLotties() {
    // Function runs every 4 seconds (the duration of the lottie animations)
    if (pageLoaded) {
      //availableLotties = []

      //var lotties = document.getElementsByTagName("lottie-player");
      var lottieBoxes = document.getElementsByClassName('lottie-box')

      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0

      //console.log()
      if (isSafari && isMac && !lottiesRemoved) {
        lottieBoxes = document.getElementsByClassName('lottie-box')
        if (lottieBoxes.length == 0) {
          //clearInterval(deleteLottiesFunction);
        }

        for (var i = 0; i < lottieBoxes.length; i++) {
          //lottieBoxes[i].remove()
          //lottiesRemoved = true
        }
      } else {
        safariImages = document.getElementsByClassName('safari-image')

        for (var i = 0; i < safariImages.length; i++) {
          safariImages[i].remove()
          //lottiesRemoved = true
        }
      }
    }
  }
}
