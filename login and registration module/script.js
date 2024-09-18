// Toggle between login and register forms
var loginForm = document.getElementById("login");
var registerForm = document.getElementById("register");
var btn = document.getElementById("btn");

function register() {
    loginForm.style.left = "-400px";
    registerForm.style.left = "50px";
    btn.style.left = "110px";
}

function login() {
    loginForm.style.left = "50px";
    registerForm.style.left = "450px";
    btn.style.left = "0px";
}

// Handle registration (client-side only)
function registerUser() {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (username === "" || email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    console.log("User Registered Successfully!");
    alert("Registration successful!");
}

// Handle login (client-side only)
function loginUser() {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    console.log("Login Successful!");
    alert("Login successful!");
}
