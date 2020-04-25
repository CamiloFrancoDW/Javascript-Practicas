
// Atributos
//     element.getAttribute('attribute')
//     element.setAttribute('attribute', value)
// Clases
//     element.classList.add('class','class',...) agrega una o mas clases
//     element.classList.remove('class','class',...) remueve una o mas clases
//     element.classList.toggle('class')
//     element.classList.contains('class') devuelve truo o false
//     element.classList.replace('oldClass', newClass) remplaza la clase
    
//     element.classList.toggle('class'[,force])
// atributos directos
//     id
//     value


const title = document.getElementById('title')
const name = document.getElementById('name')



// console.log(name.getAttribute('type'))
// name.setAttribute('type', prompt('Set type(radio, number, text, date)'))

console.log(name)

// title.classList.add('main-title','other-title')
// title.classList.remove('title')

// if(title.classList.contains('title')) console.log('Title tiene la clase title')
// else console.log('Title no tiene la clase title') 

title.classList.replace('title','main-title')

// console.log(title.innerHTML) este tambien muestra las etiquetas adentro del elemento
// console.log(title.textContent) este solo muestra el texto dentro del elemento
console.log(name.value.length)
/* console.log(title)
console.log(name) */