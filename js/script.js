const submitForm = document.getElementById("contact-form");
const message = document.createElement("p");

submitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  message.textContent = "Message sent. Thank you!";
  submitForm.append(message);
  submitForm.reset();
});
