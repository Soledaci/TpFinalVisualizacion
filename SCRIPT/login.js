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

document.getElementById("registroForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;

    if (!email || !password || !nombre || !apellido) {
        let missingFields = [];
        if (!email) missingFields.push("Correo Electrónico");
        if (!password) missingFields.push("Contraseña");
        if (!nombre) missingFields.push("Nombre");
        if (!apellido) missingFields.push("Apellido");
        alert(`Por favor completa los siguientes campos: ${missingFields.join(", ")}`);
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor ingresa un correo electrónico válido.");
        return;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    window.location.href = "../VIEW/login.html";
});
