function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === "geraldpius" && password === "geraldwiz") {
        window.location.href = "pages/index.html";
    } else {
        alert("Incorrect username or password. Please try again");
    }
}