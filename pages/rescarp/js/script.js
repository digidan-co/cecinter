//Código para enviar los datos a Google Sheets

let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycby51uaw2z_7qgWk_6m8DUEVrikSN-ZaeBPAD0Mjh8CCIWHLFfCNR3WD-p1gerFBeQTBWA/exec', {
    method: "POST",
    body:data
})

})

//Código para aparecer el modal de registro exitoso después de clickear en el boton de submit.

const enviar = document.getElementById('enviar');
const modal = document.getElementById('modal');
const modalError = document.getElementById('modalerror');
const volvera = document.getElementById('volvera');
const volver = document.getElementById('volver');

enviar.addEventListener('click', () => {
modal.classList.add('mostrar__modal');
});

volver.addEventListener('click', () => {
modal.classList.remove('mostrar__modal');
});
