/***
 * Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings

    2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b*h/2
    rectángulo = b*h
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)

    3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
 * 

 
 *  1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings

    2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado)

    3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar" si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar

    4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no. Un número primo es aquel que solo es divisible por sí mismo y la unidad

    5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

    !5 = 5*4*3*2*1 = 120
    6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido

    7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e impares

    8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23

    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.

    10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no. 
   
 */





 /***
  *     1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene    tendrás   ____ años" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings
  * 
  */


  //let name = prompt('Ingresá tu nombre.');
  //let age = parseInt(prompt('Ingresá tu edad.')); // parseInt combierte un string a número.

  //console.log(`Hola ${name} tenés ${age} años y el año que viene vas a tener ${age + 1} años`);





  /**
   *    2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En    primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b*h/2
    rectángulo = b*h
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
   * 
   */

//    let figure = prompt('Introdice la figura geometrica de la que quieres calcular el área: triangle, rectangle o circle.');

//    let base;
//    let heigth;
//    let radius;


//    switch (figure) {
//        case 'triangle':
//            base = prompt('Introduzca la base del triangulo.');
//            heigth = prompt('Introduzca la altura del triangulo.');
//            console.log(`El área del triangulo es de ${(base*heigth)/2}`);
//            break;
//        case 'rectangle':
//            base = prompt('Introduzca la base del rectangulo.');
//            heigth = prompt('Introduzca la altura del rectangulo.');
//            console.log(`El área del rectángulo es de ${base*heigth}`);
//            break;    
//        case 'circle':
//            radius = prompt('Introduzca el radio del círculo.');
//            console.log(`El área del círculo es es de ${Math.PI * Math.pow(radius,2)}`);
//            break;  
//        default: console.log('La figura geométrica ingresada no es válida.');
//            break;
//    }


/**
 * 3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es   impar" si el número es 5 el resultado será: 
 * 1 - es impar 
 * 2 - es par 
 * 3 - es impar 
 * 4 - es par 
 * 5 - es impar
 * 
 */

// let num = parseInt(prompt('Introduce un número'));

// for (let i=1; i<=num; i++) {
//    if ((i%2)==0) {
//       console.log(`${i} - es par.`);
//    }else {
//       console.log(`${i} - es impar.`);
//    }
   
// }

/**
 * 4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no. Un número primo es aquel que solo es divisible por sí mismo y la unidad
 */

// let numero = parseInt(prompt('Introduce un número'));
// let divisores = 0;

// if(numero === 1){ 
//    console.log('El número 1 no es válido.');
// }else {
//    for (let i=2; i<=numero; i++) {
   
//       if(numero % i == 0){
//          console.log(`${numero} / ${i} = ${numero / i} No es primo`);
//          divisores++;
//          break;
//       } else if (divisores==0) {
//          console.log(`${numero} Es primo.`);
//       }
      
//    }
// }
  

/***
 * 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
 * 
 * !5 = 5*4*3*2*1 =120
 * 
 */

let num2 = parseInt(prompt('Introduce un número'));
let result = 1;


for (let i = num2; i > 0; i--){
   result *= i;
}

console.log(`El factorial de ${num2} es ${result}`);