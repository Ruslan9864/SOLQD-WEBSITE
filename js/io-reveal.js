// Intersection Observer for reveal animations

document.addEventListener('DOMContentLoaded', function() {
    initRevealAnimations();
});

function initRevealAnimations() {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
        // Fallback: show all elements immediately
        const elements = document.querySelectorAll('[data-reveal]');
        elements.forEach(el => el.classList.add('revealed'));
        return;
    }
    
    // Create intersection observer with optimized settings
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        // Use passive listener for better performance
        passive: true
    });
    
    // Observe all elements with data-reveal attribute
    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach(el => {
        observer.observe(el);
    });
    
    // Also observe common elements that should be revealed
    const commonElements = document.querySelectorAll('.section, .card, .material-card, .focus-card, .team-member, .news-item, .technology-feature');
    commonElements.forEach(el => {
        if (!el.hasAttribute('data-reveal')) {
            el.setAttribute('data-reveal', 'fade-up');
            observer.observe(el);
        }
    });
}

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const animationType = element.getAttribute('data-reveal') || 'fade-up';
            
            // Add revealed class
            element.classList.add('revealed');
            
            // Add specific animation class
            element.classList.add(`reveal-${animationType}`);
            
            // Stop observing this element
            observer.unobserve(element);
        }
    });
}

// Styles are now in components.css, no need to inject them here

// Export for use in other scripts
window.RevealAnimations = {
    initRevealAnimations,
    handleIntersection
};
