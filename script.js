document.getElementById("reg-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let phone = document.getElementById("phone").value.trim();
  
    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");
    let phoneError = document.getElementById("phone-error");
  
    let valid = true; // Track if all fields are valid
  
    // Name Validation
    if (name.length < 3) {
      nameError.textContent = "Name must be at least 3 characters.";
      valid = false;
    } else {
      nameError.textContent = "";
    }
  
    // Email Validation
    let emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = "Enter a valid email.";
      valid = false;
    } else {
      emailError.textContent = "";
    }
  
    // Password Validation
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
      passwordError.textContent = "Password must have 8+ chars, 1 uppercase, and 1 number.";
      valid = false;
    } else {
      passwordError.textContent = "";
    }
  
    // Phone Number Validation
    let phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      phoneError.textContent = "Phone must be 10 digits.";
      valid = false;
    } else {
      phoneError.textContent = "";
    }
  
    // If all fields are valid, submit the form
    if (valid) {
      alert("Form Submitted Successfully!");
      this.submit(); // Proceed with form submission
    }
  });
  