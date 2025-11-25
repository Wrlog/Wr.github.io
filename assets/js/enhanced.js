// Enhanced JavaScript for modern interactivity
// Compiled from enhanced.ts

(function () {
  "use strict";

  const WebsiteEnhancer = (function () {
    function WebsiteEnhancer() {
      this.scrollPosition = { y: 0, isScrolling: false };
      this.lastScrollTop = 0;
      this.ticking = false;
      this.init();
    }

    WebsiteEnhancer.prototype.init = function () {
      if (document.readyState === "loading") {
        document.addEventListener(
          "DOMContentLoaded",
          function () {
            this.setup();
          }.bind(this),
        );
      } else {
        this.setup();
      }
    };

    WebsiteEnhancer.prototype.setup = function () {
      this.setupScrollAnimations();
      this.setupIntersectionObserver();
      this.setupSmoothScrolling();
      this.setupSkillTagsAnimation();
      this.setupCardHoverEffects();
      this.setupParallaxEffect();
    };

    WebsiteEnhancer.prototype.setupScrollAnimations = function () {
      const _this = this;
      window.addEventListener(
        "scroll",
        function () {
          _this.scrollPosition.y = window.scrollY;
          if (!_this.ticking) {
            window.requestAnimationFrame(function () {
              _this.handleScroll();
              _this.ticking = false;
            });
            _this.ticking = true;
          }
        },
        { passive: true },
      );
    };

    WebsiteEnhancer.prototype.handleScroll = function () {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const header = document.querySelector(".site-header");
      if (header) {
        if (scrollTop > 100) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
      const fadeElements = document.querySelectorAll(".fade-in-on-scroll");
      fadeElements.forEach(function (el) {
        const element = el;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("visible");
        }
      });
    };

    WebsiteEnhancer.prototype.setupIntersectionObserver = function () {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      const animatedElements = document.querySelectorAll(
        ".skill-category, .project-card, .repo-list-item, .section-title",
      );
      animatedElements.forEach(function (el) {
        return observer.observe(el);
      });
    };

    WebsiteEnhancer.prototype.setupSmoothScrolling = function () {
      document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (e) {
          const href = anchor.getAttribute("href");
          if (href && href !== "#") {
            const target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              target.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }
        });
      });
    };

    WebsiteEnhancer.prototype.setupSkillTagsAnimation = function () {
      const skillTags = document.querySelectorAll(".skill-tag");
      skillTags.forEach(function (tag, index) {
        const element = tag;
        element.style.transitionDelay = index * 0.05 + "s";
        element.addEventListener("mouseenter", function () {
          element.style.transform = "translateY(-5px) scale(1.05)";
        });
        element.addEventListener("mouseleave", function () {
          element.style.transform = "translateY(0) scale(1)";
        });
      });
    };

    WebsiteEnhancer.prototype.setupCardHoverEffects = function () {
      const cards = document.querySelectorAll(
        ".modern-card, .project-card, .repo-list-item",
      );
      cards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
          this.style.transform = "translateY(-8px)";
          this.style.boxShadow = "0 12px 40px rgba(102, 126, 234, 0.2)";
        });
        card.addEventListener("mouseleave", function () {
          this.style.transform = "translateY(0)";
          this.style.boxShadow = "";
        });
      });
    };

    WebsiteEnhancer.prototype.setupParallaxEffect = function () {
      const hero = document.querySelector(".hero-section");
      if (!hero) return;
      window.addEventListener(
        "scroll",
        function () {
          const scrolled = window.pageYOffset;
          const heroElement = hero;
          if (scrolled < heroElement.offsetHeight) {
            heroElement.style.transform =
              "translateY(" + scrolled * 0.5 + "px)";
            heroElement.style.opacity = (
              1 -
              scrolled / heroElement.offsetHeight
            ).toString();
          }
        },
        { passive: true },
      );
    };

    return WebsiteEnhancer;
  })();

  // Initialize the enhancer
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      new WebsiteEnhancer();
    });
  } else {
    new WebsiteEnhancer();
  }

  // Debug: Log that script loaded
  console.log("Enhanced.js loaded successfully");
})();
