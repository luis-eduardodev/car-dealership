const submitForm = document.getElementById("contact-form");
submitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted!");
  submitForm.reset();
});
