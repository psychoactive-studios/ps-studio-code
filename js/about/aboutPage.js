export default aboutPageCode = () => {
  // alert("we live on about page");

  // GSAP Words fade in animation
  const scrollingHighlightElements = document.querySelectorAll(
    "[data-animation='scrolling-highlight']"
  );
  scrollingHighlightElements.forEach((element) => {
    const splitText = new SplitType(element, { types: ["chars", "words"] });
    gsap.from(splitText.chars, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
      opacity: 0.05,
      stagger: 0.1,
    });
  });

  const scrollingHighlightElementsBg = document.querySelectorAll(
    "[data-animation='scrolling-highlight-bg']"
  );
  scrollingHighlightElementsBg.forEach((element) => {
    const splitText = new SplitType(element, { types: ["chars", "words"] });
    gsap.from(splitText.chars, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
      opacity: 1,
      stagger: 0.1,
    });
  });

  ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
  ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////

  // JavaScript Metamorphosis typewriting effect
  const typewriteText = (element, text, delay = 50) => {
    let index = 0;
    const type = () => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, delay);
      } else {
        // Add blinking cursor after typing is complete
        element.innerHTML += '<span class="blinking-cursor">|</span>';
      }
    };
    type();
  };

  // Function to handle intersection observer
  const handleTypewritingOnScroll = () => {
    const element = document.querySelector(".definition_search-bar_text");

    if (!element) return;

    // Initially hide the element
    element.style.visibility = "hidden";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.visibility = "visible"; // Make visible when in view
            const fullText = element.getAttribute("data-text");
            element.textContent = ""; // Clear text before typing
            typewriteText(element, fullText);
          } else {
            // Reset the content and visibility when out of view
            element.textContent = "";
            element.style.visibility = "hidden";
          }
        });
      },
      { threshold: 0 } // Trigger as soon as it enters or exits the viewport
    );
    observer.observe(element);
  };

  // Run function on page load
  handleTypewritingOnScroll();

  // Optionally retrigger on click - currently has a spam clicking bug though
  // document
  //   .querySelector(".definition_search-bar")
  //   ?.addEventListener("click", handleTypewritingOnScroll);

  // CSS for blinking cursor
  const style = document.createElement("style");
  style.textContent = `
  .blinking-cursor {
      display: inline-block;
      width: 0.2ch;
      animation: blink 1s steps(1) infinite;
      margin-left: 0.25rem;
  }

  @keyframes blink {
      0%, 100% {
          opacity: 0.7;
      }
      50% {
          opacity: 0;
      }
  }

  .definition_search-bar_text {
      visibility: hidden; /* Initially hide the element */
  }
`;
  document.head.appendChild(style);

  ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
  ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////

  // function syncPosition() {
  //   const heroImage = document.querySelector(".hero_bg-image-wrapper");
  //   const amphibiansImage = document.querySelector(".amphibians_bg-img");

  //   // Get the computed height of the hero image wrapper
  //   const heroHeight = heroImage.offsetHeight;

  //   // Set the top of the amphibians image dynamically
  //   amphibiansImage.style.top = `${heroHeight}px`;
  // }

  // window.addEventListener("resize", syncPosition);
  // syncPosition(); // Initial call to set positions

  // MOUSE FOLLOWER CODE
  const container = document.getElementById("container");
  const follower = document.getElementById("follower");

  if (container && follower) {
    container.style.position = "relative";
    follower.style.position = "absolute";
    follower.style.transform = "scale(0)";
    follower.style.transition =
      "transform 0.25s ease-in, opacity 0.25s ease-in";
    follower.style.transformOrigin = "center center";
    follower.style.opacity = "0";

    const followerRadius = follower.offsetWidth / 2;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const lerp = (start, end, t) => start + (end - start) * t;

    const updateFollowerPosition = () => {
      currentX = lerp(currentX, targetX, 0.5);
      currentY = lerp(currentY, targetY, 0.5);

      follower.style.left = `${currentX - followerRadius}px`;
      follower.style.top = `${currentY - followerRadius}px`;

      requestAnimationFrame(updateFollowerPosition);
    };

    container.addEventListener("mouseenter", (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      targetX = mouseX;
      targetY = mouseY;

      currentX = targetX;
      currentY = targetY;

      follower.style.left = `${currentX - followerRadius}px`;
      follower.style.top = `${currentY - followerRadius}px`;

      follower.style.transformOrigin = `${followerRadius}px ${followerRadius}px`;

      requestAnimationFrame(() => {
        follower.style.transform = "scale(1)";
        follower.style.opacity = "1";
      });
    });

    container.addEventListener("mouseleave", () => {
      requestAnimationFrame(() => {
        follower.style.transform = "scale(0)";
        follower.style.opacity = "0";
      });

      setTimeout(() => {
        currentX = -followerRadius;
        currentY = -followerRadius;
        targetX = currentX;
        targetY = currentY;
      }, 250); // matching the transition time
    });

    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      targetX = mouseX;
      targetY = mouseY;
    });

    updateFollowerPosition();
  }

  ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
  ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////

  // SWAP HERO VIDEO TO MOBILE / BACK

  document.addEventListener("DOMContentLoaded", (event) => {
    // Cache all video elements
    const allVideos = document.querySelectorAll(".background-video");

    // Debounce function to prevent frequent calls
    function debounce(func, wait) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }

    // Function to update video sources based on screen width
    function updateVideoSources() {
      allVideos.forEach((video) => {
        const currentSrc = video.querySelector("source").src;
        const screenWidth = window.innerWidth;

        let newSrc;
        if (screenWidth <= 479) {
          newSrc =
            "https://psychoactive-website-media.sfo3.cdn.digitaloceanspaces.com/About-Page/psychoactive%20texture%20video%20MOBILE.mp4";
        } else {
          newSrc =
            "https://psychoactive-website-media.sfo3.cdn.digitaloceanspaces.com/About-Page/psychoactive%20texture%20video.mp4";
        }

        if (currentSrc !== newSrc) {
          video.pause();
          video.querySelector("source").setAttribute("src", newSrc);
          video.load();
          video.play();
        }
      });
    }

    // Initial setup
    updateVideoSources();

    // Debounced event listener for window resize
    window.addEventListener("resize", debounce(updateVideoSources, 100));
  });
};
///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////

