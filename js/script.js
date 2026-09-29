const submitForm = document.getElementById("contact-form");
const message = document.createElement("p");

message.classList.add("message-sent");

let messageTimer;

submitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  message.textContent = "Message sent. Thank you!";
  submitForm.append(message);
  clearTimeout(messageTimer);
  messageTimer = setTimeout(function () {
    message.remove();
  }, 3000);
  submitForm.reset();
});
