export default copyEmail = () => {
  function copyToClipboard(copyText) {
    // copies text to keyboard by creating then deleting selectable text area
    const el = document.createElement("textarea");
    el.value = copyText;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    // change text of header
    $(".footer-title-roller-down").each(function () {
      $(this).html("E-mail copied to clipboard");
    });

    // reset text of header after 1000 ms
    setTimeout(function () {
      $(".footer-title-roller-down").each(function () {
        $(this).html("Copy email");
      });
    }, 1400);
  }

  var remoteHelloBlock = document.getElementById("email-block-hello");
  remoteHelloBlock.addEventListener("click", function () {
    copyToClipboard("hello@psychoactive.co.nz");
  });

  var careersBlock = document.getElementById("email-block-careers");
  careersBlock.addEventListener("click", function () {
    copyToClipboard("careers@psychoactive.co.nz");
  });
};
