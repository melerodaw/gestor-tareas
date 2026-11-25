// src/main.js — arranque y orquestación
import "./style.css";
import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";
import { contarCompletadas } from "./tareas.js";

// 1. Muestra los datos estructurados en la consola de DevTools
console.table(estado.tareas);

// 2. Configura el título de la página
const titulo = document.querySelector("h1");
titulo.textContent = "Gestor de tareas";
titulo.classList.add("titulo");

// 3. Calcula las pendientes y muestra un resumen en la página
const pendientes = contarPendientes(estado.tareas);
const resumen = document.querySelector("#resumen");
resumen.textContent = `Tienes ${pendientes} tareas pendientes`;

// 4. Calcula las completadas y añade el conteo al resumen
const completadas = contarCompletadas(estado.tareas);
resumen.textContent += ` y ${completadas} tareas completadas`;

// 5. Crea y modifica varios elementos de demostración
const lista = document.querySelector("#lista");
["Primera tarea demo", "Segunda tarea demo", "Tercera tarea demo"].forEach((texto) => {
  const elemento = document.createElement("li");
  elemento.classList.add("demo");
  elemento.textContent = texto;
  lista.append(elemento);
});

document.querySelectorAll("#lista li.demo").forEach((elemento) => {
  elemento.textContent = `- ${elemento.textContent}`;
});

// getElementById recibe "lista" sin #; # se usa en selectores CSS.
const listaDemo = document.getElementById("lista");
const elementosDemo = listaDemo.getElementsByClassName("demo");

// Error de consola esperado: TypeError: elementosDemo.forEach is not a function.
try {
  elementosDemo.forEach((elemento) => {
    elemento.textContent = elemento.textContent.replace("- ", "✓ ");
  });
} catch (error) {
  console.error(error);
}

Array.from(elementosDemo).forEach((elemento) => {
  elemento.textContent = elemento.textContent.replace("- ", "✓ ");
});

// HTMLCollection es viva; la NodeList de querySelectorAll del reto 2 es estática.
