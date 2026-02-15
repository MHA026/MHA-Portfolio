// ========================================
// Modern Cyber Portfolio - JavaScript
// ========================================

// ========================================
// Dynamic Role Cycling
// ========================================
import myImage from './assets/profile.png.jpeg';

const roles = [
    'Cybersecurity Engineer',
    'CEH Certified',
    'Cloud Security Specialist',
    'Penetration Tester',
    'Security Researcher'
];

let currentRoleIndex = 0;
const roleTextElement = document.getElementById('roleText');

function cycleRoles() {
    if (!roleTextElement) return;

    // Fade out
    roleTextElement.style.opacity = '0';

    setTimeout(() => {
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        roleTextElement.textContent = roles[currentRoleIndex];

        // Fade in
        roleTextElement.style.opacity = '1';
    }, 300);
}

// Change role every 3 seconds
setInterval(cycleRoles, 3000);

// ========================================
// Threat Feed Background Animation
// ========================================

const threatFeedElement = document.getElementById('threatFeed');
const threatMessages = [
    'SCANNING NETWORK... [OK]',
    'FIREWALL STATUS: ACTIVE',
    'INTRUSION DETECTION: MONITORING',
    'SSL CERTIFICATE: VERIFIED',
    'PORT SCAN: 443/TCP OPEN',
    'AUTHENTICATION: SUCCESS',
    'ENCRYPTION: AES-256',
    'VULNERABILITY CHECK: PASSED',
    'SECURITY AUDIT: COMPLETE',
    'THREAT LEVEL: LOW',
    'SYSTEM INTEGRITY: VERIFIED',
    'ACCESS CONTROL: ENABLED',
    'DATA ENCRYPTION: ACTIVE',
    'MALWARE SCAN: CLEAN',
    'NETWORK TRAFFIC: NORMAL',
    'BACKUP STATUS: CURRENT',
    'PATCH LEVEL: UP TO DATE',
    'SECURITY POSTURE: STRONG'
];

function createThreatFeedLine() {
    if (!threatFeedElement) return;

    const line = document.createElement('div');
    line.style.position = 'absolute';
    line.style.whiteSpace = 'nowrap';
    line.style.animation = 'scrollLeft 15s linear';
    line.style.top = Math.random() * 100 + '%';
    line.textContent = threatMessages[Math.floor(Math.random() * threatMessages.length)];

    threatFeedElement.appendChild(line);

    // Remove after animation
    setTimeout(() => {
        line.remove();
    }, 15000);
}

// Add scrolling animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes scrollLeft {
        from { transform: translateX(100vw); }
        to { transform: translateX(-100%); }
    }
