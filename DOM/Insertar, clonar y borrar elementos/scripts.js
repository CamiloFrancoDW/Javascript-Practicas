/*
Insertar y eliminar elementos II
    parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes del elemento de referencia
    SOPORTE TOTAL
    parent.insertAdjacentElement(position, element) posisición en la que vamos a insertar y el elememento que vamos a insertar.
    
            positions: 
                beforebegin - Antes de que empiece (hermano anterior)
                afterbegin - después de que empiece (primer hijo)
                beforeend - antes de que acabe (último hijo)
                afterend - después de que acabe (hermano siguiente)

    parent.insertAdjacentHTML(position, HTML)
    parent.insertAdjacentText(position, text)
    
   
    parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
*/


const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "I'm a new element"


// list.insertBefore(newElement, list.children[0])

// list.appendChild(newElement)

// list.children[0].insertAdjacentElement('beforebegin',newElement)
// list.insertAdjacentElement('afterbegin',newElement)
// list.insertAdjacentElement('beforeend',newElement)
//list.children[1].insertAdjacentElement('afterend',newElement)

// list.children[1].insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>')
// list.children[1].insertAdjacentText('afterend', '<li>Elemento con HTML</li>')

// list.replaceChild(newElement,list.children[0]) //Remplazamos el elemento nuevo por el viejo.



/*
    DOM manipulation convenience methods - JQuery Like
    https://caniuse.com/#search=jQuery-like
    positions:
        parent.before() - Antes de que empiece (hermano anterior)
        parent.prepend() - después de que empiece (primer hijo)
        parent.append() - antes de que acabe (último hijo)
        parent.after() - después de que acabe (hermano siguiente) 
          child.replaceWith(newChild)
funcionan como los anteriores pero son mas simples

          */

// list.children[0].before(newElement)
// list.prepend(newElement)
// list.append(newElement)
// list.children[1].after(newElement)

// list.children[1].replaceWith(newElement) // que elemento queremos reemplazar y por un nuevo elemento.

// document.getElementById('child-to-replace').replaceWith(newElement) //Le decimos que lemento queremos reemplazar y porque elemento.

/*
    Clonar y eliminar elementos
        element.cloneNode(true|false) - Clona el nodo. Si le pasamos true clona todo el elemento con los hijos, si le pasamos false clona solo el elemento sin hijos
        element.remove() - Elimina el nodo del DOM
        element.removeChild(child) - Elimina el nodo hijo del DOM
*/

// list.after(list.cloneNode(true))

// list.remove()

list.removeChild(list.children[1]) 