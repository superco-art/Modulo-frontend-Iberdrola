// Ejercicio 1: "Mi Lista de Deseos"
console.log("--- Mi Lista de Deseos ---");

// Simulación de la entrada de cada alumna (en un entorno real, esto sería interactivo)
const listaDeseosAlumna1 = ["Viajar a Japón", "Aprender a tocar el piano", "Tener un perro"];
const listaDeseosAlumna2 = ["Comprar una bicicleta nueva", "Leer más libros", "Mejorar mi inglés"];
const listaDeseosAlumna3 = ["Ir a un concierto", "Cocinar platos nuevos", "Hacer voluntariado"];

console.log("Lista de deseos de la Alumna 1:", listaDeseosAlumna1);
console.log("Primer deseo:", listaDeseosAlumna1[0]);
console.log("Último deseo:", listaDeseosAlumna1[listaDeseosAlumna1.length - 1]);
console.log("--------------------");

console.log("Lista de deseos de la Alumna 2:", listaDeseosAlumna2);
console.log("Primer deseo:", listaDeseosAlumna2[0]);
console.log("Último deseo:", listaDeseosAlumna2[listaDeseosAlumna2.length - 1]);
console.log("--------------------");

console.log("Lista de deseos de la Alumna 3:", listaDeseosAlumna3);
console.log("Primer deseo:", listaDeseosAlumna3[0]);
console.log("Último deseo:", listaDeseosAlumna3[listaDeseosAlumna3.length - 1]);
console.log("--------------------");

// Ejercicio 2: "Registro de Asistencia"
console.log("\n--- Registro de Asistencia ---");

const listaAsistentes = [];

// Simulación de la llegada de las alumnas
function alumnaDicePresente(nombre) {
  listaAsistentes.push(nombre);
  console.log(`${nombre} ha dicho presente.`);
}

alumnaDicePresente("Ana");
alumnaDicePresente("Beatriz");
alumnaDicePresente("Carla");

console.log("Lista de asistentes:", listaAsistentes);
console.log("Número de asistentes:", listaAsistentes.length);
console.log("--------------------------");

// Ejercicio 3: "Última Canción Escuchada"
console.log("\n--- Última Canción Escuchada ---");

const ultimasCanciones = ["Bohemian Rhapsody", "Imagine", "Hotel California", "Stairway to Heaven", "Like a Rolling Stone"];
console.log("Lista de canciones sonando:", ultimasCanciones);

const ultimaCancionTerminada = ultimasCanciones.pop();
console.log("La última canción que terminó de sonar fue:", ultimaCancionTerminada);
console.log("Lista de canciones restantes:", ultimasCanciones);
console.log("-------------------------------");