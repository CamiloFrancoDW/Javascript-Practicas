/***
 * Condicionales
 */


let numero = 5;

if(numero > 2)console.log( `${numero} es mayor a 2`);


let numeros = -106;

if(numeros < 2){
    console.log( `${numeros} es menor a 2`);
}else {
    console.log( `${numeros} es mayor a 2`);
}


let num1 = 500;
let num2 = -1;

if (num1 > 0) {

    if (num2 > 0) {
        console.log(`${num1} y ${num2} son mayores que 0`);
    } else if (num2<0) {
        console.log(`${num1} es mayor que 0 y ${num2} es menor que 0`);
    } else{
        console.log(`${num1} es mayor que 0 y ${num2} es igual que 0`);
    }  
}else if (num1<0) {
    if (num2>0) {
        console.log(`${num1} es menor que 0 y ${num2} es mayor que 0`);
    }else if (num2<0) {
        console.log(`${num1} y ${num2} son menores que 0`);
    }else{
        console.log(`${num1} es menor que 0 y ${num2} es igual a 0`);
    }
}else{
    if (num2>0) {
        console.log(`${num1} es igual a 0 y ${num2} es mayor que 0`);
    }else if (num2<0) {
        console.log(`${num1} es igual a 0 y ${num2} es menor que 0`);
    } else{
        console.log(`${num1} y ${num2} son iguales a 0`);
    }
}


let word = 'Hola';

if (word.length == 4) {
    console.log(`${word}, cómo va?`);
}


/***
 * Permutaciones con tres elementos.
 */

const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = prompt('Ingresá el primer número.');
let b = prompt('Ingresá el segundo número.');
let c = prompt('Ingresá el tercer número.');

numbers.textContent = `Los números ingresados son ${a}, ${b} y ${c}.`;


if (a >= b && a >= c) { //asi se si a es el mayor de los tres.
    if (b>c) {
        result.textContent = `El orden es: ${a}, ${b} y ${c}`;
    }else{
        result.textContent = `El orden es: ${a}, ${c} y ${b}`;
    }
}else if(b >= a && b >= c){
    if (a>c) {
        result.textContent = `El orden es: ${b}, ${a} y ${c}`;
    }else{
        result.textContent = `El orden es: ${b}, ${c} y ${a}`;
    }
}else if (c >= a && c >= b) {
    if (a>b) {
        result.textContent = `El orden es: ${c}, ${a} y ${b}`;
    }else{
        result.textContent = `El orden es: ${c}, ${b} y ${a}`;
    }
}
