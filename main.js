// ==========================================
// Main JS for Metronix Group Limited
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navigation nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link is an internal anchor (starts with #)
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for sticky header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Alert/Console log to confirm script loading
    console.log("Metronix Group Limited website loaded successfully!");
});
