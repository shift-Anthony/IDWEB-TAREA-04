import { usuarios } from './datos.js';
import { filtrarMayores } from './filtros.js';

const resultado = filtrarMayores(usuarios);

console.log("Lista original:", usuarios);
console.log("Mayores de edad:", resultado);