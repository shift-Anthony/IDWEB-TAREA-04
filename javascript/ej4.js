const personas = [
    { nombre: "Lucía", edad: 25 },
    { nombre: "Marcos", edad: 18 },
    { nombre: "Juan", edad: 32 },
    { nombre: "Elena", edad: 22 },
    { nombre: "Pedro", edad: 40 }
];

const tbody = document.getElementById('tabla');
const boton = document.getElementById('btnOrdenar');
let esAscendente = true;

function renderizar() {
    tbody.innerHTML = ''; 

    personas.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${p.nombre}</td><td>${p.edad}</td>`;
        tbody.appendChild(tr);
    });
}
//ascendente o descendente
boton.addEventListener('click', () => {
    if (esAscendente) {
        personas.sort((a, b) => a.edad - b.edad);
        boton.textContent = 'Ordenar por Edad (Descendente)';
    } else {
        personas.sort((a, b) => b.edad - a.edad);
        boton.textContent = 'Ordenar por Edad (Ascendente)';
    }
    esAscendente = !esAscendente;
    renderizar(); 
});

// Carga inicial
renderizar();