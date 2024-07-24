// Example of form validation for login and signup forms
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form[action="/login"]');
    const signupForm = document.querySelector('form[action="/signup"]');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            const email = loginForm.querySelector('#email').value;
            const password = loginForm.querySelector('#password').value;

            if (!email || !password) {
                alert('Please fill in all fields.');
                event.preventDefault(); // Prevent form submission
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            const name = signupForm.querySelector('#name').value;
            const email = signupForm.querySelector('#email').value;
            const password = signupForm.querySelector('#password').value;

            if (!name || !email || !password) {
                alert('Please fill in all fields.');
                event.preventDefault(); // Prevent form submission
            }
        });
    }

    // Highlight active navigation link
    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

