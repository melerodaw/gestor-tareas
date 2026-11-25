import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";

export function render() {
  // Síntoma: TypeError al leer replaceChildren; getElementById("#lista") da null porque espera el id sin #.
  const lista = document.getElementById("lista");
  const resumen = document.querySelector("#resumen");

  // Síntoma: solo queda la última tarea; replaceChildren() dentro del bucle borraba las anteriores en cada vuelta.
  lista.replaceChildren();
  for (const tarea of estado.tareas) {
    const li = document.createElement("li");
    li.textContent = tarea.texto;
    // Síntoma: todas salen tachadas; = true asignaba true y mutaba cada tarea en lugar de comprobarla.
    if (tarea.completada) {
      li.classList.add("completada");
    }
    lista.append(li);
  }

  // Síntoma: el resumen muestra el código de la función; sin llamada no se calcula el número de pendientes.
  resumen.textContent = `Tienes ${contarPendientes(estado.tareas)} tareas pendientes`;
}
