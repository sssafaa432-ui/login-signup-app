document.addEventListener("DOMContentLoaded", () => {

  // SIGN UP
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const hasNumber = /\d/.test(password);

      if (password.length < 10 || !hasNumber) {
        alert("Password must be at least 10 characters and include a number.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Signup successful
      window.location.href = "welcome.html";
    });
  }

  // LOGIN
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "welcome.html";
    });
  }

  // FORGOT PASSWORD
  const forgotForm = document.getElementById("forgotForm");
  if (forgotForm) {
    forgotForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      if (email.includes("@")) {
        window.location.href = "verify.html";
      } else {
        alert("Please enter a valid email.");
      }
    });
  }

  // VERIFY CODE
  const verifyForm = document.getElementById("verifyForm");
  if (verifyForm) {
    verifyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "reset.html";
    });
  }

  // RESET PASSWORD
  const resetForm = document.getElementById("resetForm");
  if (resetForm) {
    resetForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const newPassword = document.getElementById("newPassword").value;
      const confirmNewPassword = document.getElementById("confirmNewPassword").value;

      const hasNumber = /\d/.test(newPassword);

      if (newPassword.length < 10 || !hasNumber) {
        alert("Password must be at least 10 characters and include a number.");
        return;
      }

      if (newPassword !== confirmNewPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Reset complete → go to welcome page
      window.location.href = "welcome.html";
    });
  }

});





