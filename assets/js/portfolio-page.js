// Enhanced TypeScript for Portfolio Page - Interactive Features
const PortfolioPageEnhancer = /** @class */ (function () {
  function PortfolioPageEnhancer() {
    this.currentFilter = "all";
    this.init();
  }

  PortfolioPageEnhancer.prototype.init = function () {
    const _this = this;
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        return _this.setup();
      });
    } else {
      this.setup();
    }
  };

  PortfolioPageEnhancer.prototype.setup = function () {
    // Only run on portfolio page
    if (!document.querySelector(".portfolio-section")) {
      console.log(
        "PortfolioPageEnhancer: .portfolio-section not found, skipping",
      );
      return;
    }
    console.log("PortfolioPageEnhancer: Initializing...");
    this.projectCards = document.querySelectorAll(
      ".project-card, .markdown-body h3",
    );
    this.techTags = document.querySelectorAll(
      ".tech-tag, .markdown-body ul li",
    );

    // Initialize all features
    this.setupProjectCards();
    this.setupTechTags();
    this.setupFiltering(); // This is the fixed version
    this.setupProjectAnimations();
    this.setupPublicationLinks();
    this.setupAwardAnimations();
    this.setupImageLazyLoading();
    this.setupShareButtons();
  };

  // --- FIXED FILTERING LOGIC START ---

  // Create filter button container
  PortfolioPageEnhancer.prototype.createFilterContainer = function () {
    const _this = this;
    const existingFilter = document.querySelector(".portfolio-filters");
    if (existingFilter) return null;

    const container = document.createElement("div");
    container.className = "portfolio-filters";

    // Note: Styles are now handled in the CSS string at the bottom of the file

    const filters = ["All", "Research", "Publications", "Awards"];

    filters.forEach(function (filter) {
      const button = document.createElement("button");
      button.textContent = filter;
      button.className = "filter-btn";

      // Set 'All' as active initially
      if (filter.toLowerCase() === "all") {
        button.classList.add("active");
      }

      button.addEventListener("click", function () {
        _this.filterProjects(filter.toLowerCase());
      });

      container.appendChild(button);
    });

    return container;
  };

  // Filter projects by category/tag
  PortfolioPageEnhancer.prototype.setupFiltering = function () {
    // Create filter buttons
    const filterContainer = this.createFilterContainer();
    if (filterContainer) {
      const parent = document.querySelector(
        ".portfolio-section .markdown-body",
      );
      // Insert at the very top of the markdown body, regardless of what tags are there
      if (parent) {
        parent.insertBefore(filterContainer, parent.firstChild);
      }
    }
  };

  // Filter projects based on selection
  PortfolioPageEnhancer.prototype.filterProjects = function (filter) {
    this.currentFilter = filter;

    // 1. Update Button Visuals (using classes instead of inline styles)
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(function (btn) {
      if (btn.textContent.toLowerCase() === filter) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // 2. Filter Cards
    this.projectCards.forEach(function (card) {
      const element = card;
      const cardText = (element.textContent || "").toLowerCase();

      const isMatch = filter === "all" || cardText.indexOf(filter) !== -1;

      if (isMatch) {
        element.style.display = ""; // Reset display to default (block/flex)
        // Small timeout allows display change to register before opacity transition
        setTimeout(function () {
          element.style.opacity = "1";
          element.style.transform = "translateY(0) scale(1)";
        }, 10);
      } else {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px) scale(0.95)";
        setTimeout(function () {
          // Only hide if it's still supposed to be hidden (prevents rapid clicking bugs)
          if (element.style.opacity === "0") {
            element.style.display = "none";
          }
        }, 300);
      }
    });
  };
  // --- FIXED FILTERING LOGIC END ---

  // Enhanced project card interactions
  PortfolioPageEnhancer.prototype.setupProjectCards = function () {
    this.projectCards.forEach(function (card, index) {
      const element = card;
      // Staggered entrance animation
      element.style.opacity = "0";
      element.style.transform = "translateY(50px)";
      element.style.transition = "all 0.6s ease ".concat(index * 0.1, "s");
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
        { threshold: 0.1 },
      );
      observer.observe(element);
      // 3D tilt effect on hover
      element.addEventListener("mousemove", function (e) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
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

  // Interactive tech tags with ripple effect
  PortfolioPageEnhancer.prototype.setupTechTags = function () {
    const _this = this;
    this.techTags.forEach(function (tag) {
      const element = tag;
      element.addEventListener("click", function (e) {
        _this.createRippleEffect(e, element);
        _this.highlightRelatedProjects(element.textContent || "");
      });
      // Pulse animation on hover
      element.addEventListener("mouseenter", function () {
        element.style.animation = "pulse 0.6s ease";
      });
    });
  };

  // Create ripple effect on click
  PortfolioPageEnhancer.prototype.createRippleEffect = function (
    event,
    element,
  ) {
    const ripple = document.createElement("span");
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    ripple.style.width = ripple.style.height = "".concat(size, "px");
    ripple.style.left = "".concat(x, "px");
    ripple.style.top = "".concat(y, "px");
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(102, 126, 234, 0.3)";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s ease-out";
    ripple.style.pointerEvents = "none";
    element.style.position = "relative";
    element.style.overflow = "hidden";
    element.appendChild(ripple);
    setTimeout(function () {
      return ripple.remove();
    }, 600);
  };

  // Highlight projects related to clicked tag
  PortfolioPageEnhancer.prototype.highlightRelatedProjects = function (
    tagText,
  ) {
    this.projectCards.forEach(function (card) {
      const element = card;
      const cardText = element.textContent || "";
      if (cardText.toLowerCase().indexOf(tagText.toLowerCase()) !== -1) {
        element.style.boxShadow = "0 0 30px rgba(102, 126, 234, 0.5)";
        element.style.transform = "scale(1.03)";
        setTimeout(function () {
          element.style.boxShadow = "";
          element.style.transform = "";
        }, 2000);
      }
    });
  };

  // Animate project cards on scroll
  PortfolioPageEnhancer.prototype.setupProjectAnimations = function () {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, index) {
          if (entry.isIntersecting) {
            const element_1 = entry.target;
            setTimeout(function () {
              element_1.style.opacity = "1";
              element_1.style.transform = "translateY(0)";
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );
    this.projectCards.forEach(function (card) {
      return observer.observe(card);
    });
  };

  // Enhanced publication links with preview
  PortfolioPageEnhancer.prototype.setupPublicationLinks = function () {
    const pubLinks = document.querySelectorAll(
      '.publication-item a, .markdown-body a[href*="doi"], .markdown-body a[href*="journal"]',
    );
    pubLinks.forEach(function (link) {
      const element = link;
      element.addEventListener("mouseenter", function () {
        const tooltip = document.createElement("div");
        tooltip.className = "publication-tooltip";
        tooltip.textContent = "Click to view publication";
        tooltip.style.cssText =
          "\n                    position: absolute;\n                    background: #667eea;\n                    color: white;\n                    padding: 8px 12px;\n                    border-radius: 6px;\n                    font-size: 0.85em;\n                    pointer-events: none;\n                    z-index: 1000;\n                    transform: translateY(-100%);\n                    margin-top: -10px;\n                ";
        element.style.position = "relative";
        element.appendChild(tooltip);
      });
      element.addEventListener("mouseleave", function () {
        const tooltip = element.querySelector(".publication-tooltip");
        if (tooltip) {
          tooltip.remove();
        }
      });
    });
  };

  // Animate awards with celebration effect
  PortfolioPageEnhancer.prototype.setupAwardAnimations = function () {
    const _this = this;
    const allListItems = document.querySelectorAll(".markdown-body ul li");
    const awards = [];
    allListItems.forEach(function (li) {
      if (li.textContent && li.textContent.indexOf("Award") !== -1) {
        awards.push(li);
      }
    });
    const awardListItems = document.querySelectorAll(".awards-list li");
    awardListItems.forEach(function (li) {
      return awards.push(li);
    });
    awards.forEach(function (award) {
      const element = award;
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              _this.celebrateAward(element);
              observer.unobserve(element);
            }
          });
        },
        { threshold: 0.5 },
      );
      observer.observe(element);
    });
  };

  // Celebration animation for awards
  PortfolioPageEnhancer.prototype.celebrateAward = function (element) {
    element.style.animation = "celebrate 0.6s ease";
    // Add sparkle effect
    for (let i = 0; i < 5; i++) {
      setTimeout(function () {
        const sparkle = document.createElement("span");
        sparkle.textContent = "✨";
        sparkle.style.cssText =
          "\n                    position: absolute;\n                    font-size: 1.5em;\n                    pointer-events: none;\n                    animation: sparkle 1s ease forwards;\n                ";
        const rect = element.getBoundingClientRect();
        sparkle.style.left = "".concat(Math.random() * rect.width, "px");
        sparkle.style.top = "".concat(Math.random() * rect.height, "px");
        element.style.position = "relative";
        element.appendChild(sparkle);
        setTimeout(function () {
          return sparkle.remove();
        }, 1000);
      }, i * 100);
    }
  };

  // Lazy load images (if any)
  PortfolioPageEnhancer.prototype.setupImageLazyLoading = function () {
    const images = document.querySelectorAll(".portfolio-section img");
    var imageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.add("loaded");
            imageObserver.unobserve(img);
          }
        }
      });
    });
    images.forEach(function (img) {
      return imageObserver.observe(img);
    });
  };

  // Add share buttons for projects
  PortfolioPageEnhancer.prototype.setupShareButtons = function () {
    const _this = this;
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(function (card) {
      const shareBtn = document.createElement("button");
      shareBtn.className = "share-project-btn";
      shareBtn.innerHTML = "🔗 Share";
      shareBtn.style.cssText =
        "\n                margin-top: 20px;\n                padding: 8px 16px;\n                background: rgba(102, 126, 234, 0.1);\n                border: 2px solid #667eea;\n                color: #667eea;\n                border-radius: 8px;\n                cursor: pointer;\n                font-weight: 600;\n                transition: all 0.3s ease;\n            ";
      shareBtn.addEventListener("click", function () {
        let _a;
        const title =
          ((_a = card.querySelector("h3")) === null || _a === void 0
            ? void 0
            : _a.textContent) || "";
        _this.shareProject(title, window.location.href);
      });
      shareBtn.addEventListener("mouseenter", function () {
        shareBtn.style.background = "#667eea";
        shareBtn.style.color = "white";
      });
      shareBtn.addEventListener("mouseleave", function () {
        shareBtn.style.background = "rgba(102, 126, 234, 0.1)";
        shareBtn.style.color = "#667eea";
      });
      // Only add if not already present
      if (!card.querySelector(".share-project-btn")) {
        card.appendChild(shareBtn);
      }
    });
  };

  // Share project functionality
  PortfolioPageEnhancer.prototype.shareProject = function (title, url) {
    if (navigator.share) {
      navigator.share({
        title,
        url,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(url).then(function () {
        alert("Project link copied to clipboard!");
      });
    }
  };
  return PortfolioPageEnhancer;
})();

// Add CSS animations dynamically
// Updated to include robust Button Styles
const style = document.createElement("style");
style.textContent = `
    /* Filter Container Layout */
    .portfolio-filters {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 40px;
        justify-content: center;
        width: 100%;
    }

    /* Filter Button Styling */
    .filter-btn {
        padding: 10px 24px;
        border: 2px solid #667eea;
        background: transparent;
        color: #667eea;
        border-radius: 50px;
        cursor: pointer;
        font-weight: 600;
        font-family: inherit; /* Matches site font */
        font-size: 0.95rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        outline: none;
        -webkit-appearance: none;
    }

    /* Hover State */
    .filter-btn:hover {
        background: rgba(102, 126, 234, 0.1);
        transform: translateY(-2px);
    }

    /* Active State */
    .filter-btn.active {
        background: #667eea;
        color: white;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        transform: translateY(-2px);
    }

    /* Existing Keyframes */
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes celebrate {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05) rotate(2deg); }
    }
    
    @keyframes sparkle {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-50px) scale(0.5);
        }
    }
`;
document.head.appendChild(style);

// Initialize when DOM is ready
if (document.querySelector(".portfolio-section")) {
  new PortfolioPageEnhancer();
}
