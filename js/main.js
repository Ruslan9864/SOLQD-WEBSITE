// Main JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initHeader();
    initMobileMenu();
    initForms();
    initAnimations();
    initScrollEffects();
});

// Header functionality
function initHeader() {
    const header = document.getElementById('header');
    const burger = document.getElementById('header-burger');
    const nav = document.getElementById('header-nav');
    
    if (!header || !burger || !nav) return;
    
    // Sticky header effect
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 8) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Mobile menu toggle
    burger.addEventListener('click', function() {
        const isExpanded = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', !isExpanded);
        
        if (!isExpanded) {
            openMobileMenu();
        } else {
            closeMobileMenu();
        }
    });
    
    // Mobile menu close button
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
            closeMobileMenu();
        });
    }
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

// Mobile menu functions
function openMobileMenu() {
    const burger = document.getElementById('header-burger');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!burger || !mobileMenu) return;
    
    mobileMenu.classList.add('mobile-menu--open');
    document.body.style.overflow = 'hidden';
    burger.setAttribute('aria-expanded', 'true');
}

function closeMobileMenu() {
    const burger = document.getElementById('header-burger');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!burger || !mobileMenu) return;
    
    mobileMenu.classList.remove('mobile-menu--open');
    document.body.style.overflow = '';
    burger.setAttribute('aria-expanded', 'false');
}

function createMobileMenu() {
    const mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobile-menu';
    mobileMenu.className = 'mobile-menu';
    
    const nav = document.getElementById('header-nav');
    if (!nav) return mobileMenu;
    
    // Clone the navigation
    const navClone = nav.cloneNode(true);
    navClone.className = 'mobile-menu__nav';
    
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.className = 'mobile-menu__close';
    closeButton.innerHTML = '×';
    closeButton.addEventListener('click', closeMobileMenu);
    
    mobileMenu.appendChild(closeButton);
    mobileMenu.appendChild(navClone);
    
    // Add click handlers to menu links
    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    return mobileMenu;
}

// Form handling
function initForms() {
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Contact forms
    const contactForms = document.querySelectorAll('form[action*="contact"]');
    contactForms.forEach(form => {
        form.addEventListener('submit', handleContactSubmit);
    });
    
    // Purchase form
    const purchaseForm = document.querySelector('form[action*="purchase"]');
    if (purchaseForm) {
        purchaseForm.addEventListener('submit', handlePurchaseSubmit);
    }
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const email = form.email.value;
    const consent = form.consent.checked;
    
    // Validate form
    if (!email) {
        showFormError(form, 'Укажите e-mail');
        return;
    }
    
    if (!isValidEmail(email)) {
        showFormError(form, 'Проверьте формат e-mail');
        return;
    }
    
    if (!consent) {
        showFormError(form, 'Необходимо согласие на обработку данных');
        return;
    }
    
    // Show loading state
    form.classList.add('loading');
    
    // Simulate API call
    setTimeout(() => {
        form.classList.remove('loading');
        showFormSuccess(form, 'Спасибо! Мы свяжемся с вами в ближайшее время.');
        form.reset();
    }, 2000);
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Validate required fields
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'Заполните это поле');
            isValid = false;
        } else {
            clearFieldError(field);
        }
    });
    
    if (!isValid) return;
    
    // Show loading state
    form.classList.add('loading');
    
    // Simulate API call
    setTimeout(() => {
        form.classList.remove('loading');
        showFormSuccess(form, 'Спасибо! Мы свяжемся с вами в ближайшее время.');
        form.reset();
    }, 2000);
}

function handlePurchaseSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Validate required fields
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'Заполните это поле');
            isValid = false;
        } else {
            clearFieldError(field);
        }
    });
    
    if (!isValid) return;
    
    // Show loading state
    form.classList.add('loading');
    
    // Simulate API call
    setTimeout(() => {
        form.classList.remove('loading');
        showFormSuccess(form, 'Спасибо! Мы свяжемся с вами в ближайшее время.');
        form.reset();
    }, 2000);
}

// Form validation helpers
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormError(form, message) {
    clearFormMessages(form);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form__error';
    errorDiv.textContent = message;
    
    form.appendChild(errorDiv);
}

function showFormSuccess(form, message) {
    clearFormMessages(form);
    
    const successDiv = document.createElement('div');
    successDiv.className = 'form__success';
    successDiv.textContent = message;
    
    form.appendChild(successDiv);
}

function clearFormMessages(form) {
    const existingMessages = form.querySelectorAll('.form__error, .form__success');
    existingMessages.forEach(msg => msg.remove());
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form__error';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
    field.classList.add('form__input--error');
}

function clearFieldError(field) {
    const errorDiv = field.parentNode.querySelector('.form__error');
    if (errorDiv) {
        errorDiv.remove();
    }
    field.classList.remove('form__input--error');
}

// Animations
function initAnimations() {
    // Hero animation
    const heroTitle = document.querySelector('.hero__title');
    const heroSubtitle = document.querySelector('.hero__subtitle');
    const heroActions = document.querySelector('.hero__actions');
    
    if (heroTitle) {
        setTimeout(() => heroTitle.classList.add('animate-fade-in-up'), 100);
    }
    if (heroSubtitle) {
        setTimeout(() => heroSubtitle.classList.add('animate-fade-in-up'), 200);
    }
    if (heroActions) {
        setTimeout(() => heroActions.classList.add('animate-fade-in-up'), 300);
    }
    
    // Card hover effects
    const cards = document.querySelectorAll('.card, .material-card, .focus-card, .team-member, .news-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Scroll effects
function initScrollEffects() {
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            hero.style.transform = `translateY(${parallax}px)`;
        });
    }
}

// Utility functions
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export functions for use in other scripts
window.SolQD = {
    openMobileMenu,
    closeMobileMenu,
    showFormError,
    showFormSuccess,
    debounce,
    throttle
};
