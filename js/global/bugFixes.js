function stopCmdClick() {
  document.addEventListener("click", function (e) {
    if (e.ctrlKey || e.metaKey) {
      document.querySelectorAll(".menu-transition-cover").forEach((element) => {
        element.setAttribute("style", "visibility:hidden !important");
      });
    } 
  });
}
export { stopCmdClick };