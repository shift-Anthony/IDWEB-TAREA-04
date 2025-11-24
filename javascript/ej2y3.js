const form = document.getElementById('form');
const input = document.getElementById('text');
const lista = document.getElementById('lista');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    li.textContent = input.value + ' ';
    //boton eliminar
    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = ' Eliminar';

    btnBorrar.addEventListener('click', () => {
        li.remove();
    });
    li.appendChild(btnBorrar);
    lista.appendChild(li);
    input.value = '';
});

const form2 = document.getElementById('form');
const input2 = document.getElementById('text');
const lista2 = document.getElementById('lista');

form2.addEventListener('submit', (e) => {
    e.preventDefault();
    const li2 = document.createElement('li');
    li2.textContent = input2.value + ' ';
    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = 'X';
    btnBorrar.style.color = 'red';
    li.appendChild(btnBorrar);
    lista2.appendChild(li);
    input2.value = '';
});
lista2.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
});