
/* Validating User Input *************************/
document.querySelector('form').addEventListener('submit', function(event) {
    const firstName = document.getElementById('first-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const gender = document.getElementById('gender').value;

    if (!firstName || !email || !password || !gender) {
        event.preventDefault(); // Prevent form submission
        alert('All fields are required!');
    } else if (!validateEmail(email)) {
        event.preventDefault();
        alert('Please enter a valid email!');
    } else if (!validatePassword(password)) {
        event.preventDefault();
        alert('Password must contain at least one uppercase letter, one number, and one special character!');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
}
/************ end Validation of User Input */

/* Protect against Cross-Site Scripting (XSS) ans Sanatizing  User Input*/
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.innerText = input;
    return div.innerHTML;
}

document.querySelector('form').addEventListener('submit', function(event) {
    const bio = document.getElementById('bio').value;
    const sanitizedBio = sanitizeInput(bio);

    console.log('Sanitized Bio:', sanitizedBio);
    // Send sanitizedBio to the server
});
/* End XSS and Sanatizing ***************************/

