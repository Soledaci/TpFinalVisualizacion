document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        window.location.href = "../VIEW/home.html";
    } else {
        alert("Por favor completa todos los campos.");
    }
});