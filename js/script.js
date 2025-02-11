// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const button = document.createElement("button");
    button.innerText = "Click to See My Hobbies";
    button.classList.add("btn", "btn-info");
    document.querySelector("#about").appendChild(button);

    button.addEventListener("click", function () {
        alert("My hobbies include reading, coding, and playing basketball!");
    });
});

// JavaScript for Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return; // Stop submission if fields are empty
    }

    // Simulate message sending (replace with actual backend code if needed)
    setTimeout(function() {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset(); // Clear the form
    }, 500); // Simulate delay for better user experience
});

