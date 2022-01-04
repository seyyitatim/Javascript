const from = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");


from.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(username.value);

    checkValidation();

})

function checkRequired(inputs) {

    inputs.forEach(function (input) {
        if (input.value === "") {
            error(input, `${input.id} is required`);
        }
        else {
            success(input)
        }
    });
}

function checkEmail(email) {
    if (!validateEmail(email.value)) {
        error(email, "please enter available email");
    }
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} length must be at least ${min} characters`);
    }
    else if (input.value.length > max) {
        error(input, `${input.id} length must not exceed ${max} characters`);
    }
    else {
        success(input)
    }
}

function checkPasswords(input1, input2){
    if(input1.value !== input2.value){
        error(input2,"Passwords do not match");
        error(input1,"Passwords do not match");
    }
}

function checkValidation() {
    var inputs = [username, email, password, repassword]
    checkRequired(inputs);
    checkEmail(email);
    checkLength(username,5,20);
    checkPasswords(password,repassword);

}

function error(input, message) {
    input.className = "form-control is-invalid";
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback";
}

function success(input) {
    input.className = "form-control is-valid"
}

function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};