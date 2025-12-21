// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP with ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.from('.hero-content > *', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-image', {
        duration: 1.5,
        scale: 0.5,
        opacity: 0,
        rotation: 360,
        ease: 'back.out(1.7)'
    });
    
    // Animate scroll indicator
    gsap.to('.scroll-indicator', {
        y: 10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
    
    // Add this to ensure nav stays visible
    gsap.set('.nav-list', { opacity: 1, visibility: 'visible' });
    gsap.set('.nav-item', { opacity: 1, visibility: 'visible' });
    gsap.set('.nav-link', { opacity: 1, visibility: 'visible' });
    
    // About section animation
    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: -100,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: 100,
        opacity: 0,
        delay: 0.2,
        ease: 'power3.out'
    });
    
    // Education timeline animations
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            y: 50,
            opacity: 0,
            delay: i * 0.2,
            ease: 'power3.out'
        });
    });
    
    // Skills grid animation
    gsap.utils.toArray('.skill-category').forEach((category, i) => {
        gsap.from(category, {
            scrollTrigger: {
                trigger: category,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            scale: 0.8,
            opacity: 0,
            delay: i * 0.1,
            ease: 'back.out(1.2)'
        });
    });
    
    // Project cards animation
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            delay: i * 0.15,
            ease: 'power3.out'
        });
    });
    
    // Contact form animation
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: -50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: 50,
        opacity: 0,
        delay: 0.2,
        ease: 'power3.out'
    });
    
    // Floating animation for skill items
    gsap.utils.toArray('.skill-item').forEach((item, i) => {
        gsap.to(item, {
            y: -5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            delay: i * 0.1,
            ease: 'sine.inOut'
        });
    });
    
    // Animate skill icons
    gsap.utils.toArray('.skill-item i').forEach(icon => {
        gsap.from(icon, {
            scrollTrigger: {
                trigger: icon,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            duration: 0.5,
            scale: 0,
            rotation: 360,
            ease: 'back.out(1.7)'
        });
    });
    
    // Background animation for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        gsap.to(hero, {
            backgroundPosition: '50% 100%',
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
    
    // animations to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
});