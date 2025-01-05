// Add event listener to the form submit action
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Collect the form data
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries()); // Convert form data to a plain object
  
    // b41d8df0-414e-4e4f-9c72-c84f790ffcb0 
    // 0ee5d62e-c3b6-40aa-9606-97f769b76c19 
    // Prepare email parameters
    const emailParams = {
      SecureToken: "0ee5d62e-c3b6-40aa-9606-97f769b76c19 ", // Replace with your SMTP.js secure token
      To: 'krishna.kushwaha2312@gmail.com', // Replace with the recipient's email address
      From: formObject.email,
      Subject: `Message from ${formObject.fullname} - ${formObject.subject}`,
      Body: `
        Name: ${formObject.fullname}<br>
        Email: ${formObject.email}<br>
        Phone: ${formObject.number}<br>
        Subject: ${formObject.subject}<br><br>
        Message:<br>${formObject.message}
      `
    };
  
    // Send the email using SMTP.js
    Email.send(emailParams)
      .then(function(response) {
        alert('Message sent successfully!');
      })
      .catch(function(error) {
        alert('Failed to send message: ' + error);
      });
  });
  