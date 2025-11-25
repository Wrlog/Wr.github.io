// Enhanced TypeScript for modern interactivity
// This file will be compiled to enhanced.js

interface ScrollPosition {
  y: number;
  isScrolling: boolean;
}

class WebsiteEnhancer {
  private scrollPosition: ScrollPosition = { y: 0, isScrolling: false };
  private lastScrollTop: number = 0;
  private ticking: boolean = false;

  constructor() {
    this.init();
  }

  private init(): void {
    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.setup());
    } else {
      this.setup();
    }
  }

  private setup(): void {
    this.setupScrollAnimations();
    this.setupIntersectionObserver();
    this.setupSmoothScrolling();
    this.setupSkillTagsAnimation();
    this.setupCardHoverEffects();
    this.setupParallaxEffect();
  }

  // Scroll-based animations
  private setupScrollAnimations(): void {
    window.addEventListener(
      "scroll",
      () => {
        this.scrollPosition.y = window.scrollY;

        if (!this.ticking) {
          window.requestAnimationFrame(() => {
            this.handleScroll();
            this.ticking = false;
          });
          this.ticking = true;
        }
      },
      { passive: true },
    );
  }

  private handleScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector(".site-header") as HTMLElement;

    if (header) {
      if (scrollTop > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll(".fade-in-on-scroll");
    fadeElements.forEach((el) => {
      const element = el as HTMLElement;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("visible");
      }
    });
  }

  // Intersection Observer for animations
  private setupIntersectionObserver(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll(
      ".skill-category, .project-card, .repo-list-item, .section-title",
    );
    animatedElements.forEach((el) => observer.observe(el));
  }

  // Smooth scrolling for anchor links
  private setupSmoothScrolling(): void {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
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
  }

  // Animate skill tags on hover
  private setupSkillTagsAnimation(): void {
    const skillTags = document.querySelectorAll(".skill-tag");
    skillTags.forEach((tag, index) => {
      const element = tag as HTMLElement;
      element.style.transitionDelay = `${index * 0.05}s`;

      element.addEventListener("mouseenter", () => {
        element.style.transform = "translateY(-5px) scale(1.05)";
      });

      element.addEventListener("mouseleave", () => {
        element.style.transform = "translateY(0) scale(1)";
      });
    });
  }

  // Enhanced card hover effects
  private setupCardHoverEffects(): void {
    const cards = document.querySelectorAll(
      ".modern-card, .project-card, .repo-list-item",
    );
    cards.forEach((card) => {
      card.addEventListener("mouseenter", function (this: HTMLElement) {
        this.style.transform = "translateY(-8px)";
        this.style.boxShadow = "0 12px 40px rgba(102, 126, 234, 0.2)";
      });

      card.addEventListener("mouseleave", function (this: HTMLElement) {
        this.style.transform = "translateY(0)";
        this.style.boxShadow = "";
      });
    });
  }

  // Subtle parallax effect for hero section
  private setupParallaxEffect(): void {
    const hero = document.querySelector(".hero-section");
    if (!hero) return;

    window.addEventListener(
      "scroll",
      () => {
        const scrolled = window.pageYOffset;
        const heroElement = hero as HTMLElement;
        if (scrolled < heroElement.offsetHeight) {
          heroElement.style.transform = `translateY(${scrolled * 0.5}px)`;
          heroElement.style.opacity = `${1 - scrolled / heroElement.offsetHeight}`;
        }
      },
      { passive: true },
    );
  }
}

// Initialize when DOM is ready
new WebsiteEnhancer();
