// script.js

// Animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate');
    
    // Initially hide elements
    animateElements.forEach(el => {
        el.style.opacity = '0';
    });
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll animation
    function handleScrollAnimation() {
        animateElements.forEach(el => {
            if (isInViewport(el)) {
                const delay = el.classList.contains('delay-1') ? 200 : 
                             el.classList.contains('delay-2') ? 400 : 
                             el.classList.contains('delay-3') ? 600 : 0;
                
                setTimeout(() => {
                    el.style.animation = 'fadeInUp 0.8s forwards';
                }, delay);
            }
        });
    }
    
    // Initial check
    handleScrollAnimation();
    
    // Check on scroll
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Simulate admin logout
    document.querySelector('.logout-btn').addEventListener('click', function() {
        alert('Admin logged out successfully!');
        this.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
    });
    
    // Get Started button
    document.querySelector('.cta-button').addEventListener('click', function() {
        alert('Redirecting to signup page...');
    });
});