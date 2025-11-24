async function obtenerDatos(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const data = await response.json();
        console.log("Éxito (Datos recibidos):", data);

    } catch (error) {console.error("Error en catch ->", error.message); }
}
//Url Correcta
document.getElementById('btnBien').addEventListener('click', () => {
    obtenerDatos('https://jsonplaceholder.typicode.com/users/1');
});

//URL Incorrecta
document.getElementById('btnMal').addEventListener('click', () => {
    obtenerDatos('https://jsonplaceholder.typicode.com/-');
});