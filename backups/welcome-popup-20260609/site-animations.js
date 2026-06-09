(function () {
  "use strict";

  var introKey = "seapheinIntroSeen";
  var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var shouldShowIntro = false;

  try {
    shouldShowIntro = !reducedMotion && sessionStorage.getItem(introKey) !== "true";
    if (shouldShowIntro) {
      document.documentElement.classList.add("seaphein-intro-lock");
    }
  } catch (error) {
    shouldShowIntro = false;
  }

  function markIntroSeen() {
    try {
      sessionStorage.setItem(introKey, "true");
    } catch (error) {
      return false;
    }
    return true;
  }

  function setReadyState() {
    document.documentElement.classList.remove("seaphein-intro-lock");
    if (document.body) {
      document.body.classList.add("seaphein-page-ready");
    }
  }

  function removeIntro(intro, onRemoved) {
    if (!intro) {
      setReadyState();
      if (typeof onRemoved === "function") {
        onRemoved();
      }
      return;
    }

    intro.classList.add("is-removing");
    window.setTimeout(function () {
      if (intro.parentNode) {
        intro.parentNode.removeChild(intro);
      }
      setReadyState();
      if (typeof onRemoved === "function") {
        onRemoved();
      }
    }, 300);
  }

  function showWelcomeModal() {
    if (document.querySelector(".seaphein-welcome")) {
      return;
    }

    var modal = document.createElement("div");
    modal.className = "seaphein-welcome";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "seaphein-welcome-title");
    modal.innerHTML = [
      '<div class="seaphein-welcome__dialog">',
      '<button class="seaphein-welcome__close" type="button" aria-label="Close welcome message">&times;</button>',
      '<div class="seaphein-welcome__seal"><img src="images/seapheinlogo.jpeg" alt="SEAPHEIN logo"></div>',
      '<span class="seaphein-welcome__label">The official website is now live</span>',
      '<h2 id="seaphein-welcome-title">Welcome to SEAPHEIN</h2>',
      '<p>Explore a shared platform for public health education, regional collaboration and knowledge exchange across South-East Asia.</p>',
      '<div class="seaphein-welcome__flags" aria-hidden="true">',
      '<img src="images/newflag-01.png" alt="">',
      '<img src="images/newflag-02.png" alt="">',
      '<img src="images/newflag-03.png" alt="">',
      '<img src="images/newflag-04.png" alt="">',
      '<img src="images/newflag-05.png" alt="">',
      '<img src="images/newflag-06.png" alt="">',
      '<img src="images/newflag-07.png" alt="">',
      '</div>',
      '<span class="seaphein-welcome__hint">Click outside to continue</span>',
      '</div>'
    ].join("");

    document.body.appendChild(modal);
    document.documentElement.classList.add("seaphein-welcome-lock");

    var dialog = modal.querySelector(".seaphein-welcome__dialog");
    var closeButton = modal.querySelector(".seaphein-welcome__close");
    var isClosing = false;

    function closeWelcome() {
      if (isClosing) {
        return;
      }

      isClosing = true;
      modal.classList.add("is-closing");
      document.removeEventListener("keydown", handleKeydown);
      window.setTimeout(function () {
        document.documentElement.classList.remove("seaphein-welcome-lock");
        if (modal.parentNode) {
          modal.parentNode.removeChild(modal);
        }
      }, 280);
    }

    function handleKeydown(event) {
      if (event.key === "Escape") {
        closeWelcome();
      }
    }

    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeWelcome();
      }
    });
    if (closeButton) {
      closeButton.addEventListener("click", closeWelcome);
      window.setTimeout(function () {
        closeButton.focus({ preventScroll: true });
      }, 350);
    }
    if (dialog) {
      dialog.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    }
    document.addEventListener("keydown", handleKeydown);

    window.requestAnimationFrame(function () {
      modal.classList.add("is-visible");
    });
  }

  function createIntro() {
    var legacyPreloader = document.getElementById("preloader");
    var intro = document.createElement("div");
    intro.className = "seaphein-intro";
    intro.setAttribute("role", "dialog");
    intro.setAttribute("aria-label", "SEAPHEIN website entry");
    intro.innerHTML = [
      '<div class="seaphein-intro__panel seaphein-intro__panel--left"></div>',
      '<div class="seaphein-intro__panel seaphein-intro__panel--right"></div>',
      '<div class="seaphein-intro__content">',
      '<div class="seaphein-intro__seal" aria-hidden="true">',
      '<img src="images/seapheinlogo.jpeg" alt="">',
      '</div>',
      '<span class="seaphein-intro__launch-label">Official Website Launch</span>',
      '<p class="seaphein-intro__eyebrow">South-East Asia Public Health Education Institutions Network</p>',
      '<div class="seaphein-intro__brand">SEAPHEIN</div>',
      '<p class="seaphein-intro__message">A new digital home for public health education, collaboration and regional knowledge sharing.</p>',
      '<div class="seaphein-intro__countries" aria-hidden="true">',
      '<span>Bangladesh</span><span>Bhutan</span><span>India</span><span>Myanmar</span><span>Nepal</span><span>Sri Lanka</span><span>Thailand</span>',
      '</div>',
      '<button class="seaphein-intro__button" type="button"><span>Enter Website</span></button>',
      '</div>',
      '<div class="seaphein-intro__launch-stage" aria-hidden="true">',
      '<div class="seaphein-intro__launch-logo"><img src="images/seapheinlogo.jpeg" alt=""></div>',
      '<span class="seaphein-intro__launch-kicker">Welcome to the official SEAPHEIN website</span>',
      '<h2>Connecting Public Health Education Across South-East Asia</h2>',
      '<div class="seaphein-intro__flag-line">',
      '<span><img src="images/newflag-01.png" alt=""></span>',
      '<span><img src="images/newflag-02.png" alt=""></span>',
      '<span><img src="images/newflag-03.png" alt=""></span>',
      '<span><img src="images/newflag-04.png" alt=""></span>',
      '<span><img src="images/newflag-05.png" alt=""></span>',
      '<span><img src="images/newflag-06.png" alt=""></span>',
      '<span><img src="images/newflag-07.png" alt=""></span>',
      '</div>',
      '<div class="seaphein-intro__launch-progress"><span></span></div>',
      '</div>'
    ].join("");
    if (legacyPreloader) {
      legacyPreloader.style.display = "none";
    }
    document.body.prepend(intro);

    var enterButton = intro.querySelector(".seaphein-intro__button");
    var hasStarted = false;
    var hasShownWelcome = false;

    function revealWelcome() {
      if (hasShownWelcome) {
        return;
      }
      hasShownWelcome = true;
      showWelcomeModal();
    }

    function openCurtain() {
      if (hasStarted) {
        return;
      }

      hasStarted = true;
      markIntroSeen();
      intro.classList.add("is-launching");

      window.setTimeout(function () {
        intro.classList.add("is-opening");
      }, 2800);

      window.setTimeout(function () {
        removeIntro(intro, revealWelcome);
      }, 5200);

      window.setTimeout(function () {
        if (document.querySelector(".seaphein-intro")) {
          removeIntro(intro, revealWelcome);
        }
      }, 6200);
    }

    if (enterButton) {
      enterButton.addEventListener("click", openCurtain);
    }
  }

  function addRevealClass(elements, options) {
    var settings = options || {};
    Array.prototype.forEach.call(elements, function (element, index) {
      if (!element || element.classList.contains("seaphein-reveal")) {
        return;
      }

      element.classList.add("seaphein-reveal");
      if (settings.scale) {
        element.classList.add("seaphein-scale");
      }
      if (settings.stagger) {
        element.style.transitionDelay = Math.min(index * settings.stagger, 360) + "ms";
      }
    });
  }

  function initRevealAnimations() {
    var sectionSelector = [
      ".main-div",
      "#seaphein-secretariat",
      "#executive-committee",
      "section.ws-section-spacing.events",
      ".padding-20.patner-section",
      "footer.same-section-spacing.footer-bg"
    ].join(",");

    var cardSelector = [
      ".home-leadership-grid .row.single-about",
      ".executive-members-grid .patnet-logo",
      ".evnt-slider .evetn-card",
      "footer .footer-about",
      "footer .usefull-links",
      "footer .contact-us"
    ].join(",");

    addRevealClass(document.querySelectorAll(sectionSelector));
    addRevealClass(document.querySelectorAll(cardSelector), { scale: true, stagger: 80 });

    var revealItems = document.querySelectorAll(".seaphein-reveal");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(revealItems, function (element) {
        element.classList.add("is-visible");
        element.style.transitionDelay = "";
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12
    });

    Array.prototype.forEach.call(revealItems, function (element) {
      observer.observe(element);
    });
  }

  function init() {
    initRevealAnimations();

    if (shouldShowIntro) {
      createIntro();
      return;
    }

    setReadyState();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.addEventListener("pageshow", function () {
    if (!document.querySelector(".seaphein-intro")) {
      setReadyState();
    }
  });
}());
