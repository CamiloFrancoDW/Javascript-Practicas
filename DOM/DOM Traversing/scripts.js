//Recorrer el DOM (DOM Traversing) 

//Nos situamos en un nodo y nos movemos asia arriba y abajo, en función de ese nodo que tomamos como referencia.
/* 
Padre - parent (Nodo del que desciende)
    - parentNode - Devuelve el nodo padre (que puede no ser un elemento)
    - parentElement - Devuelve el nodo elemento padre
    NOTA
    Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode y parentElement devolverá siempre null.

Hijos - child (Nodo que desciende de un padre)
    - childNodes - Devuelve todos los nodos hijos
    - children - Devuelve todos los nodos elementos hijos
    - firstChild - Devueleve el primer nodo hijo
    - firstElementChild - Devueleve el primer nodo elemento hijo
    - lastChild - Devueleve el último nodo hijo
    - lastElementChild - Devueleve el último nodo elemento hijo
    - hasChildNodes() - Devueleve true si el nodo tiene hijos y false si no tiene


Hermanos - siblings (Nodo al mismo nivel)
    - nextSibling - Devuelve el siguiente nodo hermano
    - nextElementSibling - Devuelve el siguiente nodo elemento hermano
    - previousSibling - Devuelve el anterior nodo hermano
    - previousElementSibling - Devuelve el anterior nodo elemento hermano
Cercano
    - closest(selector) - Selecciona el nodo más cercano que cumpla      con el selector, aún es experimental.
*/

const parent = document.getElementById('parent')

// console.log(parent.parentElement)

// console.log(parent.childNodes) 
// console.log(parent.children)
// console.log(parent.firstChild) //Aca nos muestra el primer elemento que puede ser un salto de linea.
console.log(parent.firstElementChild)
console.log(parent.lastChild)
console.log(parent.lastElementChild)
console.log(parent.firstChild.hasChildNodes()) //Si el primer hijo tiene hijos
console.log(parent.hasChildNodes()) //Si el elemento tiene hijos

console.log(parent.nextSibling)
console.log(parent.parentElement.nextElementSibling)
console.log(parent.parentElement.previousSibling)
console.log(parent.parentElement.previousElementSibling) 