// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Adjust for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-dark', 'shadow-sm');
    } else {
        navbar.classList.remove('bg-dark', 'shadow-sm');
    }
});

// Back to top button visibility
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const formSuccess = document.getElementById('formSuccess');
        const formError = document.getElementById('formError');

        formSuccess.classList.add('d-none');
        formError.classList.add('d-none');

        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                contactForm.reset();
                formSuccess.classList.remove('d-none');
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            formError.classList.remove('d-none');
        });
        
    });
}

// Add animation to elements when they come into view
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.card, section h2, .list-group-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animate-fadeInUp');
        }
    });
};

// Run once on page load
window.addEventListener('load', animateOnScroll);
// Run on scroll
window.addEventListener('scroll', animateOnScroll);

// Set current year in footer
const currentYear = new Date().getFullYear();
const yearElement = document.querySelector('footer p:first-child');
if (yearElement) {
    yearElement.textContent = `© ${currentYear} Dhananjaya Bandara. All rights reserved.`;
}
