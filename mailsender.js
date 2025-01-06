import emailjs from 'emailjs-com';

// Access environment variables
const EMAILJS_USER_ID = process.env.EMAILJS_USER_ID;
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;

// Initialize EmailJS
emailjs.init(EMAILJS_USER_ID);

// Form submit event
document.getElementById("sendformid").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData.entries());


    const emailParams = {
        fullname: formObject.fullname,
        subject: formObject.subject,
        email: formObject.email,
        number: formObject.number,
        message: formObject.message,
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailParams)
        .then(function(response) {
            console.log('Email Sent Successfully:', response);
            alert('Your message has been sent!');
        })
        .catch(function(error) {
            console.error('Error sending email:', error);
            alert('Error sending the message: ' + JSON.stringify(error)); // Improved error logging
        });
});
