const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function showLoginMessage() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    if (email.trim() === "" || password.trim() === "") {
        alert("Please Enter your password.");
        return false;
    } else {
      
        document.getElementById("loginForm").action = "index.html"; 
        return true;
    }
}


function signUp() {
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    if (password.trim() === "") {
        alert("Please Enter your password.");
        return false;
    } else {
        alert("Sign up successfully!");
        document.getElementById("Sign-up").action = "index.html"; 
        return true;
    }
}