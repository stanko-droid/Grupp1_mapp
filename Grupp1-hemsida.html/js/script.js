// Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const formContainer = document.getElementById('registration-form-container');
    const successMessage = document.getElementById('success-message');
    const registeredEmail = document.getElementById('registered-email');

    // Handle form submission
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const company = document.getElementById('company').value;
        const phone = document.getElementById('phone').value;

        // Validate email format
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Update success message with user's email
        registeredEmail.textContent = email;

        // Hide form and show success message
        formContainer.style.display = 'none';
        successMessage.style.display = 'flex';

        // Optional: Log the form data (for debugging)
        console.log('Registration received:');
        console.log('Name:', fullname);
        console.log('Email:', email);
        console.log('Company:', company);
        console.log('Phone:', phone);
    });

    // --- Snowfall: create gentle falling snowflakes ---
    (function startSnowfall() {
        const maxFlakes = 60;
        let flakesCount = 0;

        function createFlake() {
            if (flakesCount >= maxFlakes) return;
            flakesCount++;
            const flake = document.createElement('div');
            flake.className = 'snowflake';
            flake.textContent = '❄';

            // Random horizontal start
            const left = Math.random() * 100; // percent
            flake.style.left = left + 'vw';

            // Random size
            const size = 8 + Math.random() * 20; // px
            flake.style.fontSize = size + 'px';

            // Random animation duration (slower for larger flakes for depth)
            const duration = 8 + Math.random() * 20; // seconds
            flake.style.animation = `fall ${duration}s linear forwards`;

            // small horizontal sway by CSS transform over time (via animationend removal)
            flake.style.opacity = 0.8 + Math.random() * 0.2;

            document.body.appendChild(flake);

            // Remove after animation to keep DOM light
            flake.addEventListener('animationend', function() {
                flake.remove();
                flakesCount--;
            });
        }

        // initial burst
        for (let i = 0; i < 20; i++) {
            setTimeout(createFlake, i * 300);
        }

        // continuous spawn
        setInterval(function() {
            createFlake();
        }, 600);
    })();
});

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Reset form and show form again
function resetForm() {
    const registrationForm = document.getElementById('registration-form');
    const formContainer = document.getElementById('registration-form-container');
    const successMessage = document.getElementById('success-message');

    // Reset form fields
    registrationForm.reset();

    // Show form and hide success message
    formContainer.style.display = 'block';
    successMessage.style.display = 'none';

    // Scroll to form
    document.getElementById('registration-section').scrollIntoView({ behavior: 'smooth' });
}
