document.addEventListener('DOMContentLoaded', () => {
    // --- Dark Mode Toggle Functionality ---
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for user's preferred theme in localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
    } else {
        // Optional: Check system preference for dark mode if no local storage preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-mode');
        }
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Save preference to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme'); // Removes the 'theme' item if light mode is selected
            // Or localStorage.setItem('theme', 'light-mode'); if you want to explicitly store light mode
        }
    });

    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Adjust scroll position to account for fixed header (if any)
                const headerOffset = document.querySelector('header').offsetHeight || 0;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset - 20; // -20px for a little extra padding

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- Add more JavaScript interactivity here ---
    // Example: Form submission handling (client-side validation)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // Basic validation example
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Form submitted successfully! (This is a client-side demo)');
            this.reset(); // Clear the form
            // In a real application, you would send this data to a server using fetch() or XMLHttpRequest
        });
    }

    // Example: Simple "scroll to top" button (uncomment HTML if you add this)
    /*
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) { // Show button after scrolling 300px
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    */
});
