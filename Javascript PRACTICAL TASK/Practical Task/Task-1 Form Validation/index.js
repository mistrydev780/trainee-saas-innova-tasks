function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confpassword").value;

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById("confpassword-error");

   
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";


    nameError.style.color = "red";
    emailError.style.color = "red";
    passwordError.style.color = "red";
    confirmPasswordError.style.color = "red";

    let isValid = true;

    const nameRegex = /^[a-zA-Z\s\-']+$/;
    if (name === "") {
        nameError.textContent = "Name Cannot be empty.";
        isValid = false;
    } else if (name.length < 3 || name.length > 50) {
        nameError.textContent = "Name must be between 3 and 50 characters.";
        isValid = false;
    } else if (!nameRegex.test(name)) {
        nameError.textContent = "Name can only contain letters, spaces, hyphens, or apostrophes.";
        isValid = false;
    } else {
        nameError.textContent = "Valid Name";
        nameError.style.color = "green";
    }

   
    if (email === "" || !email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "Valid Email";
        emailError.style.color = "green";
    }


    if (password === "" || password.length < 6) {
        passwordError.textContent = "Please enter a password with at least 6 characters.";
        isValid = false;
    } else {
        passwordError.textContent = "Valid Password";
        passwordError.style.color = "green";
    }


    if (confirmPassword === "") {
         confirmPasswordError.textContent = "Please confirm your password.";
         isValid = false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false; 
    } else {
        confirmPasswordError.textContent = "Valid Password Match";
        confirmPasswordError.style.color = "green";
    }

    
    if (isValid) {
        alert("Form submitted successfully!");
       
        return true;
    } else {
        return false;
    }
}
