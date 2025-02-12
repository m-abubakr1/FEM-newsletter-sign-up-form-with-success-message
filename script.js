document
  .getElementById("reg-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById("email").value.trim();
    let emailError = document.getElementsByClassName(".error");

    let valid = true; // Track if all fields are valid

    // Email Validation
    let emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = "Enter a valid email.";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    // If all fields are valid, submit the form
    if (valid) {
      alert("Form Submitted Successfully!");
      this.submit(); // Proceed with form submission
    }
  });
