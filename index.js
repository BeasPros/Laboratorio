const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

const nameErrorMessage = document.getElementById('name-error');
const emailErrorMessage = document.getElementById('email-error');
const passwordErrorMessage = document.getElementById('password-error');
const confirmPasswordErrorMessage = document.getElementById('confirm-password-error');

const submitButton = document.getElementById("btn-submit");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateName() {
    if (nameInput.checkValidity()) {
        setValid(nameInput);
        nameErrorMessage.innerHTML = "";
    } else {
        setInvalid(nameInput)
        if (isEmpty(nameInput)) {
            nameErrorMessage.innerHTML = "Rellene este campo";
        } else {
            nameErrorMessage.innerHTML = "El nombre solo puede contener texto";
        }
    }
    refreshSubmitButton()
}

function validateEmail() {
    let email = emailInput.value;
    if (email == "") {
        setInvalid(emailInput);
        emailErrorMessage.innerHTML = "Rellene este campo";
    } else if (emailRegex.test(email)) {
        setValid(emailInput);
        emailErrorMessage.innerHTML = "";
    } else {
        setInvalid(emailInput);
        emailErrorMessage.innerHTML = "Email inválido";
    }
    refreshSubmitButton()
}

function validatePassword() {
    if (passwordInput.checkValidity()) {
        setValid(passwordInput);
        passwordErrorMessage.innerHTML = "";
        validateConfirmPassword();
    } else {
        setInvalid(passwordInput);
        if (isEmpty(passwordInput)) {
            passwordErrorMessage.innerHTML = "Rellene este campo";
        } else {
            passwordErrorMessage.innerHTML = "La contraseña debe tener al menos 8 carácteres";
        }
    }
    refreshSubmitButton()
}

function validateConfirmPassword() {
    if (passwordMatches()) {
        setValid(confirmPasswordInput);
        confirmPasswordErrorMessage.innerHTML = "";
    }
    else {
        setInvalid(confirmPasswordInput);
        if (isEmpty(confirmPasswordInput)) {
            confirmPasswordErrorMessage.innerHTML = "Rellene este campo";
        } else {
            confirmPasswordErrorMessage.innerHTML = "Las contraseñas no coinciden";
        }
    }
    refreshSubmitButton()
}

function refreshSubmitButton() {
    if (isFormValid()) {
        submitButton.disabled = false;
        submitButton.removeAttribute("title");
    } else {
        submitButton.disabled = true;
        submitButton.setAttribute("title", "Rellene correctamente todos los campos");
    }
}

function submitForm(event) {
    event.preventDefault()
    if (isFormValid()) {
        alert("La inscripción ha sido correcta");
    }
    return false;
}

function passwordMatches() {
    return confirmPasswordInput.value == passwordInput.value;
}

function isEmpty(element) {
    return element.value == "";
}

function isFormValid() {
    return isValid(nameInput) && isValid(emailInput) && isValid(passwordInput) && isValid(confirmPasswordInput);
}

function isValid(element) {
    return element.classList.contains("valid");
}

function setValid(element) {
    element.classList.remove("invalid");
    element.classList.add("valid");
}

function setInvalid(element) {
    element.classList.add("invalid");
    element.classList.remove("valid");
}


