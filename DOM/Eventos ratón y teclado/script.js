/* 
Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseup - cuando soltamos el boton izquierdo del ratón
    mousemove - cuando movemos el ratón
Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/

//Un evento es cualquier cosa que sucede en nuestro ducumento.
//Observadores de mutuación trabajan sobre el dom virtual

const button = document.getElementById('button')
const input = document.getElementById('input')
const box = document.getElementById('box')

/* button.addEventListener('click', () => {
    console.log('CLICK')
}) */

/* button.addEventListener('dblclick',()=> {
    console.log('DOBLE CLICK')
}) */

///Cambiar de color la caja

// box.addEventListener('mouseenter', () => {
//     box.style.background="green";
// })

// box.addEventListener('mouseenter', () => { 
//     box.classList.replace('red', 'green')
// })
// box.addEventListener('mouseleave', () => {
//     box.classList.replace('green', 'red')
// })



// box.addEventListener('mousedown', () => {
//     console.log(alert('Click en la caja'));
// })
// box.addEventListener('mouseup', () => {
//   console.log('Te fuiste de la caja.')
// })
 

// box.addEventListener('mousemove', () => {
//     console.log('ESTAS MOVIENDO EL CURSOR EN LA CAJA');
// })

/* input.addEventListener('keydown', () => {
    console.log('HAS PULSADO UNA TECLA');
})
input.addEventListener('keyup', () => {
  console.log('HAS SOLTADO UNA TECLA')
})
input.addEventListener('keypress', () => {
  console.log('ESTÁS PULSANDO UNA TECLA')
}) */


//la clase o id + addEventListener ('el evento', la funcion callback)