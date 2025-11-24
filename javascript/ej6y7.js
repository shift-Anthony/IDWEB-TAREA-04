const url = 'https://jsonplaceholder.typicode.com/users';
const lista = document.getElementById('listaUsuarios');

fetch(url)
    .then(response => response.json())
    .then(usuarios => {
        usuarios.forEach(usuario => {
            console.log(usuario.name);
            const li = document.createElement('li');
            //Ejercicio 7
            li.textContent = `${usuario.name} - ${usuario.email}`;
            lista.appendChild(li);
        });
    })
    .catch(error => console.error('error:', error));