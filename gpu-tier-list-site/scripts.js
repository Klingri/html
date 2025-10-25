document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for user's preferred theme in localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
    } else {
        // Optional: Check system preference for dark mode
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
            localStorage.removeItem('theme'); // Or localStorage.setItem('theme', 'light-mode');
        }

        /* Add these styles to your existing style.css */

/* GPU Specs Display in Sidebar */
#gpu-specs-display {
    /* Inherits .card styles, but can add specific overrides */
    margin-top: 25px; /* Space from the 'About This Tierlist' section */
    padding: 20px; /* Slightly less padding for a tighter look */
}

#gpu-specs-display h3 {
    font-size: 1.6em;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 10px;
    margin-bottom: 15px;
}

.spec-item {
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px dashed var(--border-color); /* Separator between specs */
}

.spec-item:last-child {
    border-bottom: none; /* No border for the last item */
    padding-bottom: 0;
    margin-bottom: 0;
}

.spec-item h4 {
    font-size: 1.2em;
    color: var(--heading-color);
    margin-top: 0;
    margin-bottom: 8px;
}

.spec-item ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.spec-item li {
    margin-bottom: 5px;
    font-size: 0.95em;
    color: var(--text-color);
}

.spec-item li strong {
    color: var(--heading-color); /* Make the key bold and stand out */
}

.specs-note {
    font-size: 0.85em;
    text-align: center;
    color: var(--text-color);
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px dashed var(--border-color);
}

/* Ensure the sidebar itself remains a 'card' */
aside.sidebar {
    /* Ensure existing sidebar styling covers this new content */
    padding-bottom: 25px; /* Add some padding if the new content goes to the very bottom */
}
    });
});
