/**
 * Fetch API
 * Proporciona una interface JavaScript para aceder y manipular partes del canal HTTP, como peticiones y respuestas.
 * Tambien provee un metodo global fetch() que proporciona de forma facil y logica la obtención de recursos de la red.
 * 
 * Está basado en promesas, por lo tanto tiene un response y reject internos:
 * 
 *  Response tiene varios metodos:
 *  arrayBuffer(): Archivos binarios (mp3, pdf, jpg). Se utiliza cuando se necesita manipilar el contenido del archivo
 *  blob(): Archivos binarios (mp3, pdf, jpg). Se ultiliza cuando se va a manipular el contenido y se va a trabajar con el archivo directamente.
 *  clone(): crea un clone de un objeto de respuesta,identico, pero almacenado en otra variable.
 * formData(): se utiliza para leer los objetos formData.
 * json(): convierte los json en un objeto JS
 * text(): Se utiliza cuando queremos leer un archivo de texto.
 */

const button = document.getElementById('button')

//  button.addEventListener('click',() => {
//     if (window.fetch != undefined) console.log('Fetch OK') //Así comprobamos si el navegador soporta fetch
//     else console.log('Cambiá de navegador');
//  })

 //Fetch por defecto trabajo por get

 button.addEventListener('click',() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        //Ahora los imprimimios en pantalla.    
        const list = document.getElementById('list')
        const fragment = document.createDocumentFragment()
        for (const userInfo of res) { //acá recorremos la información de los usuarios.
            const listItem = document.createElement('LI') //Creamos un elemento <li>
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.appendChild(listItem) 
        }
        list.appendChild(fragment) //acá le decimos donde meter el elemtno que estamos creando.
    })
 })