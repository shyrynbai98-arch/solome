// Start page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe animated elements
    const animatedElements = document.querySelectorAll('.hero-content > *, .hero-visual > *');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.8s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // Animate income chart bars
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.transform = 'scaleY(1)';
        }, index * 200 + 1000);
    });

    // Animate success metrics
    const metrics = document.querySelectorAll('.metric');
    metrics.forEach((metric, index) => {
        setTimeout(() => {
            metric.style.opacity = '1';
            metric.style.transform = 'translateY(0)';
        }, index * 200 + 1500);
    });

    // Smooth scrolling for anchor links
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

    // Add hover effect to process steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        step.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Counter animation for metrics
    function animateCounter(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            element.textContent = current.toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Start counter animations when elements are visible
    const metricNumbers = document.querySelectorAll('.metric-number');
    const metricObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent;
                if (text.includes('$')) {
                    animateCounter(entry.target, 0, 87, 2000);
                    entry.target.textContent = '$' + entry.target.textContent;
                } else if (text.includes('%')) {
                    animateCounter(entry.target, 0, 94, 2000);
                    entry.target.textContent = entry.target.textContent + '%';
                } else if (text.includes('Mo')) {
                    animateCounter(entry.target, 0, 6, 1500);
                    entry.target.textContent = entry.target.textContent + ' Mo';
                }
                metricObserver.unobserve(entry.target);
            }
        });
    });

    metricNumbers.forEach(number => {
        metricObserver.observe(number);
    });

    // Floating elements animation
    const floatingElements = document.querySelectorAll('.float-element');
    floatingElements.forEach((element, index) => {
        // Add random delay and duration for more natural movement
        element.style.animationDelay = `${Math.random() * 2}s`;
        element.style.animationDuration = `${4 + Math.random() * 4}s`;
    });

    // Header scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.1)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add parallax effect to floating elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        floatingElements.forEach((element, index) => {
            const rate = scrolled * -0.5;
            element.style.transform = `translateY(${rate}px)`;
        });
    });

    // CTA button pulse effect
    const ctaButton = document.querySelector('.get-started-btn');
    if (ctaButton) {
        setInterval(() => {
            ctaButton.style.boxShadow = '0 15px 35px rgba(255, 215, 0, 0.6)';
            setTimeout(() => {
                ctaButton.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.4)';
            }, 300);
        }, 3000);
    }

    // Social proof counter animation
    const socialProofText = document.querySelector('.testimonial-text strong');
    if (socialProofText) {
        let count = 2847;
        setInterval(() => {
            count += Math.floor(Math.random() * 3) + 1;
            socialProofText.textContent = count.toLocaleString() + ' solopreneurs';
        }, 10000);
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger entrance animations
    setTimeout(() => {
        document.querySelector('.hero-content').style.opacity = '1';
        document.querySelector('.hero-visual').style.opacity = '1';
    }, 300);
});

// Performance optimization for animations
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}