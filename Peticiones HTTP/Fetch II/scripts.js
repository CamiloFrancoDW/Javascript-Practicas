/**
 * Fetch API
 * Para hacer peticiones POST, el metodo fetch admite un segundo parametro.
 * 
 * fetch ( url, {
 *  method: 'POST',
 * body: Los datos que enviamos. Si es un objeto hay que convertirlos con JSON.stringify(datos),
 * headers: {La interfaz Headers de la Fetch API permite realizar diversas acciones en los Headers de solicitud y respuesta HTTP.Estas acciones incluyen recuperar, establecer, agregar y eliminar. Un objeto Header tiene una lista  asociada que inicialmente está vacía, y consta de cero o más pares de nombre y valor.
 * 
 * https://developer.mozilla.org/es/docs/Web/API/Headers
 * }
 * })
 * 
 */

//  const button = document.getElementById('button')

//  button.addEventListener('click',() => {
//     const newPost = {
//         title: 'Nuevo post',
//         body: 'Este es el texto del nuevo post',
//         id: 1
//     }

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(newPost),
//         headers: {
//             "Content-type": "application/json"
//         }
//     }).then(res=>res.json())
//     .then(data => console.log(data))

//     // console.log(newPost);
//     // console.log(JSON.stringify(newPost));
    
    
//  })

//  button.addEventListener('click',() => {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8"
//         }
//       })
//       .then(response => response.json())
//       .then(json => console.log(json))
//  })

fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res => res.json())
 .then( res => console.log(res))