// ASCI ART ANIMATOR
// document.addEventListener("DOMContentLoaded", function () {
//   function loadSVG() {
//     const container = document.getElementById("asci-left");

//     // URL or path to the SVG file
//     const svgURL =
//       "https://cdn.prod.website-files.com/6761fc8483c673ae45ad8f4e/6784bf272a5d360fc3d33bb9_asci-art-left.svg";

//     fetch(svgURL)
//       .then((response) => response.text())
//       .then((svgText) => {
//         container.innerHTML = svgText; // Load SVG content into the div

//         // Wait for SVG to fully load and for DOM to update
//         setTimeout(() => {
//           const svgElement = document.querySelector(".asci-art");
//           if (svgElement) {
//             console.log(svgElement);
//             // Function to change the fill color to red
//             function changeToRed() {
//               svgElement.style.fill = "red";
//             }

//             // Function to change the fill color back to white
//             function changeToWhite() {
//               svgElement.style.fill = "#fff";
//             }

//             function randomFlicker() {
//               const flickers = getRandomInt(2, 6); // Random number of flickers (2 to 6)
//               const pause = getRandomInt(500, 3000); // Random pause (0.5 to 3 seconds)

//               let flickCount = 0;

//               function flick() {
//                 if (flickCount < flickers) {
//                   if (Math.random() > 0.5) {
//                     changeToRed();
//                   } else {
//                     changeToWhite();
//                   }
//                   flickCount++;
//                   setTimeout(flick, 5); // Quick switch every 100ms
//                 } else {
//                   setTimeout(() => {
//                     randomFlicker();
//                   }, pause); // Pause after flicker
//                 }
//               }

//               flick();
//             }

//             function getRandomInt(min, max) {
//               return Math.floor(Math.random() * (max - min + 1) + min);
//             }

//             // Start the flicker behavior
//             randomFlicker();
//           } else {
//             console.log("SVG element not found.");
//           }
//         }, 100); // Timeout to ensure DOM update
//       })
//       .catch((error) => console.error("Error loading SVG:", error));
//   }

//   // Call the function to load the SVG
//   loadSVG();
// });

///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////

// old version of text fade GSAP, taken from psychoactive work inner pages
// let typeSplit = new SplitType("[text-split]", {
//   // Split text into spans
//   types: "words, chars",
//   tagName: "span",
// });

// // Link timelines to scroll position
// function createScrollTrigger(triggerElement, timeline) {
//   // Reset tl when scroll out of view past bottom of screen
//   ScrollTrigger.create({
//     trigger: triggerElement,
//     start: "top bottom",
//     onLeaveBack: () => {
//       timeline.progress(0);
//       timeline.pause();
//     },
//   });
//   // Play tl when scrolled into view (60% from top of screen)
//   ScrollTrigger.create({
//     trigger: triggerElement,
//     start: "top 80%",
//     onEnter: () => timeline.play(),
//   });
// }

// $("[words-slide-up]").each(function (index) {
//   let tl = gsap.timeline({ paused: true });
//   tl.from($(this).find(".word"), {
//     opacity: 0,
//     yPercent: 100,
//     duration: 0.5,
//     ease: "back.out(2)",
//     stagger: { amount: 0.5 },
//   });
//   createScrollTrigger($(this), tl);
// });

// $("[words-rotate-in]").each(function (index) {
//   let tl = gsap.timeline({ paused: true });
//   tl.set($(this).find(".word"), { transformPerspective: 1000 });
//   tl.from($(this).find(".word"), {
//     rotationX: -90,
//     duration: 0.6,
//     ease: "power2.out",
//     stagger: { amount: 0.6 },
//   });
//   createScrollTrigger($(this), tl);
// });

