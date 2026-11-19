// src/tareas.js — lógica de negocio pura
export function contarPendientes(tareas) {
  return tareas.filter((tarea) => !tarea.completada).length;
}

export function contarCompletadas(tareas) {
    return tareas.filter((tarea) => tarea.completada).length;
}