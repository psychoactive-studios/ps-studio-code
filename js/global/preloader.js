var anim;
var logoWrap;
var logoWrap_b;
var anim_b;

const readyPreloader = () => {
  stopLogoLoading();
  pageOutTransitionLinks();
  logoMouseEvents();
};

// This code delays the page going to the next URL for a moment so that we can fade the content out (page transition)
function pageOutTransitionLinks() {
  function link_is_external(link_element) {
    return link_element.host !== window.location.host;
  }

  var links = document.querySelectorAll("a");

  //   for (var i = 0; i < links.length; i++) {
  //     if (!link_is_external(links[i])) {
  //       // Only internal links trigger page out logo animation
  //       // with the exception of content-hub inner page internal links
  //       console.log(links[i]);
  //       links[i].addEventListener("click", pageTransition);

  //       if (
  //         !links[i].classList.contains("hamburger-box") &&
  //         !links[i].classList.contains("close-menu-box") &&
  //         !links[i].target == "_blank"
  //       ) {
  //         //   links[i].addEventListener("click", pageTransition);
  //       }
  //     }
  //   }

  links.forEach((link) => {
    if (!link_is_external(link)) {
      link.addEventListener("click", pageTransition);
      // Only internal links trigger page out logo animation
      // with the exception of content-hub inner page internal links
      //   if (
      //     (!link.classList.contains("hamburger-box")) &&
      //     (!link.classList.contains("close-menu-box")) &&
      //     (!link.target == "_blank")
      //   ) {
      //     link.addEventListener("click", pageTransition);
      //   }
    }
  });

  function pageTransition(e) {
    e.preventDefault();
    // flip phrog once
    logoWrap.querySelector("svg").style.opacity = "1";
    logoWrap.querySelector("img").style.opacity = "0";
    logoWrap_b.querySelector("svg").style.opacity = "1";
    logoWrap_b.querySelector("img").style.opacity = "0";

    // setting loop to false doesn't work above so:
    anim.loop = true;
    anim_b.loop = true;
    anim.play();
    anim_b.play();
    setTimeout(function () {
      anim.loop = false;
      anim_b.loop = false;
    }, 100);

    var linkUrl = $(this).attr("href");
    
    setTimeout(
      function (url) {
        window.location = url;
      },
      1150,
      linkUrl
    );
  }
}

// The lottie of the phrog flipping acts as our loading indicator
function loopLogoLoading() {
  logoWrap = document.querySelector("#ps-logo-wrap");
  logoWrap_b = document.querySelector("#ps-logo-wrap-black");

  // White lottie
  anim = lottie.loadAnimation({
    container: logoWrap,
    renderer: "svg",
    autoplay: true,
    loop: true,
    name: "clocked",
    // animationData: data
    path: "https://uploads-ssl.webflow.com/5f287eb0037f68c8a08d3520/5fc454a806388fa94227b1ee_White-V01.json",
  });

  // Black lottie
  anim_b = lottie.loadAnimation({
    container: logoWrap_b,
    renderer: "svg",
    autoplay: false,
    loop: false,
    name: "clocked",
    // animationData: data
    path: "https://uploads-ssl.webflow.com/5f287eb0037f68c8a08d3520/5fc456d931e1effecaab008c_Black-V02.json",
  });

  // as soon as animation is ready (before other media on page)
  anim.addEventListener("data_ready", () => {
    anim.play();
    logoWrap.querySelector("svg").style.opacity = "1";
    logoWrap.querySelector("img").style.opacity = "0";
  });

  // as soon as animation is ready (before other media on page)
  anim_b.addEventListener("data_ready", () => {
    anim_b.play();
    logoWrap_b.querySelector("svg").style.opacity = "0";
    logoWrap_b.querySelector("img").style.opacity = "1";
  });
}

// Makes the phrog flip when hovered
function logoMouseEvents() {
  logoWrap.addEventListener("mouseenter", () => {
    anim.play();
    anim.loop = true;
    logoWrap.querySelector("svg").style.opacity = "1";
    logoWrap.querySelector("img").style.opacity = "0";
  });

  logoWrap.addEventListener("mouseleave", () => {
    anim.loop = false;
    anim.addEventListener(
      "complete",
      () => {
        logoWrap.querySelector("svg").style.opacity = "0";
        logoWrap.querySelector("img").style.opacity = "1";
      },
      { once: true }
    );
  });

  logoWrap_b.addEventListener("mouseenter", () => {
    anim_b.play();
    anim_b.loop = true;
    logoWrap_b.querySelector("svg").style.opacity = "1";
    logoWrap_b.querySelector("img").style.opacity = "0";
  });

  logoWrap_b.addEventListener("mouseleave", () => {
    anim_b.loop = false;
    anim_b.addEventListener(
      "complete",
      () => {
        logoWrap_b.querySelector("svg").style.opacity = "0";
        logoWrap_b.querySelector("img").style.opacity = "1";
      },
      { once: true }
    );
  });
}

function stopLogoLoading() {
  anim.loop = false;
  anim.addEventListener(
    "complete",
    () => {
      logoWrap.querySelector("svg").style.opacity = "0";
      logoWrap.querySelector("img").style.opacity = "1";
    },
    { once: true }
  );
}

export { loopLogoLoading, readyPreloader };
