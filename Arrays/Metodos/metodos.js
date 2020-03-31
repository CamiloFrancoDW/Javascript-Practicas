/* 
Arrays - Métodos II
.from(iterable) - Convierte en array el elemento iterable
.sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.
.forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array.
.some(callback) - Comprueba si al menos un elemento del array cumple la condición
.every(callback) - Comprueba si todos los elementos del array cumplen la condición
.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array
.filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array
.reduce(callback) - Reduce todos los elementos del array a un único valor
*/

/* FROM */
// let word = 'Hola mundo'
// console.log(Array.from(word));
// console.log(word.split('')); // tambien combierte la variable word en un array


/* SORT */
// const letters = ['b', 'c', 'z', 'a']
// const numbers = [1,8,100,300,3]
// console.log(letters.sort())
// console.log(numbers.sort())
// console.log(numbers.sort((a,b)=>a-b)) // ecá determina si el valor de a es menor, igual o mayor que b. Acá nos ordena el array de menor a mayor, para que sea de mayor a mnor tenemos que poner b-a.
// function menorMayor(a, b) {
// if (a-b < 0) return -1;
// if (a-b > 0) return 1;
// if(a == b) return 0;
// }

// console.log(numbers.sort((a,b)=>b-a))
// function mayorMenor(a, b) {
// if (b-a < 0) return -1;
// if (b-a > 0) return 1;
// if(b == a) return 0;
// } 


// callback es una función que la ejecuta otra función dentro.
// valor Unicode es el nro que tienen asignadas las letras Tabla de caracteres



/* FOREACH */
// const numbers = [12, 25, 47, 84, 98]
// numbers.forEach((number)=>console.log(number)) // recorre el array y lo imprime en la consola

// numbers.forEach((number, index) =>
//     console.log(`${number} está en la posición ${index}`))

// const words = ['HTML', 'CSS', 'JavaScript', 'PHP']
// console.log(words.some(word => word.length>10)); //Recorre cada uno de los elementos y comprueba si uno de ellos es mayor que 10

// console.log(words.every(word => word.length>=3)); //Recorre cada uno de los elementos y comprueba si todos ellos son mayor que 3

/* MAP */

// const numbers = [1, 2, 3, 4, 5]

// const numbers2 = numbers.map(number => number * 2)
// console.log(numbers2); 
// const numbers2 = numbers.filter(number => number > 4)
// console.log(numbers2); 

// const numbers2 = numbers.filter(number => number > 80)
// console.log(numbers2)


/* REDUCE */
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.reduce((a,b)=>a+b))
console.log(numbers.reduce((a,b)=>a*b))
console.log(numbers.reduce((a,b)=>a-b))

const users = [ //es un array de objetos de usarios. Vamos a usar reduce para saber cuantos usuarios van a estar en linea. 
    {
        name: 'user 1',
        online: true
    },
    {
        name: 'user 2',
        online: true
    },
    {
        name: 'user 3',
        online: false
    },
    {
        name: 'user 4',
        online: false
    },
    {
        name: 'user 5',
        online: false
    },
    {
        name: 'user 6',
        online: true
    }
]
const usersOnline = users.reduce((cont, user) => {
    if (user.online) cont++
    return cont
},0) // ,0 se pone para que el valor sea numerico.
console.log(`Hay ${usersOnline} usuarios conectados`);