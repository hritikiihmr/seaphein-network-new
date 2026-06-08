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

  function removeIntro(intro) {
    if (!intro) {
      setReadyState();
      return;
    }

    intro.classList.add("is-removing");
    window.setTimeout(function () {
      if (intro.parentNode) {
        intro.parentNode.removeChild(intro);
      }
      setReadyState();
    }, 300);
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
      '<p class="seaphein-intro__eyebrow">South-East Asia Public Health Education Institutions Network</p>',
      '<div class="seaphein-intro__brand">SEAPHEIN</div>',
      '<div class="seaphein-intro__countries" aria-hidden="true">',
      '<span>Bangladesh</span><span>Bhutan</span><span>India</span><span>Myanmar</span><span>Nepal</span><span>Sri Lanka</span><span>Thailand</span>',
      '</div>',
      '<button class="seaphein-intro__button" type="button"><span>Enter Website</span></button>',
      '</div>'
    ].join("");
    if (legacyPreloader) {
      legacyPreloader.style.display = "none";
    }
    document.body.prepend(intro);

    var enterButton = intro.querySelector(".seaphein-intro__button");
    var hasStarted = false;

    function openCurtain() {
      if (hasStarted) {
        return;
      }

      hasStarted = true;
      markIntroSeen();
      intro.classList.add("is-opening");

      window.setTimeout(function () {
        removeIntro(intro);
      }, 2450);

      window.setTimeout(function () {
        if (document.querySelector(".seaphein-intro")) {
          removeIntro(intro);
        }
      }, 3400);
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
