 function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  export default aboutLottie = () => {

  var availableLotties = []
  //var lastLottie = null
  //var lastLotties = []
  
   var lotties = [...document.querySelectorAll("lottie-player")]
    availableLotties = lotties.filter( l => l.getAttribute('src') != "")
  
  // method 1, timeout
  setInterval(function() {
  	// Function runs every 800 milliseconds (the duration of the lottie animations)     
       
      if (availableLotties.length == 0) return
      
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