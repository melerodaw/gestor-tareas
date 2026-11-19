// src/main.js — arranque y orquestación
import "./style.css";
import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";
import { contarCompletadas } from "./tareas.js";

// 1. Muestra los datos estructurados en la consola de DevTools
console.table(estado.tareas);

// 2. Calcula las pendientes y muestra un resumen en el contenedor de la página
const pendientes = contarPendientes(estado.tareas);
document.querySelector("#app").textContent = `Tienes ${pendientes} tareas pendientes`;

// 3. Calcula las completadas y añade un resumen al contenedor de la página
const completadas = contarCompletadas(estado.tareas);
document.querySelector("#app").textContent += ` y ${completadas} tareas completadas`;
