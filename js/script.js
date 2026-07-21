(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var navToggle = document.getElementById("nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
      navToggle.querySelector(".material-symbols-outlined").textContent = isOpen ? "menu" : "close";
      mobileNav.style.maxHeight = isOpen ? "0px" : mobileNav.scrollHeight + "px";
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.querySelector(".material-symbols-outlined").textContent = "menu";
        mobileNav.style.maxHeight = "0px";
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
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  }

  // Sticky nav shadow
  var nav = document.getElementById("top-nav");
  function onScrollNav() {
    if (window.scrollY > 40) {
      nav.classList.add("shadow-md");
    } else {
      nav.classList.remove("shadow-md");
    }
  }
  onScrollNav();

  // Hero parallax + squeegee wipe (disabled if reduced motion is requested)
  var heroBg = document.querySelector(".parallax-bg");
  var dirtyLayer = document.getElementById("dirty-layer");
  var squeegeeLine = document.getElementById("squeegee-line");

  function onScrollHero() {
    var scrollPos = window.pageYOffset;
    var windowHeight = window.innerHeight;

    if (heroBg) {
      heroBg.style.transform = "translateY(" + (scrollPos * 0.35).toFixed(1) + "px) scale(1.1)";
    }

    if (dirtyLayer && squeegeeLine && scrollPos <= windowHeight) {
      var progress = (scrollPos / windowHeight) * 100;
      dirtyLayer.style.clipPath = "inset(" + progress + "% 0 0 0)";
      squeegeeLine.style.transform = "translateY(" + scrollPos + "px)";
      squeegeeLine.style.opacity = progress > 90 ? (100 - progress) / 10 : 1;
    }
  }

  function onScroll() {
    onScrollNav();
    if (!reduceMotion) window.requestAnimationFrame(onScrollHero);
  }

  if (reduceMotion && dirtyLayer) {
    dirtyLayer.style.clipPath = "inset(100% 0 0 0)"; // show clean image immediately
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // Estimate form: lightweight client-side handling
  var form = document.getElementById("estimate-form");
  var formNote = document.getElementById("form-note");
  if (form) {
    form.addEventListener("submit", function (e) {
      if (form.action.indexOf("YOUR_FORM_ID") !== -1) {
        e.preventDefault();
        if (formNote) {
          formNote.textContent = "Form isn't connected yet — call (708) 855-2336 or email donandjohnglass@gmail.com in the meantime.";
        }
      }
    });
  }
})();
