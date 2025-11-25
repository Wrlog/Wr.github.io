// Enhanced TypeScript for About Page - Interactive Features
var AboutPageEnhancer = /** @class */ (function () {
    function AboutPageEnhancer() {
        this.init();
    }
    AboutPageEnhancer.prototype.init = function () {
        var _this = this;
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function () { return _this.setup(); });
        }
        else {
            this.setup();
        }
    };
    AboutPageEnhancer.prototype.setup = function () {
        try {
            // Only run on about page
            var aboutSection = document.querySelector('.about-section');
            if (!aboutSection) {
                console.log('AboutPageEnhancer: .about-section not found, skipping');
                return;
            }
            console.log('AboutPageEnhancer: Initializing...');
            // Verify CSS is loaded
            if (aboutSection) {
                var styles = window.getComputedStyle(aboutSection);
                console.log('AboutPageEnhancer: CSS loaded - padding:', styles.padding);
            }
            this.skillCategories = document.querySelectorAll('.skill-item, .markdown-body h3');
            this.timelineItems = document.querySelectorAll('.timeline-item, .markdown-body h3 + p');
            this.contactSection = document.querySelector('.contact-info, .markdown-body h2:last-of-type');
            this.sections = document.querySelectorAll('.about-section .markdown-body > h2');
            console.log('AboutPageEnhancer: Found', this.sections.length, 'sections');
            this.setupSkillTagsAnimation();
            this.setupTimelineAnimation();
            this.setupSectionReveal();
            this.setupContactFormats();
            this.setupProgressBars();
            this.setupInteractiveCards();
            this.setupSmoothScrollToSection();
            this.setupParallaxEffects();
            console.log('AboutPageEnhancer: Initialization complete');
        }
        catch (error) {
            console.error('AboutPageEnhancer: Error during setup', error);
        }
    };
    // Animate skill tags with staggered effect
    AboutPageEnhancer.prototype.setupSkillTagsAnimation = function () {
        var skillLists = document.querySelectorAll('.markdown-body ul li, .skill-item li');
        skillLists.forEach(function (item, index) {
            var element = item;
            element.style.opacity = '0';
            element.style.transform = 'translateX(-20px)';
            element.style.transition = "all 0.4s ease ".concat(index * 0.05, "s");
            // Use Intersection Observer for scroll-triggered animation
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateX(0)';
                        observer.unobserve(element);
                    }
                });
            }, { threshold: 0.1 });
            observer.observe(element);
        });
    };
    // Animate timeline items sequentially
    AboutPageEnhancer.prototype.setupTimelineAnimation = function () {
        var timelineItems = document.querySelectorAll('.timeline-item, .markdown-body h3');
        timelineItems.forEach(function (item, index) {
            var element = item;
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = "all 0.5s ease ".concat(index * 0.1, "s");
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                        observer.unobserve(element);
                    }
                });
            }, { threshold: 0.2 });
            observer.observe(element);
        });
    };
    // Reveal sections with fade-in effect
    AboutPageEnhancer.prototype.setupSectionReveal = function () {
        var _this = this;
        if (!this.sections || this.sections.length === 0)
            return;
        this.sections.forEach(function (section) {
            try {
                var element = section;
                if (!element)
                    return;
                var sectionContent_1 = _this.getNextSiblingUntil(element, 'h2');
                // Check if sectionContent exists before accessing style
                if (sectionContent_1 && sectionContent_1.style) {
                    sectionContent_1.style.opacity = '0';
                    sectionContent_1.style.transform = 'translateY(20px)';
                    sectionContent_1.style.transition = 'all 0.6s ease';
                    var observer_1 = new IntersectionObserver(function (entries) {
                        entries.forEach(function (entry) {
                            if (entry.isIntersecting) {
                                sectionContent_1.style.opacity = '1';
                                sectionContent_1.style.transform = 'translateY(0)';
                                observer_1.unobserve(sectionContent_1);
                            }
                        });
                    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
                    observer_1.observe(element);
                }
            }
            catch (error) {
                console.warn('AboutPageEnhancer: Error in setupSectionReveal', error);
            }
        });
    };
    // Helper to get all siblings until a specific selector
    AboutPageEnhancer.prototype.getNextSiblingUntil = function (element, selector) {
        if (!element || !element.nextElementSibling)
            return null;
        var next = element.nextElementSibling;
        var siblings = [];
        while (next) {
            if (next.matches && next.matches(selector))
                break;
            siblings.push(next);
            if (!next.nextElementSibling)
                break;
            next = next.nextElementSibling;
        }
        return siblings.length > 0 ? siblings[0] : null;
    };
    // Format contact information with click-to-copy functionality
    AboutPageEnhancer.prototype.setupContactFormats = function () {
        var _this = this;
        var contactLinks = document.querySelectorAll('.about-section a[href^="mailto:"], .about-section a[href^="tel:"]');
        contactLinks.forEach(function (link) {
            var element = link;
            element.style.cursor = 'pointer';
            element.title = 'Click to copy';
            link.addEventListener('click', function (e) {
                e.preventDefault();
                var href = link.getAttribute('href');
                if (href) {
                    var text = href.replace(/^(mailto:|tel:)/, '');
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
                console.log('Copied to clipboard:', text);
            });
        }
        else {
            // Fallback for older browsers
            var textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
            }
            catch (err) {
                console.error('Fallback copy failed', err);
            }
            document.body.removeChild(textArea);
        }
    };
    // Show visual feedback when copying
    AboutPageEnhancer.prototype.showCopyFeedback = function (element) {
        if (!element)
            return;
        var originalText = element.textContent || '';
        element.textContent = 'Copied!';
        element.style.color = '#764ba2';
        setTimeout(function () {
            if (element) {
                element.textContent = originalText;
                element.style.color = '';
            }
        }, 2000);
    };
    // Add progress bars for skills (if needed)
    AboutPageEnhancer.prototype.setupProgressBars = function () {
        // This can be extended to show skill proficiency levels
        var skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(function (item) {
            var element = item;
            element.addEventListener('mouseenter', function () {
                element.style.transform = 'scale(1.02)';
            });
            element.addEventListener('mouseleave', function () {
                element.style.transform = 'scale(1)';
            });
        });
    };
    // Enhanced interactive cards
    AboutPageEnhancer.prototype.setupInteractiveCards = function () {
        var cards = document.querySelectorAll('.skill-item, .contact-info');
        cards.forEach(function (card) {
            var element = card;
            // Fix: Explicitly type 'e' as MouseEvent to access clientX/Y
            element.addEventListener('mousemove', function (e) {
                var rect = element.getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;
                var centerX = rect.width / 2;
                var centerY = rect.height / 2;
                var rotateX = (y - centerY) / 10;
                var rotateY = (centerX - x) / 10;
                element.style.transform = "perspective(1000px) rotateX(".concat(rotateX, "deg) rotateY(").concat(rotateY, "deg) scale(1.02)");
            });
            element.addEventListener('mouseleave', function () {
                element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });
    };
    // Smooth scroll to sections
    AboutPageEnhancer.prototype.setupSmoothScrollToSection = function () {
        var sectionLinks = document.querySelectorAll('a[href^="#"]');
        sectionLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                var href = link.getAttribute('href');
                if (href && href !== '#') {
                    var target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        var offset = 80;
                        var targetPosition = target.offsetTop - offset;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    };
    // Subtle parallax effects for background elements
    AboutPageEnhancer.prototype.setupParallaxEffects = function () {
        window.addEventListener('scroll', function () {
            var scrolled = window.pageYOffset;
            var rate = scrolled * 0.5;
            // Apply parallax to background gradients
            var section = document.querySelector('.about-section');
            if (section) {
                // Fix: backgroundPositionY is not standard in strictly typed CSSStyleDeclaration.
                // We use 'backgroundPosition' instead or a type cast if specific Y control is needed.
                section.style.backgroundPosition = "center ".concat(rate, "px");
            }
        }, { passive: true });
    };
    // Add typing effect for name/title (optional)
    AboutPageEnhancer.prototype.addTypingEffect = function (element, text, speed) {
        if (speed === void 0) { speed = 100; }
        var i = 0;
        element.textContent = '';
        var type = function () {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        type();
    };
    // Add counter animation for numbers
    AboutPageEnhancer.prototype.animateCounter = function (element, target, duration) {
        if (duration === void 0) { duration = 2000; }
        var start = 0;
        var increment = target / (duration / 16);
        var updateCounter = function () {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start).toString();
                requestAnimationFrame(updateCounter);
            }
            else {
                element.textContent = target.toString();
            }
        };
        updateCounter();
    };
    return AboutPageEnhancer;
}());
// Initialize when DOM is ready
try {
    if (document.querySelector('.about-section')) {
        new AboutPageEnhancer();
    }
}
catch (error) {
    console.error('AboutPageEnhancer: Failed to initialize', error);
}
