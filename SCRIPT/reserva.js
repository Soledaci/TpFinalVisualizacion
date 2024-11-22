
const form = document.querySelector("form");
const especialidadInput = document.getElementById("especialidad");
const fechaInput = document.getElementById("fecha");
const horaInput = document.getElementById("hora");

const resumenEspecialidad = document.getElementById("resumenEspecialidad");
const resumenFecha = document.getElementById("resumenFecha");
const resumenHora = document.getElementById("resumenHora");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const especialidad = especialidadInput.value;
    const fecha = fechaInput.value;
    const hora = horaInput.value;

    if (!especialidad || !fecha || !hora) {
        alert("Por favor, completa todos los campos antes de reservar.");
        return;
    }

    resumenEspecialidad.textContent = especialidad;
    resumenFecha.textContent = fecha;
    resumenHora.textContent = hora;

    const modal = new bootstrap.Modal(document.getElementById("resumenModal"));
    modal.show();
});
