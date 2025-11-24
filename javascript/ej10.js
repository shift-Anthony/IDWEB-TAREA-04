const formulario = document.getElementById('formulario');
const mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const datosUsuario = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value
    };
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(datosUsuario),
        headers: { 'Content-type': 'application/json; charset=UTF-8',},})
    .then((response) => response.json())
    .then((data) => {
        mensaje.textContent = `Usuario creado: ${datosUsuario.nombre} - Email: ${datosUsuario.email}`;
        console.log(data)
    })
    .catch((error) => {
        mensaje.textContent = 'Error al enviar los datos.';
        console.error(error);
    });
});