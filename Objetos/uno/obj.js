const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego', 'Pepe', 'Rosa', 'Tomás']
}

console.log(person)
console.log(person.name)
console.log(person['name'])

for (const key in person) {
    console.log(key) // para imprimir las claves
}

for (const key in person) {
    console.log(person[key]) // para imprimir los valores
}

for (const son of person.sons) {
    console.log(son)
}

for (const son in person.sons) {
    console.log(son) // el IN imprime los indicies del array
}

console.log(`Hola ${person.name}, tenés ${person.age} años y tus hijos se llaman ${person.sons.join(', ')} `); 

/***
 * Programación orientada a objetos
 * 
 * Conceptos fundamentales:
 * Clases Es un molde que sirve para generar objetos. Cuando creamos un objeto decimos que lo instanciamos. 
 * Herencia
 * Objetos
 * Métodos
 * Eventos
 * 
 * 
 * 
 * 
 * class Persona {
 *         CONSTRUCTORES
*          constructor(nombre, apellido, edad) {
*              this.nombre = nombre
*              this.apellido = apellido
*              this.edad = edad
*          }
           METODOS
           saludar(){
               return `Hola me llamo ${this.nombre} y tengo ${this.edad} años.`;
           }
 * 
 * }
 * 
 * Instanciar un objeto
 * 
 * const juan = new Persona ('Camilo', 'Franco', 38);
 * 
 */

class Persona {
    
    constructor(nombre, apellido, edad) {
            this.nombre = nombre
            this.apellido = apellido
            this.edad = edad

            this.datos = `Me llamo ${nombre} ${apellido} y tengo ${edad} años.` // Si estamos dentro de la funcion no necesitamos poner this
    }
        
    saludar(){
            return `Hola me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }


}

const camilo = new Persona ('Camilo', 'Franco', 38); //instanciando un objeto de clase Persona
const maru = new Persona ('Maru', 'Drozd', 38);

console.log(camilo);
console.log(maru);
console.log(camilo.saludar());
console.log(maru.saludar());