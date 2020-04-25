/* 
document.getElementById('id') - Acceder a un elemento a través de su id
document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS
document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/
//const title = document.getElementById('title') //El parametro es nu string y por eso tiene que ir entre comillas
//title.textContent = prompt('Ingresa el texto que queres que se vea')

// const paragraph = document.querySelector('.paragraph') accediendo desde el document
// const span = document.getElementById('title').querySelector("span") accediendo desde el element 

// const paragraphs = document.querySelectorAll('.paragraph')

const paragraphsSpread = [...document.querySelectorAll('.paragraph')]

// const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))

// const paragraphs = document.querySelectorAll('.paragraph')
// paragraphs[0].style.color = 'red'

//paragraphs.map(p => p.style.color = 'green')

//paragraphsSpread.map(p => p.style.color = 'green')

paragraphsArray.map(p=>p.style.color='blue') 