`;
document.head.appendChild(style);

// Create new threat feed lines periodically
setInterval(createThreatFeedLine, 2000);

// Initial lines
for (let i = 0; i < 5; i++) {
    setTimeout(createThreatFeedLine, i * 400);
}

// ========================================
// Smooth Scroll Navigation
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});

// ========================================
// Navbar Scroll Effect
// ========================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========================================
// Mobile Menu Toggle
// ========================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// ========================================
// Scroll Animations (AOS - Animate On Scroll)
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(element => {
    observer.observe(element);
});

// ========================================
// Project Card Interactions
// ========================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ========================================
// Skills Matrix Hover Effects
// ========================================

const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    const skillName = item.querySelector('.skill-name');
    const skillTools = item.querySelector('.skill-tools');

    if (skillName && skillTools) {
        item.addEventListener('mouseenter', () => {
            skillName.style.color = 'var(--security-teal)';
        });

        item.addEventListener('mouseleave', () => {
            skillName.style.color = 'var(--light-slate)';
        });
    }
});

// ========================================
// Certification Card Animations
// ========================================

const certCards = document.querySelectorAll('.cert-card');

certCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ========================================
// Parallax Effect for Hero Visual
// ========================================

const heroVisual = document.querySelector('.hero-visual');

if (heroVisual) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;

        if (heroVisual) {
            heroVisual.style.transform = `translateY(${rate}px)`;
        }
    });
}

// ========================================
// Security Shield Animation Enhancement
// ========================================

const shieldLayers = document.querySelectorAll('.shield-layer');

shieldLayers.forEach((layer, index) => {
    layer.style.animationDelay = `${index * 0.5}s`;
});

// ========================================
// Dynamic Background Gradient
// ========================================

let gradientAngle = 0;

function animateBackground() {
    gradientAngle = (gradientAngle + 0.5) % 360;

    const cyberBackground = document.querySelector('.cyber-background');
    if (cyberBackground) {
        cyberBackground.style.background = `
            linear-gradient(${gradientAngle}deg, 
                var(--midnight-blue) 0%, 
                var(--deep-navy) 50%, 
                var(--midnight-blue) 100%)
        `;
    }

    requestAnimationFrame(animateBackground);
}

// Start background animation
animateBackground();

// ========================================
// Performance Optimization
// ========================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScroll = debounce(() => {
    // Any additional scroll-based animations can go here
}, 10);

window.addEventListener('scroll', optimizedScroll);

// ========================================
// Loading Animation
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// Interactive Timeline
// ========================================

const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        const marker = this.querySelector('.timeline-marker');
        if (marker) {
            marker.style.transform = 'scale(1.5)';
            marker.style.boxShadow = '0 0 20px var(--security-teal)';
        }
    });

    item.addEventListener('mouseleave', function () {
        const marker = this.querySelector('.timeline-marker');
        if (marker) {
            marker.style.transform = 'scale(1)';
            marker.style.boxShadow = 'var(--shadow-glow)';
        }
    });
});

// ========================================
// Contact Method Hover Effects
// ========================================

const contactMethods = document.querySelectorAll('.contact-method');

contactMethods.forEach(method => {
    method.addEventListener('mouseenter', function () {
        const icon = this.querySelector('.method-icon');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        }
    });

    method.addEventListener('mouseleave', function () {
        const icon = this.querySelector('.method-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// ========================================
// Cursor Trail Effect (Subtle)
// ========================================

const cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    // Only on desktop
    if (window.innerWidth > 968) {
        cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });

        // Keep trail length limited
        if (cursorTrail.length > trailLength) {
            cursorTrail.shift();
        }
    }
});

// ========================================
// Easter Egg: Konami Code
// ========================================

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;

        if (konamiIndex === konamiCode.length) {
            // Easter egg activated!
            document.body.style.animation = 'rainbow 2s linear infinite';

            const style = document.createElement('style');
            style.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(style);

            setTimeout(() => {
                document.body.style.animation = 'none';
            }, 5000);

            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// ========================================
// Console Message
// ========================================

console.log('%c🔐 Securing the Digital Frontier', 'color: #64FFDA; font-size: 20px; font-weight: bold;');
console.log('%cMohammed Hasan Ali - Cybersecurity Engineer', 'color: #8892B0; font-size: 14px;');
console.log('%cInterested in the code? Check out the repository!', 'color: #CCD6F6; font-size: 12px;');

// ========================================
// Analytics & Performance Monitoring
// ========================================

// Log page load time
window.addEventListener('load', () => {
    const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    console.log(`%cPage loaded in ${loadTime}ms`, 'color: #64FFDA; font-weight: bold;');
});

// ========================================
// Accessibility Enhancements
// ========================================

// Add keyboard navigation for project cards
projectCards.forEach(card => {
    card.setAttribute('tabindex', '0');

    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const link = card.querySelector('.project-link');
            if (link) {
                link.click();
            }
        }
    });
});

// Add keyboard navigation for certification cards
certCards.forEach(card => {
    card.setAttribute('tabindex', '0');
});

// ========================================
// Preload Critical Resources
// ========================================

function preloadImage(url) {
    const img = new Image();
    img.src = url;
}

// Preload any critical images here
// preloadImage('assets/image.jpg');

// ========================================
// Custom Cursor Tracking
// ========================================

const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');
const cursorRingOuter = document.querySelector('.cursor-ring-outer');

let mouseX = 0;
let mouseY = 0;
let dotX = 0;
let dotY = 0;
let ringX = 0;
let ringY = 0;
let outerRingX = 0;
let outerRingY = 0;

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth cursor following with different speeds for each ring
function animateCursor() {
    // Innermost dot follows immediately
    dotX += (mouseX - dotX) * 0.9;
    dotY += (mouseY - dotY) * 0.9;

    // Middle ring follows with slight delay
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    // Outer ring follows with more delay
    outerRingX += (mouseX - outerRingX) * 0.08;
    outerRingY += (mouseY - outerRingY) * 0.08;

    if (cursorDot) {
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
    }

    if (cursorRing) {
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
    }

    if (cursorRingOuter) {
        cursorRingOuter.style.left = outerRingX + 'px';
        cursorRingOuter.style.top = outerRingY + 'px';
    }

    requestAnimationFrame(animateCursor);
}

// Start cursor animation
if (window.innerWidth > 968) {
    animateCursor();
}

// Add hover effect for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .btn, .nav-link, .project-card, .contact-method, .cert-card, .social-link, .skill-item, .timeline-item, .highlight-item');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
    });

    element.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});

console.log('%c✅ Portfolio initialized successfully!', 'color: #4ADE80; font-weight: bold;');

