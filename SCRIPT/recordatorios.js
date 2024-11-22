
const recordatorioForm = document.querySelector("form");
const fechaRecordatorioInput = document.getElementById("fechaRecordatorio");
const descripcionRecordatorioInput = document.getElementById("descripcionRecordatorio");

const recordatorioFechaResumen = document.getElementById("recordatorioFechaResumen");
const recordatorioDescripcionResumen = document.getElementById("recordatorioDescripcionResumen");

recordatorioForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    
    const fecha = fechaRecordatorioInput.value;
    const descripcion = descripcionRecordatorioInput.value;

    if (!fecha || !descripcion) {
        alert("Por favor, completa todos los campos antes de agregar el recordatorio.");
        return;
    }

    recordatorioFechaResumen.textContent = fecha;
    recordatorioDescripcionResumen.textContent = descripcion;

    const modal = new bootstrap.Modal(document.getElementById("resumenRecordatorioModal"));
    modal.show();

    recordatorioForm.reset();
});
