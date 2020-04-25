

const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')

 input.addEventListener('keyup', (e) => {
    console.log(e);
})

input.addEventListener('click', (e)=> {
    console.log(e.key);
})

//target hace referencia al punto donde se origina el evento
// button.addEventListener('click', (e)=> {
//     console.log(e.target)
// })

// const gallery = document.getElementById('gallery')

// gallery.addEventListener('click', (e) => {
//     e.target.classList.add('red')
// }) 
//classList.add es para agregar una clase

// const link = document.getElementById('link')

// link.addEventListener('click', (e) => {
//     e.preventDefault()

// })

// e.preventDefault() hace que el evento por default no se ejecute. Evita el comportamiento por defecto.

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log('El formulario se ha enviado');
// })

button.addEventListener('click', () => {
    input.value = 'Has hecho click'
})

button.click() //de esta forma forzamos a que el evento pase.
