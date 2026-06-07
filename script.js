document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animations (Fade In, Slide Up)
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it has animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => scrollObserver.observe(el));

    // Simple Parallax Effect for the Mock Spreadsheet
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.1;
            // Move element downwards slightly as you scroll down
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Form submission handling (Mock)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = "Processing...";
            btn.style.background = "var(--accent)";
            btn.style.borderColor = "var(--accent)";
            btn.style.color = "white";

            setTimeout(() => {
                btn.innerText = "Inquiry Received";
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = "";
                    btn.style.borderColor = "";
                    btn.style.color = "";
                }, 3000);
            }, 1500);
        });
    }
});
