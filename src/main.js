// src/main.js — arranque y orquestación
import "./style.css";
import { estado } from "./estado.js";
import { render } from "./dom.js";

// 1. Muestra los datos estructurados en la consola de DevTools
console.table(estado.tareas);

// 2. Configura el título de la página
const titulo = document.querySelector("h1");
titulo.textContent = "Gestor de tareas";
titulo.classList.add("titulo");

// 3. Renderiza la lista y el resumen
render();
