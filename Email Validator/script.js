let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

let emailMsg = document.querySelector("#emailMsg");
let passwordMsg = document.querySelector("#passwordMsg");
let formMsg = document.querySelector("#formMsg");

email.addEventListener("input", () => {
    if (email.value === "") {
        emailMsg.textContent = "Email is required";
        emailMsg.style.color = "red";
        email.style.borderColor = "red";
    } else if (!emailRegex.test(email.value)) {
        emailMsg.textContent = "Invalid email format";
        emailMsg.style.color = "red";
        email.style.borderColor = "red";
    } else {
        emailMsg.textContent = "Looks good!";
        emailMsg.style.color = "green";
        email.style.borderColor = "green";
    }
});

password.addEventListener("input", () => {
    if (password.value === "") {
        passwordMsg.textContent = "Password is required";
        passwordMsg.style.color = "red";
        password.style.borderColor = "red";
    } else if (!passwordRegex.test(password.value)) {
        passwordMsg.textContent = "Must be 8+ chars, 1 uppercase & 1 number";
        passwordMsg.style.color = "red";
        password.style.borderColor = "red";
    } else {
        passwordMsg.textContent = "Strong password!";
        passwordMsg.style.color = "green";
        password.style.borderColor = "green";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let isValid = emailRegex.test(email.value) && passwordRegex.test(password.value);

    if (isValid) {
        formMsg.textContent = "Form submitted successfully!";
        formMsg.className = "form-message success";
        
        form.reset();
        email.style.borderColor = "";
        password.style.borderColor = "";
        emailMsg.textContent = "";
        passwordMsg.textContent = "";
    } else {
        formMsg.textContent = "Please fix the errors before submitting.";
        formMsg.className = "form-message error";
    }
});
