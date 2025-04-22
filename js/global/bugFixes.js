function stopCmdClick() {
  document.addEventListener("click", function (e) {
    if (e.ctrlKey || e.metaKey) {
      document.querySelectorAll(".menu-transition-cover").forEach((element) => {
        element.setAttribute("style", "visibility:hidden !important");
      });
    }
  });
}

//if page has been visited - don't animate
function removeBlackCover() {
  var hasVisited = sessionStorage.getItem("washere");

  window.addEventListener("pageshow", function (event) {
    const isMobile = $(window).width() <= 1024;
    const cameFromBackButton = event.persisted; // Checks if page was restored from cache (back/forward navigation)

    // Shared visited logic
    function runVisitedFlow() {
      $(".menu-transition-cover").remove();
      visited(0);
    }

    // Check if visited, mobile, or back/forward navigation
    if (hasVisited || isMobile || cameFromBackButton) {
      runVisitedFlow();
    }
  });
}
export { stopCmdClick, removeBlackCover };
