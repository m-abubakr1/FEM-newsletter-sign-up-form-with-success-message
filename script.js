document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reg-form");
  const emailInput = document.getElementById("email");
  const errorSpan = document.querySelector(".error");
  const newsletterCta = document.querySelector(".newsletter-cta");
  const successMesg = document.querySelector(".success-mesg");
  const displayEmail = document.getElementById("display-email");
  const dismissButton = successMesg.querySelector("button");

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (emailRegex.test(email)) {
      errorSpan.style.display = "none";
      displayEmail.textContent = email;

      newsletterCta.classList.add("hide");
      successMesg.classList.remove("hide");
    } else {
      errorSpan.style.display = "block";
      emailInput.classList.add("inputerror");
      errorSpan.classList.add("shake");
    }
  });

  // Handle the Dismiss message button
  dismissButton.addEventListener("click", () => {
    successMesg.classList.add("hide");
    newsletterCta.classList.remove("hide");

    // Reset the form input and error state
    emailInput.value = "";
    errorSpan.style.display = "none";
    emailInput.classList.remove("inputerror");
    errorSpan.classList.remove("shake");
  });
});
