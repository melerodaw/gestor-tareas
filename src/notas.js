export const alumnos = [
  { nombre: "Ana", nota: 7.5 },
  { nombre: "Luis", nota: 4.2 },
  { nombre: "Marta", nota: 9 },
  { nombre: "Pablo", nota: 5 },
  { nombre: "Sara", nota: 3.8 },
];

export function calcularMedia(alumnos) {
  if (alumnos.length === 0) {
    return 0;
  }

  const suma = alumnos.reduce((total, alumno) => total + alumno.nota, 0);
  return suma / alumnos.length;
}

export function contarAprobados(alumnos) {
  return alumnos.filter((alumno) => alumno.nota >= 5).length;
}
