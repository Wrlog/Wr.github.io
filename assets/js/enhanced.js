// Enhanced JavaScript for modern interactivity
// Compiled from enhanced.ts

(function() {
    'use strict';

    var WebsiteEnhancer = /** @class */ (function () {
        function WebsiteEnhancer() {
            this.scrollPosition = { y: 0, isScrolling: false };
            this.lastScrollTop = 0;
            this.ticking = false;
            this.init();
        }
        WebsiteEnhancer.prototype.init = function () {
            var _this = this;
            // Wait for DOM to be ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function () { return _this.setup(); });
            }
            else {
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
        // Scroll-based animations
        WebsiteEnhancer.prototype.setupScrollAnimations = function () {
            var _this = this;
            window.addEventListener('scroll', function () {
                _this.scrollPosition.y = window.scrollY;
                if (!_this.ticking) {
                    window.requestAnimationFrame(function () {
                        _this.handleScroll();
                        _this.ticking = false;
                    });
                    _this.ticking = true;
                }
            }, { passive: true });
        };
        WebsiteEnhancer.prototype.handleScroll = function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var header = document.querySelector('.site-header');
            if (header) {
                if (scrollTop > 100) {
                    header.classList.add('scrolled');
                }
                else {
                    header.classList.remove('scrolled');
                }
            }
            // Fade in elements on scroll
            var fadeElements = document.querySelectorAll('.fade-in-on-scroll');
            fadeElements.forEach(function (el) {
                var element = el;
                var elementTop = element.getBoundingClientRect().top;
                var elementVisible = 150;
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        };
        // Intersection Observer for animations
        WebsiteEnhancer.prototype.setupIntersectionObserver = function () {
            var observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            // Observe elements with animation classes
            var animatedElements = document.querySelectorAll('.skill-category, .project-card, .repo-list-item, .section-title');
            animatedElements.forEach(function (el) { return observer.observe(el); });
        };
        // Smooth scrolling for anchor links
        WebsiteEnhancer.prototype.setupSmoothScrolling = function () {
            document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
                anchor.addEventListener('click', function (e) {
                    var href = anchor.getAttribute('href');
                    if (href && href !== '#') {
                        var target = document.querySelector(href);
                        if (target) {
                            e.preventDefault();
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                });
            });
        };
        // Animate skill tags on hover
        WebsiteEnhancer.prototype.setupSkillTagsAnimation = function () {
            var skillTags = document.querySelectorAll('.skill-tag');
            skillTags.forEach(function (tag, index) {
                var element = tag;
                element.style.transitionDelay = "".concat(index * 0.05, "s");
                element.addEventListener('mouseenter', function () {
                    element.style.transform = 'translateY(-5px) scale(1.05)';
                });
                element.addEventListener('mouseleave', function () {
                    element.style.transform = 'translateY(0) scale(1)';
                });
            });
        };
        // Enhanced card hover effects
        WebsiteEnhancer.prototype.setupCardHoverEffects = function () {
            var cards = document.querySelectorAll('.modern-card, .project-card, .repo-list-item');
            cards.forEach(function (card) {
                card.addEventListener('mouseenter', function () {
                    this.style.transform = 'translateY(-8px)';
                    this.style.boxShadow = '0 12px 40px rgba(102, 126, 234, 0.2)';
                });
                card.addEventListener('mouseleave', function () {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '';
                });
            });
        };
        // Subtle parallax effect for hero section
        WebsiteEnhancer.prototype.setupParallaxEffect = function () {
            var hero = document.querySelector('.hero-section');
            if (!hero)
                return;
            window.addEventListener('scroll', function () {
                var scrolled = window.pageYOffset;
                var heroElement = hero;
                if (scrolled < heroElement.offsetHeight) {
                    heroElement.style.transform = "translateY(".concat(scrolled * 0.5, "px)");
                    heroElement.style.opacity = "".concat(1 - scrolled / heroElement.offsetHeight);
                }
            }, { passive: true });
        };
        return WebsiteEnhancer;
    }());
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            new WebsiteEnhancer();
        });
    } else {
        new WebsiteEnhancer();
    }
    
    // Debug: Log that script loaded
    console.log('Enhanced.js loaded successfully');
})();
