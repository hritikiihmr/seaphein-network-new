(function () {
  "use strict";

  var hasHiddenPreloader = false;

  function hidePreloader() {
    var preloader;

    if (hasHiddenPreloader) {
      return;
    }

    preloader = document.getElementById("preloader");
    if (!preloader) {
      return;
    }

    hasHiddenPreloader = true;
    preloader.classList.add("is-hidden");
    window.setTimeout(function () {
      preloader.style.display = "none";
    }, 240);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hidePreloader, { once: true });
  } else {
    hidePreloader();
  }

  window.setTimeout(hidePreloader, 900);
  window.addEventListener("pageshow", hidePreloader);
}());
