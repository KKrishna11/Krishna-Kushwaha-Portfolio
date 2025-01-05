// Add event listener to the form submit action
// 0ee5d62e-c3b6-40aa-9606-97f769b76c19
// krishna.kushwaha2312@gmail.com

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("sendformid");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      const formData = new FormData(event.target);
      const formObject = Object.fromEntries(formData.entries());

      console.log("Form Data:", formObject);

      const emailParams = {
        SecureToken: "0ee5d62e-c3b6-40aa-9606-97f769b76c19", // Replace with your SMTP.js SecureToken
        To: "krishna.kushwaha2312@gmail.com", // Replace with the recipient's email address
        From: formObject.email,
        Subject: `Message from ${formObject.fullname} - ${formObject.subject}`,
        Body: `
                        Name: ${formObject.fullname}<br>
                        Email: ${formObject.email}<br>
                        Phone: ${formObject.number}<br>
                        Subject: ${formObject.subject}<br><br>
                        Message:<br>${formObject.message}
                    `,
      };

      Email.send(emailParams)
        .then(function (response) {
          console.log("Email Sent Successfully:", response);
          alert("Your message has been sent successfully!");
        })
        .catch(function (error) {
          console.error("Error sending email:", error);
          alert("Error sending the message: " + error);
        });
    });
  } else {
    console.log("Form not found.");
  }
});
