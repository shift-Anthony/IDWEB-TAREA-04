const boton = document.getElementById('btnEnviar');
boton.addEventListener('click', () => {  
    const nuevoPost = {
        title: 'Lista de Usuarios',
        body: 'Contiene nombre y correos',
        userId: 1
    };
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(nuevoPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
});