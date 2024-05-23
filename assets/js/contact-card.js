// scripts/main.js

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Generate the contact number value
      this.contact_number.value = (Math.random() * 100000) | 0;

      // Send the email
      emailjs.sendForm("skillwin3@gmail.com", this).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Failed to send the message. Please try again.");
        }
      );
    });
});
