// src/main.js — arranque y orquestación
import "./style.css";
import { estado } from "./estado.js";
import { render } from "./dom.js";
import { renderNotas } from "./dom-notas.js";

// 1. Muestra los datos estructurados en la consola de DevTools
console.table(estado.tareas);

// 2. Configura el título de la página
const titulo = document.querySelector("h1");
titulo.textContent = "Gestor de tareas";
titulo.classList.add("titulo");

// 3. Renderiza la lista y el resumen
render();
renderNotas();

/*
Predicción antes de ejecutar:
A: 0 0
B: 1 0
C: Gestor 1
D: null
Texto visible del li nuevo: <b>Nueva</b>

Comparación: las cuatro líneas coincidieron; no hubo predicciones fallidas.
A empieza en 0 0 porque todavía no hay elementos con la clase prueba.
B es 1 0 porque la HTMLCollection es viva y la NodeList de querySelectorAll es estática.
C es Gestor 1 porque innerHTML crea un elemento em y textContent devuelve su texto.
D es null porque getElementById espera el id sin el prefijo #.
El li muestra <b>Nueva</b> literalmente porque textContent no interpreta HTML.

const lista = document.querySelector("#lista");

const vivos = document.getElementsByClassName("prueba");
const foto = document.querySelectorAll(".prueba");
console.log("A:", vivos.length, foto.length);

const li = document.createElement("li");
li.className = "prueba";
li.textContent = "<b>Nueva</b>";
lista.append(li);
console.log("B:", vivos.length, foto.length);

const h1 = document.querySelector("h1");
h1.innerHTML = "<em>Gestor</em>";
console.log("C:", h1.textContent, h1.children.length);

console.log("D:", document.getElementById("#lista"));
*/
