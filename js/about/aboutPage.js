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
      opacity: 0.2,
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

  // MOUSE FOLLOWER CTA
  const container = document.getElementById("container");
  const follower = document.getElementById("follower");

  if (container && follower) {
    container.style.position = "relative";
    follower.style.position = "absolute";
    follower.style.opacity = "0";

    const followerRadius = follower.offsetWidth / 2;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const lerp = (start, end, t) => start + (end - start) * t;

    const updateFollowerPosition = () => {
      // Smoothly interpolate current position towards target position
      currentX = lerp(currentX, targetX, 0.1); // Adjust 0.1 for faster/slower smoothing
      currentY = lerp(currentY, targetY, 0.1);

      follower.style.left = `${currentX}px`;
      follower.style.top = `${currentY}px`;
      follower.style.transform = "translate(-50%, -50%)";

      requestAnimationFrame(updateFollowerPosition);
    };

    container.addEventListener("mouseenter", () => {
      follower.style.opacity = "1";
    });

    container.addEventListener("mouseleave", () => {
      follower.style.opacity = "0";
    });

    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Clamp target values to keep the circle inside the container
      targetX = Math.max(
        followerRadius,
        Math.min(mouseX, rect.width - followerRadius)
      );
      targetY = Math.max(
        followerRadius,
        Math.min(mouseY, rect.height - followerRadius)
      );
    });

    updateFollowerPosition(); // Start the animation loop
  }
};

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
