(function () {
  "use strict";

  // Mobile nav toggle
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // TOC chapter accordion
  document.querySelectorAll(".toc-chapter-toggle").forEach(function (button) {
    button.addEventListener("click", function () {
      var chapter = button.closest(".toc-chapter-expandable");
      var isOpen = chapter.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  // Back to top button
  var backToTop = document.getElementById("backToTop");

  if (backToTop) {
    var toggleVisibility = function () {
      if (window.scrollY > 480) {
        backToTop.classList.add("is-visible");
      } else {
        backToTop.classList.remove("is-visible");
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
