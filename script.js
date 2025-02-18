document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector("form").addEventListener("submit", function(event) {
    const name = document.querySelector('input[name="Name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="Message"]').value;
    
    if (!name || !email || !message) {
        event.preventDefault();
        alert("Please fill out all fields!");
    } else if (!validateEmail(email)) {
        event.preventDefault();
        alert("Please enter a valid email address.");
    }
});

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const emailBody = `Name: ${name}%0AEmail: ${email}%0AMessage:%0A${message}`;

    const mailtoLink = `mailto:abhayag41@gmail.com?subject=Message from Portfolio&body=${emailBody}`;

    window.location.href = mailtoLink;
});
