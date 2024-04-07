document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', function(event) {

        event.preventDefault();

        const email = form.querySelector('input[name="email"]').value.trim();
        const password = form.querySelector('input[name="password"]').value.trim();


        // Validate Email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }


        // Validate Password
        if (password === '') {
            alert('Please enter a password.');
            return;
        }
        

        // If all validations pass, you can submit the form or perform other actions here
        form.submit();  // Uncomment this line to submit the form
    });
});
