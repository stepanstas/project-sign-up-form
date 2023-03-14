const form = document.querySelector("#sign-up-form");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const errorMessages = Array.from(document.querySelectorAll(".error-msg"));

const isValidName = (name) => /^[A-Za-z\s]+$/.test(name) && name.length > 2;
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone) => /^\d{3}-\d{3}-\d{4}$/.test(phone);
const isValidPassword = (password) => /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);

const clearError = (input, index) => {
    errorMessages[index].textContent = "";
    input.style.border = "";
    input.style.backgroundColor = "";
}

firstName.addEventListener("input", () => {
    if (!isValidName(firstName.value.trim())) {
      errorMessages[0].textContent = "Please enter a valid first name";
      firstName.style.border = "3px solid #ff0000";
      firstName.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
    } else {
      clearError(firstName, 0);
    }
});

lastName.addEventListener("input", () => {
    if (!isValidName(lastName.value.trim())) {
      errorMessages[1].textContent = "Please enter a valid last name";
      lastName.style.border = "3px solid #ff0000";
      lastName.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
    } else {
      clearError(lastName, 1);
    }
});

email.addEventListener("input", () => {
    if (!isValidEmail(email.value.trim())) {
      errorMessages[2].textContent = "Please enter a valid email address";
      email.style.border = "3px solid #ff0000";
      email.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
    } else {
      clearError(email, 2);
    }
});

phone.addEventListener("input", () => {
    if (!isValidPhone(phone.value.trim())) {
      errorMessages[3].textContent = "Please enter a valid format XXX-XXX-XXXX";
      phone.style.border = "3px solid #ff0000";
      phone.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
    } else {
      clearError(phone, 3);
    }
});

password.addEventListener("input", () => {
    if (!isValidPassword(password.value.trim())) {
      errorMessages[4].textContent = "Password must have at least 8 characters, one uppercase letter, one lowercase letter, and one number or special character)";
      password.style.border = "3px solid #ff0000";
      password.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
    } else {
      clearError(password, 4);
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;

    if(firstName.value.trim() === "" || firstName.value.trim() === null) {
        firstName.style.border = "3px solid #ff0000";
        firstName.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        errorMessages[0].textContent = "Please enter a first name";
        isValid = false;
    } else {
        errorMessages[0].textContent = "";
        firstName.style.border = "";
        firstName.style.backgroundColor = "";
    }

    if(lastName.value.trim() === "" || lastName.value.trim() === null) {
        lastName.style.border = "3px solid #ff0000";
        lastName.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        errorMessages[1].textContent = "Please enter a last name";
        isValid = false;
    } else {
        errorMessages[1].textContent = "";
        lastName.style.border = "";
        lastName.style.backgroundColor = "";
    }

    if(!isValidEmail(email.value.trim())) {
        email.style.border = "3px solid #ff0000";
        email.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        errorMessages[2].textContent = "Please enter a valid email address";
        isValid = false;
    } else {
        errorMessages[2].textContent = "";
        email.style.border = "";
        email.style.backgroundColor = "";
    }
    
    if(!isValidPhone(phone.value.trim())) {
        phone.style.border = "3px solid #ff0000";
        phone.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        errorMessages[3].textContent = "Please enter a valid format XXX-XXX-XXXX";
        isValid = false;
    } else {
        errorMessages[3].textContent = "";
        phone.style.border = "";
        phone.style.backgroundColor = "";
    }
    
    if(!isValidPassword(password.value.trim())) {
        password.style.border = "3px solid #ff0000";
        password.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        errorMessages[4].textContent = "Password must have at least 8 characters, one uppercase letter, one lowercase letter, and one number or special character)";
        isValid = false;
    } else {
        errorMessages[4].textContent = "";
        password.style.border = "";
        password.style.backgroundColor = "";

    }
    
    // Handle error messages
    if (!isValid) {
        // Display error messages to the user
        errorMessages.forEach((message) => {
            message.style.display = "block";
        });
    } else {
        errorMessages.forEach((message) => {
            message.style.display = "";
        });
        form.submit();
    }
});
