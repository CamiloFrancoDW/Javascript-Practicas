// Objeto Math es un objeto estatico y tenemos que usar su nombre para ultilizarlo.

console.log(Math.E);
console.log(Math.PI);

let num = 5.2;

console.log(Math.abs(num)); // Devuelve el valor absoluto de la variable. Nos devuelve el numero de la variable eliminando el signo - o +.

console.log(Math.ceil(num)); // Devuelve el entero mas grande mayor o igual que un numero. Redondea para arriba.

console.log(Math.floor(num)); // Devuelve el entero mas pequeño mayor o igual que un numero. Redondea para abajo.


console.log(Math.pow(2,3)); // Devuelve la potencia de x elevada a la y (x, y).

console.log(Math.round(Math.random()*100)); // Genera un nro pseudoaleatorio entre 0 y 1. Si queremos que no de un nro de 0 a 100, tenmos que multiplicar el random * 100. Con Math.round() podemos redondear el nro que nos da random. 

console.log(Math.round(Math.random() * (14 - 1) + 1 )); //console.log(Math.round(Math.random()* (max - min) + min )); Si queremos que nos de un valor aleatorio entre dos nros. 

console.log(Math.round(num)); // Devuelve el valor de un nro redondeado al entero mas cercano.

console.log(Math.sign(num)); // Devuelve el signo de la variable indicando si es negativa o positiva. Devuelve tres valores -1 | 0 | 1 // Negativo | Neutro | Positivo


console.log(Math.sqrt(num)); // Devuelve la raiz cuadrada de la variable.


