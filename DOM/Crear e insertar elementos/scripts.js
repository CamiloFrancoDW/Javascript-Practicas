//DOM - Crear e insertar elementos

/* 
Crear un elemento: document.createElement(element) // este metodo siempre tiene que ir acompañado de document. / porque es el lugar donde vamos a crear el elemento, en el documento.
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML
Añadir un elemento al DOM: parent.appendChild(element)
Fragmentos de código: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')

/* const itemList = document.createElement('LI')
itemList.textContent = 'Lunes'
daysList.appendChild(itemList) */

title.innerHTML = 'DOM - <span>Crear e insertar elementos I<span>' // Para intruducir etiquetas html dentro de un texto tenemos que usar innerHTML

const fragment = document.createDocumentFragment()

/* for (const day of days) {
    const itemList = document.createElement('LI')
    itemList.textContent = day
    fragment.appendChild(itemList)
} */

// for (const day of days) {
//     daysList.innerHTML += `<li>${day}</li>`;
// }

//intrudiciendo una etiqueta li dentro de una ul
for (const day of days) {
    const itemList = document.createElement('LI')
    itemList.textContent = day
    fragment.appendChild(itemList)
}

daysList.appendChild(fragment) //De esta forma insertamos los elements en el DOM

//Intruciendo iontions denro de select
for (const day of days) {
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', day.toLowerCase()) //Se agrega el value en minuscula
    selectItem.textContent = day //Se agrega el cntenido de la etiqueta.
    fragment.appendChild(selectItem)
}

selectDays.appendChild(fragment) //De esta forma insertamos los elements en el DOM
