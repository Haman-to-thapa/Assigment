  // Initialize Lucide icons

  import lucide from 'lucide'
  
        lucide.createIcons();
        
        // Animated counters
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
        
        // Intersection Observer for counter animation
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const id = counter.id;
                    
                    switch(id) {
                        case 'counter1':
                            animateCounter(counter, 0, 125000, 2000);
                            break;
                        case 'counter2':
                            animateCounter(counter, 0, 340, 2000);
                            break;
                        case 'counter3':
                            animateCounter(counter, 0, 12500, 2000);
                            break;
                        case 'counter4':
                            animateCounter(counter, 0, 89, 2000);
                            break;
                    }
                    
                    counterObserver.unobserve(counter);
                }
            });
        }, observerOptions);
        
        // Observe all counters
        document.querySelectorAll('[id^="counter"]').forEach(counter => {
            counterObserver.observe(counter);
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href && href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
        
        // Add scroll effect to navbar
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
                nav.style.backdropFilter = 'blur(10px)';
            } else {
                nav.style.background = 'var(--white)';
                nav.style.backdropFilter = 'none';
            }
        });
        
        // Add animation delays to cards
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.content-card');
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.2}s`;
            });
        });