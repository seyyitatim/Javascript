const from = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");


from.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(username.value);

    if (username.value === "") {
        username.className = "form-control is-invalid"
    }
    else {
        username.className = "form-control is-valid"
    }
})