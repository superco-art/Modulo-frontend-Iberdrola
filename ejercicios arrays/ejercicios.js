let colores = ["rojo", "azul", "verde"];
let numeros = [10, 20, 30, 40, 50];
let mezclado = [true, "hola", 5]; // ¡Pueden tener diferentes tipos!
let vacio = []; // Un array vacío

console.log(colores[0]); // Mostrará "rojo" (el elemento en el índice 0)
console.log(colores[1]); // Mostrará "azul" (el elemento en el índice 1)
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas.length); // Mostrará 3
let listaSuper = ["pan", "leche"];
listaSuper.push("huevos"); // Ahora listaSuper es ["pan", "leche", "huevos"]
listaSuper.push("manzanas"); // Ahora listaSuper es ["pan", "leche", "huevos", "manzanas"]
console.log(listaSuper);
let tareasPendientes = ["lavar platos", "hacer la cama", "estudiar"];
let ultimaTarea = tareasPendientes.pop(); // ultimaTarea será "estudiar", y tareasPendientes ahora es ["lavar platos", "hacer la cama"]
console.log("Tarea completada:", ultimaTarea);