// $("[words-slide-from-right]").each(function (index) {
//   let tl = gsap.timeline({ paused: true });
//   tl.from($(this).find(".word"), {
//     opacity: 0,
//     x: "1em",
//     duration: 0.6,
//     ease: "power2.out",
//     stagger: { amount: 0.2 },
//   });
//   createScrollTrigger($(this), tl);
// });

// $("[letters-slide-up]").each(function (index) {
//   let tl = gsap.timeline({ paused: true });
//   tl.from($(this).find(".char"), {
//     yPercent: 100,
//     duration: 0.2,
//     ease: "power1.out",
//     stagger: { amount: 0.6 },
//   });
//   createScrollTrigger($(this), tl);
// });

// $("[letters-slide-down]").each(function (index) {
//   let tl = gsap.timeline({ paused: true });
//   tl.from($(this).find(".char"), {
//     yPercent: -120,
//     duration: 0.3,
//     ease: "power1.out",
//     stagger: { amount: 0.7 },
//   });
//   createScrollTrigger($(this), tl);
// });

// $("[letters-fade-in]").each(function (index) {
//   let tl = gsap.timeline({ paused: true });
//   tl.from($(this).find(".char"), {
//     opacity: 0.2,
//     duration: 0.5,
//     ease: "power1.out",
//     stagger: { amount: 0.8 },
//   });
//   createScrollTrigger($(this), tl);
// });

// $("[letters-fade-in-random]").each(function (index) {
//   let tl = gsap.timeline({ paused: true });
//   tl.from($(this).find(".char"), {
//     opacity: 0,
//     duration: 0.05,
//     ease: "power1.out",
//     stagger: { amount: 0.4, from: "random" },
//   });
//   createScrollTrigger($(this), tl);
// });

// $("[scrub-each-word]").each(function (index) {
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: $(this),
//       start: "top 80%",
//       end: "top 30%",
//       scrub: true,
//     },
//   });
//   tl.from($(this).find(".word"), {
//     opacity: 0.2,
//     duration: 0.5,
//     ease: "power1.out",
//     stagger: { each: 0.8 },
//   });
// });

// // Avoid flash of unstyled content
// gsap.set("[text-split]", { opacity: 1 });

// more optimsied but less smooth version of mouse follower - in case we have performance issues with it
// export default aboutPageCode = () => {
//   // alert("we live on about page");
//   const container = document.getElementById("container");
//   const follower = document.getElementById("follower");

//   if (container && follower) {
//     container.style.position = "relative";
//     follower.style.position = "absolute";
//     follower.style.opacity = "0";

//     const followerRadius = follower.offsetWidth / 2;

//     // Variables for smooth movement (Lerp)
//     let targetX = 0;
//     let targetY = 0;
//     let currentX = 0;
//     let currentY = 0;
//     let isAnimating = false;
//     let lastMoveTime = 0;
//     const throttleInterval = 16; // ~60 FPS

//     const lerp = (start, end, t) => start + (end - start) * t;

//     const updateFollowerPosition = () => {
//       // Check if the follower is close enough to the target, and stop if so
//       if (
//         Math.abs(currentX - targetX) < 1 &&
//         Math.abs(currentY - targetY) < 1
//       ) {
//         isAnimating = false;
//         return;
//       }

//       // Smoothly interpolate current position towards target position
//       currentX = lerp(currentX, targetX, 0.1); // Adjust 0.1 for faster/slower smoothing
//       currentY = lerp(currentY, targetY, 0.1);

//       // Update the follower's position
//       follower.style.left = `${currentX}px`;
//       follower.style.top = `${currentY}px`;
//       follower.style.transform = "translate(-50%, -50%)";

//       // Continue the animation loop
//       if (isAnimating) {
//         requestAnimationFrame(updateFollowerPosition);
//       }
//     };

//     // Event listeners for mouseenter and mouseleave to show and hide the follower
//     container.addEventListener("mouseenter", () => {
//       follower.style.opacity = "1";
//     });

//     container.addEventListener("mouseleave", () => {
//       follower.style.opacity = "0";
//     });

//     // Throttled mousemove event listener
//     container.addEventListener("mousemove", (e) => {
//       const now = Date.now();
//       if (now - lastMoveTime < throttleInterval) return; // Throttle if less than the interval

//       lastMoveTime = now;

//       const rect = container.getBoundingClientRect();
//       const mouseX = e.clientX - rect.left;
//       const mouseY = e.clientY - rect.top;

//       // Clamp target values to keep the circle inside the container
//       targetX = Math.max(
//         followerRadius,
//         Math.min(mouseX, rect.width - followerRadius)
//       );
//       targetY = Math.max(
//         followerRadius,
//         Math.min(mouseY, rect.height - followerRadius)
//       );

//       // Start the animation loop if not already running
//       if (!isAnimating) {
//         isAnimating = true;
//         updateFollowerPosition();
//       }
//     });
//   }
// };
