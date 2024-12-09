import anime from "animejs";

export default loadAnim = () => {
  var topMargin;

  if ($(window).width() <= 1024) {
    topMargin = "15vh";
  } else {
    topMargin = "6vw";
  }

  // let targetQuery = ".landing-text-box";
  // original
  // let targetQuery = ".landing-text-box, .project-card-parent";

  //get cookies
  var hasVisited = sessionStorage.getItem("washere");

  // anime.set(targetQuery, {
  //   opacity: 0,
  //   translateY: "4vh",
  // });

  anime.set("#hamburger, .logos-box, #mute-btn-container", {
    opacity: 0,
    translateY: "-4vh",
  });

  anime.set(".landing-video-container", {
    opacity: 0,
  });

  const onOpen = (delay) => {
    $(".body-dark").css({ overflow: "visible" });
    $(".preloader-background").animate({ opacity: 0 }, 1000);
    $("#preloader").css({ display: "none" });
    $("#mute-btn-container").css({ display: "none" });

    anime({
      targets: ".landing-video-container",
      opacity: { value: 1, duration: 800, easing: "easeOutSine" },
      delay: delay,
    });

    $("#mute-btn-container").css({ display: "block" });
    $(".navigation-bar").css({ display: "block" });

    anime({
      targets: "#hamburger, .logos-box, #mute-btn-container",
      opacity: { value: 1, duration: 800, easing: "easeOutSine" },
      translateY: {
        value: ["-4vh", "0vh"],
        duration: 1000,
        easing: "easeOutQuad",
      },
      delay: anime.stagger(500, { start: delay }),
    });

    // anime({
    //   targets: targetQuery,
    //   opacity: { value: 1, duration: 800, easing: "easeOutSine" },
    //   translateY: { value: 0, duration: 1000, easing: "easeOutQuad" },
    //   delay: anime.stagger(500, { start: delay + 1000 }),
    // });
  };
  const visited = (delay) => {
    $(".body-dark").css({ overflow: "visible" });
    $(".preloader-background").css({ display: "none" });
    $("#preloader").css({ display: "none" });
    $(".navigation-bar").css({ display: "block;" });
    $("#mute-btn-container").css({ display: "block;" });

    anime({
      targets: ".landing-video-container",
      opacity: { value: 1, duration: 800, easing: "easeOutSine" },
      delay: delay,
    });

    anime({
      targets: "#hamburger, .logos-box, #mute-btn-container",
      opacity: { value: 1, duration: 0, easing: "easeOutSine" },
      translateY: { value: ["0", "0vh"], duration: 0, easing: "easeOutQuad" },
      delay: anime.stagger(500, { start: delay }),
    });

    // anime({
    //   targets: targetQuery,
    //   opacity: { value: 1, duration: 0, easing: "easeOutSine" },
    //   translateY: {
    //     value: ["0vh", "0vh"],
    //     duration: 1000,
    //     easing: "easeOutQuad",
    //   },
    //   delay: anime.stagger(500, { start: delay + 1000 }),
    // });
  };

  //if page has been visited - don't animate
  if (hasVisited || $(window).width() <= 1024) {
    // remove black cover from DOM if user has visited site
    $("#black-cover").remove();

    $(".landing-video-container").css({
      width: "80vw",
      height: "40vh",
      position: "relative",
      opacity: 0,
    });

    visited(0);
  }
  // if page not visited - animate
  else {
    $("#preloader").css({ display: "block" });

    $("#trigger,#enter-btn").on("click", function () {
      // remove black cover from DOM if user has visited site
      $("#black-cover").remove();

      $(".landing-video-container")
        .animate(
          {
            width: "100vw",
            height: "100vh",
            opacity: 1,
          },
          1000
        )
        .delay(2000)
        .animate(
          {
            top: topMargin,
            width: "80vw",
            height: "40vh",
            position: "relative",
          },
          1000,
          function () {
            onOpen(0);
          }
        );

      // do stuff
      console.log("Welcome, stranger !");
      sessionStorage.setItem("washere", true);
    });
  }
};
