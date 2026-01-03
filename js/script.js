/**
 * DIGITALSELF - INTERACTIVE SCRIPT
 * Scroll-triggered animations, parallax effects, and video controls
 */

// ========================================
// UTILITY FUNCTIONS
// ========================================

const debounce = (func, wait = 10) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit = 16) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// ========================================
// NAVIGATION SCROLL EFFECT
// ========================================

const nav = document.getElementById('nav');

const handleNavScroll = () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};

window.addEventListener('scroll', throttle(handleNavScroll));

// ========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

const revealElements = document.querySelectorAll('[data-scroll-reveal]');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('revealed');
        }
    });
};

// Initial check
revealOnScroll();

// On scroll
window.addEventListener('scroll', throttle(revealOnScroll));

// ========================================
// PARALLAX EFFECTS
// ========================================

const parallaxElements = {
    heroVideo: document.querySelector('.hero-video'),
    platformVideo: document.querySelector('.platform-video'),
    teamVideo: document.querySelector('.team-video'),
    solutionImage: document.querySelector('.solution-image'),
    productionImage: document.querySelector('.production-image')
};

const handleParallax = () => {
    const scrolled = window.pageYOffset;

    // Hero video parallax
    if (parallaxElements.heroVideo) {
        const heroSection = document.querySelector('.hero');
        const heroRect = heroSection.getBoundingClientRect();
        if (heroRect.top < window.innerHeight && heroRect.bottom > 0) {
            const offset = (scrolled * 0.3);
            parallaxElements.heroVideo.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
        }
    }

    // Platform video parallax
    if (parallaxElements.platformVideo) {
        const platformSection = document.querySelector('.platform');
        const platformRect = platformSection.getBoundingClientRect();
        if (platformRect.top < window.innerHeight && platformRect.bottom > 0) {
            const offset = ((scrolled - platformSection.offsetTop) * 0.2);
            parallaxElements.platformVideo.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
        }
    }

    // Team video parallax
    if (parallaxElements.teamVideo) {
        const teamSection = document.querySelector('.team');
        const teamRect = teamSection.getBoundingClientRect();
        if (teamRect.top < window.innerHeight && teamRect.bottom > 0) {
            const offset = ((scrolled - teamSection.offsetTop) * 0.15);
            parallaxElements.teamVideo.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
        }
    }

    // Solution image parallax
    if (parallaxElements.solutionImage) {
        const solutionSection = document.querySelector('.solution');
        const solutionRect = solutionSection.getBoundingClientRect();
        if (solutionRect.top < window.innerHeight && solutionRect.bottom > 0) {
            const offset = ((scrolled - solutionSection.offsetTop) * 0.1);
            parallaxElements.solutionImage.style.transform = `translateY(${offset}px)`;
        }
    }

    // Production image parallax
    if (parallaxElements.productionImage) {
        const productionSection = document.querySelector('.production');
        const productionRect = productionSection.getBoundingClientRect();
        if (productionRect.top < window.innerHeight && productionRect.bottom > 0) {
            const offset = ((scrolled - productionSection.offsetTop) * 0.1);
            parallaxElements.productionImage.style.transform = `translateY(${offset}px)`;
        }
    }
};

window.addEventListener('scroll', throttle(handleParallax));

// ========================================
// VIDEO AUTOPLAY ON VIEWPORT ENTER
// ========================================

const videos = document.querySelectorAll('video');

const handleVideoPlayback = () => {
    videos.forEach(video => {
        const rect = video.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInViewport) {
            video.play().catch(err => {
                console.log('Video autoplay prevented:', err);
            });
        } else {
            video.pause();
        }
    });
};

// Initial check
handleVideoPlayback();

// On scroll
window.addEventListener('scroll', throttle(handleVideoPlayback));

// ========================================
// INTERSECTION OBSERVER FOR ADVANCED ANIMATIONS
// ========================================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            
            // Trigger video playback for sections
            const video = entry.target.querySelector('video');
            if (video) {
                video.play().catch(err => {
                    console.log('Video autoplay prevented:', err);
                });
            }
        } else {
            // Pause video when section is out of view
            const video = entry.target.querySelector('video');
            if (video) {
                video.pause();
            }
        }
    });
}, observerOptions);

// Observe all major sections
document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// ========================================
// CARD HOVER EFFECTS WITH MOUSE TRACKING
// ========================================

const cards = document.querySelectorAll('.feature-card, .service-card, .competency-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========================================
// PERFORMANCE OPTIMIZATIONS
// ========================================

// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Preload critical videos
const preloadVideo = (videoElement) => {
    if (videoElement) {
        videoElement.preload = 'metadata';
    }
};

videos.forEach(preloadVideo);

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================

// Respect user's motion preferences
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    // Disable parallax and complex animations
    document.documentElement.style.setProperty('--transition-fast', '0.01ms');
    document.documentElement.style.setProperty('--transition-medium', '0.01ms');
    document.documentElement.style.setProperty('--transition-slow', '0.01ms');
    
    // Remove parallax effects
    window.removeEventListener('scroll', handleParallax);
}

// ========================================
// KEYBOARD NAVIGATION ENHANCEMENT
// ========================================

document.addEventListener('keydown', (e) => {
    // Allow keyboard users to navigate sections with arrow keys
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const sections = Array.from(document.querySelectorAll('section'));
        const currentSection = sections.find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.top < window.innerHeight / 2;
        });
        
        if (currentSection) {
            const currentIndex = sections.indexOf(currentSection);
            let targetSection;
            
            if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
                targetSection = sections[currentIndex + 1];
            } else if (e.key === 'ArrowUp' && currentIndex > 0) {
                targetSection = sections[currentIndex - 1];
            }
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
});

// ========================================
// INITIALIZE ON DOM CONTENT LOADED
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('DigitalSelf website initialized');
    
    // Initial state setup
    handleNavScroll();
    revealOnScroll();
    handleVideoPlayback();
    handleParallax();
    
    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
});

// ========================================
// WINDOW RESIZE HANDLER
// ========================================

window.addEventListener('resize', debounce(() => {
    // Recalculate positions on resize
    revealOnScroll();
    handleParallax();
}, 250));

// ========================================
// PAGE VISIBILITY API FOR VIDEO OPTIMIZATION
// ========================================

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause all videos when page is hidden
        videos.forEach(video => video.pause());
    } else {
        // Resume videos when page is visible
        handleVideoPlayback();
    }
});

// ========================================
// CUSTOM CURSOR EFFECT (OPTIONAL)
// ========================================

const createCustomCursor = () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    document.querySelectorAll('a, button, .feature-card, .service-card').forEach(element => {
        element.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        element.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
};

// Uncomment to enable custom cursor
// createCustomCursor();

console.log('DigitalSelf: All systems operational');
