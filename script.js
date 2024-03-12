function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;

  if (name.trim() === "" || email.trim() === "" || phone.trim() === "" || password.trim() === "") {
    alert("All fields are required!");
    return false;
  }

  // Additional email and phone validation using regex
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phoneRegex = /^[0-9]{10}$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return false;
  }

  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit phone number!");
    return false;
  }

  // Additional password validation
  if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
    return false;
  }

  // If all validations pass, the form will be submitted
  return true;
}
