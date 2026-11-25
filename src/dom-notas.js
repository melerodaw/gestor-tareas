import { alumnos, calcularMedia, contarAprobados } from "./notas.js";

export function renderNotas() {
  const lista = document.querySelector("#lista-notas");
  const contenedorTabla = document.querySelector("#tabla-notas");
  const resumen = document.querySelector("#resumen-notas");
  const alumnosOrdenados = [...alumnos].sort((a, b) => b.nota - a.nota);

  lista.replaceChildren();
  contenedorTabla.replaceChildren();

  const tabla = document.createElement("table");
  const cabecera = document.createElement("thead");
  const filaCabecera = document.createElement("tr");

  ["Alumno", "Nota"].forEach((texto) => {
    const celda = document.createElement("th");
    celda.scope = "col";
    celda.textContent = texto;
    filaCabecera.append(celda);
  });

  cabecera.append(filaCabecera);
  tabla.append(cabecera);

  const cuerpo = document.createElement("tbody");

  alumnosOrdenados.forEach((alumno) => {
    const claseEstado = alumno.nota >= 5 ? "aprobado" : "suspenso";
    const elementoLista = document.createElement("li");
    elementoLista.classList.add(claseEstado);
    elementoLista.textContent = `${alumno.nombre} — ${alumno.nota}`;
    lista.append(elementoLista);

    const fila = document.createElement("tr");
    fila.classList.add(claseEstado);

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = alumno.nombre;
    const celdaNota = document.createElement("td");
    celdaNota.textContent = String(alumno.nota);

    fila.append(celdaNombre, celdaNota);
    cuerpo.append(fila);
  });

  tabla.append(cuerpo);
  contenedorTabla.append(tabla);

  resumen.textContent =
    `Media: ${calcularMedia(alumnos).toFixed(1)} · Aprobados: ${contarAprobados(alumnos)} de ${alumnos.length}`;
}
