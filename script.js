document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Animate hamburger lines
        const lines = this.querySelectorAll('.line');
        if (this.classList.contains('active')) {
            lines[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            lines.forEach(line => {
                line.style.transform = '';
                line.style.opacity = '';
            });
        }
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            // Reset hamburger lines
            const lines = hamburger.querySelectorAll('.line');
            lines.forEach(line => {
                line.style.transform = '';
                line.style.opacity = '';
            });
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            navbar.style.background = 'var(--white)';
        }
    });
    
    // Resume download button functionality
    const downloadBtn = document.getElementById('downloadResume');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Resume download would start here. In a real implementation, this would link to your resume PDF.');
            // In a real implementation, you would link to your actual resume file:
            window.location.href = 'AnshGupta_resume4.pdf';
        });
    }
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! In a real implementation, this would send the form data to a server.');
            // In a real implementation, you would send the form data to your backend
            // and then reset the form or show a success message
            this.reset();
        });
    }
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .resume-card, .contact-item, .home-content, .home-image');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.project-card, .resume-card, .contact-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    document.querySelector('.home-content').style.opacity = '0';
    document.querySelector('.home-content').style.transform = 'translateX(-50px)';
    document.querySelector('.home-content').style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    document.querySelector('.home-image').style.opacity = '0';
    document.querySelector('.home-image').style.transform = 'translateX(50px)';
    document.querySelector('.home-image').style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    // Trigger animations when page loads
    window.addEventListener('load', function() {
        animateOnScroll();
        
        // Animate home section elements with a slight delay
        setTimeout(() => {
            document.querySelector('.home-content').style.opacity = '1';
            document.querySelector('.home-content').style.transform = 'translateX(0)';
            
            document.querySelector('.home-image').style.opacity = '1';
            document.querySelector('.home-image').style.transform = 'translateX(0)';
        }, 300);
    });
    
    // Trigger animations on scroll
    window.addEventListener('scroll', animateOnScroll);
});