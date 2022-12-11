 function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  export default aboutLottie = () => {

  var availableLotties = []
  //var lastLottie = null
  //var lastLotties = []
  
   var lotties = [...document.querySelectorAll("lottie-player")]
    availableLotties = lotties.filter( l => l.getAttribute('src') != "")
    console.log(availableLotties)
	// 		// Collect lotties which are currently in view
    //   for (var i = 0; i < lotties.length; i++) {
    //     var lottie = lotties[i];
    //    if(lottie.getAttribute('src') != ""){
    //      availableLotties.push(lottie)
    //    }
    //   }
      
  
  // method 1, timeout
  setInterval(function() {
  	// Function runs every 800 milliseconds (the duration of the lottie animations)     
       
      if (availableLotties.length == 0) return
      
      //console.log(availableLotties.length)
      
      // Select a random lottie
      var selectedIndex = getRandomInt(availableLotties.length)		
      var selectedLottie =  availableLotties[selectedIndex]
            
      // play lottie
      if (selectedLottie) {
      	selectedLottie.seek(0)
      	selectedLottie.play() 
      }     
      //remove the item from array as the lottie plays on loop
      availableLotties.splice(selectedIndex, 1)
   }, 500)

   document.querySelectorAll('.team-box').forEach(e => {
    const video = e.querySelector('video')
    let isPlaying = false

    video.onplaying = () => isPlaying = true
    video.onpause = () => isPlaying = false
    video.pause()

    e.addEventListener('mouseenter', () => {
        video.paused && !isPlaying && video.play()
    })

    e.addEventListener('mouseleave', () => {
        !video.paused && isPlaying && video.pause()
    })

   })

}