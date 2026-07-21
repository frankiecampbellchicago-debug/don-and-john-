(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header state
  var header = document.getElementById("site-header");
  function onScrollHeader() {
    if (window.scrollY > 12) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  // Mobile nav toggle
  var navToggle = document.getElementById("nav-toggle");
  var mainNav = document.getElementById("main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  }

  // Parallax backgrounds (CSS transform, GPU-friendly, disabled on touch/small screens/reduced motion)
  var parallaxLayers = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
  var isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  var enableParallax = parallaxLayers.length && !reduceMotion && !isTouch && window.innerWidth > 768;

  if (enableParallax) {
    var ticking = false;

    function updateParallax() {
      var viewportH = window.innerHeight;
      parallaxLayers.forEach(function (layer) {
        var section = layer.closest(".parallax-section");
        var rect = section.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewportH) return; // offscreen, skip
        var progress = (rect.top) / viewportH; // -1..1 roughly as it passes through viewport
        var offset = progress * 60; // px of parallax travel
        layer.style.transform = "translate3d(0, " + offset.toFixed(1) + "px, 0)";
      });
      ticking = false;
    }

    function onScrollParallax() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    updateParallax();
    window.addEventListener("scroll", onScrollParallax, { passive: true });
    window.addEventListener("resize", onScrollParallax);
  }

  // Estimate form: lightweight client-side handling
  var form = document.getElementById("estimate-form");
  var formNote = document.getElementById("form-note");
  if (form) {
    form.addEventListener("submit", function (e) {
      if (form.action.indexOf("YOUR_FORM_ID") !== -1) {
        // Placeholder endpoint not yet configured — prevent a failed submit.
        e.preventDefault();
        if (formNote) {
          formNote.textContent = "Form isn't connected yet — call (708) 855-2336 or email donandjohnglass@gmail.com in the meantime.";
        }
      }
    });
  }
})();
