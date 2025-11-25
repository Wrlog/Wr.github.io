// Enhanced TypeScript for About Page - Interactive Features
const AboutPageEnhancer = /** @class */ (function () {
  function AboutPageEnhancer() {
    this.init();
  }
  AboutPageEnhancer.prototype.init = function () {
    const _this = this;
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        return _this.setup();
      });
    } else {
      this.setup();
    }
  };
  AboutPageEnhancer.prototype.setup = function () {
    try {
      // Only run on about page
      if (!document.querySelector(".about-section")) {
        console.log("AboutPageEnhancer: .about-section not found, skipping");
        return;
      }
      console.log("AboutPageEnhancer: Initializing...");
      // Verify CSS is loaded
      const testElement = document.querySelector(".about-section");
      if (testElement) {
        const styles = window.getComputedStyle(testElement);
        console.log("AboutPageEnhancer: CSS loaded - padding:", styles.padding);
      }
      this.skillCategories = document.querySelectorAll(
        ".skill-item, .markdown-body h3",
      );
      this.timelineItems = document.querySelectorAll(
        ".timeline-item, .markdown-body h3 + p",
      );
      this.contactSection = document.querySelector(
        ".contact-info, .markdown-body h2:last-of-type",
      );
      this.sections = document.querySelectorAll(
        ".about-section .markdown-body > h2",
      );
      console.log("AboutPageEnhancer: Found", this.sections.length, "sections");
      this.setupSkillTagsAnimation();
      this.setupTimelineAnimation();
      this.setupSectionReveal();
      this.setupContactFormats();
      this.setupProgressBars();
      this.setupInteractiveCards();
      this.setupSmoothScrollToSection();
      this.setupParallaxEffects();
      console.log("AboutPageEnhancer: Initialization complete");
    } catch (error) {
      console.error("AboutPageEnhancer: Error during setup", error);
    }
  };
  // Animate skill tags with staggered effect
  AboutPageEnhancer.prototype.setupSkillTagsAnimation = function () {
    const skillLists = document.querySelectorAll(
      ".markdown-body ul li, .skill-item li",
    );
    skillLists.forEach(function (item, index) {
      const element = item;
      element.style.opacity = "0";
      element.style.transform = "translateX(-20px)";
      element.style.transition = "all 0.4s ease ".concat(index * 0.05, "s");
      // Use Intersection Observer for scroll-triggered animation
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              element.style.opacity = "1";
              element.style.transform = "translateX(0)";
              observer.unobserve(element);
            }
          });
        },
        { threshold: 0.1 },
      );
      observer.observe(element);
    });
  };
  // Animate timeline items sequentially
  AboutPageEnhancer.prototype.setupTimelineAnimation = function () {
    const timelineItems = document.querySelectorAll(
      ".timeline-item, .markdown-body h3",
    );
    timelineItems.forEach(function (item, index) {
      const element = item;
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      element.style.transition = "all 0.5s ease ".concat(index * 0.1, "s");
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              element.style.opacity = "1";
              element.style.transform = "translateY(0)";
              observer.unobserve(element);
            }
          });
        },
        { threshold: 0.2 },
      );
      observer.observe(element);
    });
  };
  // Reveal sections with fade-in effect
  AboutPageEnhancer.prototype.setupSectionReveal = function () {
    const _this = this;
    if (!this.sections || this.sections.length === 0) {
      return;
    }
    this.sections.forEach(function (section) {
      try {
        const element = section;
        if (!element) {
          return;
        }
        const sectionContent_1 = _this.getNextSiblingUntil(element, "h2");
        if (sectionContent_1 && sectionContent_1.style) {
          sectionContent_1.style.opacity = "0";
          sectionContent_1.style.transform = "translateY(20px)";
          sectionContent_1.style.transition = "all 0.6s ease";
          var observer_1 = new IntersectionObserver(
            function (entries) {
              entries.forEach(function (entry) {
                if (entry.isIntersecting && sectionContent_1.style) {
                  sectionContent_1.style.opacity = "1";
                  sectionContent_1.style.transform = "translateY(0)";
                  observer_1.unobserve(sectionContent_1);
                }
              });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
          );
          observer_1.observe(element);
        }
      } catch (error) {
        console.warn("AboutPageEnhancer: Error in setupSectionReveal", error);
      }
    });
  };
  // Helper to get all siblings until a specific selector
  AboutPageEnhancer.prototype.getNextSiblingUntil = function (
    element,
    selector,
  ) {
    if (!element || !element.nextElementSibling) {
      return null;
    }
    let next = element.nextElementSibling;
    const siblings = [];
    while (next) {
      if (next.matches && next.matches(selector)) {
        break;
      }
      siblings.push(next);
      if (!next.nextElementSibling) {
        break;
      }
      next = next.nextElementSibling;
    }
    return siblings.length > 0 ? siblings[0] : null;
  };
  // Format contact information with click-to-copy functionality
  AboutPageEnhancer.prototype.setupContactFormats = function () {
    const _this = this;
    const contactLinks = document.querySelectorAll(
      '.about-section a[href^="mailto:"], .about-section a[href^="tel:"]',
    );
    contactLinks.forEach(function (link) {
      const element = link;
      element.style.cursor = "pointer";
      element.title = "Click to copy";
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        if (href) {
          const text = href.replace(/^(mailto:|tel:)/, "");
          _this.copyToClipboard(text);
          _this.showCopyFeedback(element);
        }
      });
    });
  };
  // Copy text to clipboard
  AboutPageEnhancer.prototype.copyToClipboard = function (text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        console.log("Copied to clipboard:", text);
      });
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
  };
  // Show visual feedback when copying
  AboutPageEnhancer.prototype.showCopyFeedback = function (element) {
    if (!element) {
      return;
    }
    const originalText = element.textContent || "";
    element.textContent = "Copied!";
    element.style.color = "#764ba2";
    setTimeout(function () {
      if (element) {
        element.textContent = originalText;
        element.style.color = "";
      }
    }, 2000);
  };
  // Add progress bars for skills (if needed)
  AboutPageEnhancer.prototype.setupProgressBars = function () {
    // This can be extended to show skill proficiency levels
    const skillItems = document.querySelectorAll(".skill-item");
    skillItems.forEach(function (item) {
      const element = item;
      element.addEventListener("mouseenter", function () {
        element.style.transform = "scale(1.02)";
      });
      element.addEventListener("mouseleave", function () {
        element.style.transform = "scale(1)";
      });
    });
  };
  // Enhanced interactive cards
  AboutPageEnhancer.prototype.setupInteractiveCards = function () {
    const cards = document.querySelectorAll(".skill-item, .contact-info");
    cards.forEach(function (card) {
      const element = card;
      element.addEventListener("mousemove", function (e) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        element.style.transform = "perspective(1000px) rotateX("
          .concat(rotateX, "deg) rotateY(")
          .concat(rotateY, "deg) scale(1.02)");
      });
      element.addEventListener("mouseleave", function () {
        element.style.transform =
          "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
      });
    });
  };
  // Smooth scroll to sections
  AboutPageEnhancer.prototype.setupSmoothScrollToSection = function () {
    const sectionLinks = document.querySelectorAll('a[href^="#"]');
    sectionLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        const href = link.getAttribute("href");
        if (href && href !== "#") {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          }
        }
      });
    });
  };
  // Subtle parallax effects for background elements
  AboutPageEnhancer.prototype.setupParallaxEffects = function () {
    const parallaxElements = document.querySelectorAll(
      ".about-section::before, .about-section::after",
    );
    window.addEventListener(
      "scroll",
      function () {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        // Apply parallax to background gradients
        const section = document.querySelector(".about-section");
        if (section) {
          section.style.backgroundPositionY = "".concat(rate, "px");
        }
      },
      { passive: true },
    );
  };
  // Add typing effect for name/title (optional)
  AboutPageEnhancer.prototype.addTypingEffect = function (
    element,
    text,
    speed,
  ) {
    if (speed === void 0) {
      speed = 100;
    }
    let i = 0;
    element.textContent = "";
    const type = function () {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    };
    type();
  };
  // Add counter animation for numbers
  AboutPageEnhancer.prototype.animateCounter = function (
    element,
    target,
    duration,
  ) {
    if (duration === void 0) {
      duration = 2000;
    }
    let start = 0;
    const increment = target / (duration / 16);
    const updateCounter = function () {
      start += increment;
      if (start < target) {
        element.textContent = Math.floor(start).toString();
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target.toString();
      }
    };
    updateCounter();
  };
  return AboutPageEnhancer;
})();
// Initialize when DOM is ready
try {
  if (document.querySelector(".about-section")) {
    new AboutPageEnhancer();
  }
} catch (error) {
  console.error("AboutPageEnhancer: Failed to initialize", error);
}
