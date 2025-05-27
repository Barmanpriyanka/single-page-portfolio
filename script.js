document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("response-message").textContent = "Thank you for your message!";
    this.reset();
  });
  